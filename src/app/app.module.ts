import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { DiaryItem } from "./diary-activity/diary-item.component";
import { DetailsActivityComponent } from './details-activity/details-activity.component';
import { PagerModule } from 'nativescript-pager/angular';
import { imagesModalComponent } from "./modal-images/details-modal.component";
import { DiaryActivityComponent } from './diary-activity/diary-activity.component';
import { MapComponent } from "./map-component/Map.component";
import { BottomMenuComponent } from "./bottom-menu/bottom-menu.component";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { PlacesInterestComponent } from "./places-interest/places-interest.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        PagerModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUIListViewModule,
        NativeScriptLocalizeModule
    ],
    declarations: [
        AppComponent,
        ListActivitiesComponent,
        DiaryItem,
        DetailsActivityComponent,
        imagesModalComponent,
        DiaryActivityComponent,
        MapComponent,
        BottomMenuComponent,
        ActionBarComponent,
        PlacesInterestComponent,
    ],
    entryComponents: [imagesModalComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
