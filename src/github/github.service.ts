import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { oauthAuthorizationUrl } from "@octokit/oauth-authorization-url";
import { createOAuthUserAuth } from "@octokit/auth-oauth-user";
import { Octokit } from "octokit";
import * as templateRepo from  "../../templateRepo.json";



@Injectable()
export class GithubService {

    //authorising the user and letting them login with their github account
    //and also provide permissions according to the defined scopes
    githubLogin() : string
    {
        //getting the github's identity url for oauth web flow
        const {url} =   oauthAuthorizationUrl({
            clientType: "oauth-app",
            clientId: process.env.GITHUB_CLIENT_ID,
            scopes: process.env.GITHUB_SCOPES
        });

        return url;
    }

    //function to be executed once the user authorises at github login interface
    async callback(code: string) : Promise<string>
    {

        //authentication strategy
        const auth = createOAuthUserAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            code,
        });

        // Exchanges the code for the user access token authentication on first call
        // and caches the authentication for successive calls
        const { token } = await auth();

        const octokit = new Octokit({ auth: token });

        /*
        Creates a new repository using a repository template. 
        Use the template_owner and template_repo route parameters to specify the repository to use as the template.
        */
        const res = await octokit.rest.repos.createUsingTemplate({
            template_owner: templateRepo.template_owner,
            template_repo: templateRepo.template_repo,
            name: templateRepo.new_repo_name,
        });

        if (res.status !== 201) {
            //exception handling
            throw new HttpException(
                "Sorry! Repo can't be created due to some error",
                HttpStatus.FAILED_DEPENDENCY,
            );
        }

        return res.data.html_url;//url to the newly created repository

    }

   }
