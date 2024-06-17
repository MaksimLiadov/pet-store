import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";
import { MainComponent } from "./main-page.components/main.component/main.component";

const appRoutes: Routes = [
    { path: "", component: MainComponent }
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};