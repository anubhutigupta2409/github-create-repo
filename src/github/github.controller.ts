import { Controller, Get, Res, Query } from "@nestjs/common";
import { Response } from "express";

import { GithubService } from "./github.service";

@Controller("github")
export class GithubController {

    //Injection Token
    constructor(private readonly githubService: GithubService) {}

    //Request Handlers
    @Get("login")
    startGitHubLoginFlow(@Res() res: Response): void {
        const url: string = this.githubService.githubLogin();
        res.redirect(url);
    }

    @Get("callback")
    async handleGitHubCallback(
        @Query("code") code: string,
        @Res() res: Response,
    ): Promise<void> {
        const redirect_url: string =
            await this.githubService.callback(code);
        res.redirect(redirect_url);
    }
}
