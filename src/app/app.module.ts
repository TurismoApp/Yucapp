import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { listItem } from "./list-activities/list-item.component";
import { PagerModule, PagerComponent } from "nativescript-pager/angular";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        PagerModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        
    ],
    declarations: [
        AppComponent,
        ListActivitiesComponent,
        listItem
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
