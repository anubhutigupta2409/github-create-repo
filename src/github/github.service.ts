import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { oauthAuthorizationUrl } from "@octokit/oauth-authorization-url";
import { createOAuthUserAuth } from "@octokit/auth-oauth-user";
import { Octokit } from "octokit";
<<<<<<< HEAD
import * as templateRepo from  "../../templateRepo.json";
=======
import * as github_settings from  "../../github_settings.json";
>>>>>>> f3a445f (Basic Functionality implemented)



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

<<<<<<< HEAD
    //function to be executed once the user authorises at github login interface
    async callback(code: string) : Promise<string>
    {

        //authentication strategy
=======
    //authentication strategy
    async callback(code: string) : Promise<string>{

>>>>>>> f3a445f (Basic Functionality implemented)
        const auth = createOAuthUserAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            code,
        });
<<<<<<< HEAD

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
=======
        const { token } = await auth();
        const octokit = new Octokit({ auth: token });
        const res = await octokit.rest.repos.createUsingTemplate({
            template_owner: github_settings.template_owner,
            template_repo: github_settings.template_repo,
            name: github_settings.new_repo_name,
        });
        if (res.status !== 201) {
            throw new HttpException(
                "Some error occured while creating the repo",
                HttpStatus.FAILED_DEPENDENCY,
            );
        }
        return res.data.html_url;
>>>>>>> f3a445f (Basic Functionality implemented)

    }

   }
