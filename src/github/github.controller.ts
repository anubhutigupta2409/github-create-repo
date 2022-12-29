import { Controller, Get, Res, Query } from "@nestjs/common";
import { Response } from "express";

import { GithubService } from "./github.service";

@Controller("github")
export class GithubController {

    //Injection Token
    constructor(private readonly githubService: GithubService) {}

    //Request Handlers

    //when "github/login" route is hit, the client is redirected to github's login interface for authrisation
    @Get("login")
    getGitHubLogin(@Res() res: Response): void 
    {
        const url: string = this.githubService.githubLogin();
        res.redirect(url);
    }

    //"github/callback" is the route which github server falls back to once the user has authorised themselves
    @Get("callback")

    //we extract the Query param from the url, since a code is sent back by the github's server
    //which helps us get the access token of the user
    async handleCallback(
        @Query("code") code: string,
        @Res() res: Response,
    ): Promise<void> 
    {
        const redirectUrl: string = await this.githubService.callback(code);
        res.redirect(redirectUrl);//now redirect the user to the newly created repo
    }
}