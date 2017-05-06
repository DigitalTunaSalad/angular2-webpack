import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";

import { routing } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    // components
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }