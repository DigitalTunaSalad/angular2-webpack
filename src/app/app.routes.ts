import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
export const routes: Routes =
    [
        {
            path: "",
            redirectTo: "/home",
            pathMatch: "full"
        },
        {
            path: "home",
            component: HomeComponent
        },
        {
            path: "about",
            component: AboutComponent
        }
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);