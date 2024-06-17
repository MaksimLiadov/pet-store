import { Injectable } from "@angular/core";

@Injectable()
export class Config {
    private BackendUrl = "https://petstore.swagger.io/v2";

    public getBackendUrl(): string {
        return this.BackendUrl;
    }
}
