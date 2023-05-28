import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class URLHelperService {
    constructor(private httpService: CustomHttpService) {

    }

    private env: string = this.httpService.getCurrentEnvironment();
    private Server: string = this.getServerUrl(this.env);

    getServerUrl(env: string): string {
        let server = "";
        switch (env) {
            case "LOCALDEV": {
                server = "http://localhost:8080/api";
                break;
            }
            // case "TEST": {
            //     server = "https://my-test-site-api.azurewebsites.net/";
            //     break;
            // }
            // case "PROD": {
            //     server = "https://my-prod-site-api.azurewebsites.net/";
            //     break;
            // }
            default: {
                console.error('No Env Found');
                server = "http://localhost:8080/api/";
                //server = "https://my-prod-site-api.azurewebsites.net/";
            }
        }
        return server;
    }

    public PlayRecord = this.Server + '/PlayRecord/';
}