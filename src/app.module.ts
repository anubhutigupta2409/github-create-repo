import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GithubController } from "./github/github.controller";
import { GithubService } from "./github/github.service";
import { GithubModule } from "./github/github.module";
import { ConfigModule } from "@nestjs/config";

@Module({

    /*The Config Module code will load and parse our .env file and 
    merge key/value pairs from the .env file with environment variables assigned to process.env, 
    and store the result in a private structure that you can access through the ConfigService 
    */
    imports: [GithubModule, ConfigModule.forRoot()],
    controllers: [AppController, GithubController],
    providers: [AppService, GithubService],
})
export class AppModule {}