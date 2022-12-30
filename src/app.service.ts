import { join } from "path";
import { Injectable } from "@nestjs/common";

//making it a dependency provider under IOC(Inversion of control) priniciple
@Injectable()
export class AppService {
    getHtmlFilePath(): string 
    {
        return join(process.cwd()/*gets the current working directory*/, "client", "index.html");//joining the path segments
    }
}
