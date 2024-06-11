import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";

import { AppComponent } from "./app.component";

const appRoutes: Routes = [

    { path: "", component: AppComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};