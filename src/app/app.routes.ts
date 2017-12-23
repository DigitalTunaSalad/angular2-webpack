import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home";
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
        }
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);