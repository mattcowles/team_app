import "polyfills";

import { Component, NgModule    } from "@angular/core";
import { BrowserModule          } from "@angular/platform-browser";
import { FormsModule            } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule             } from "@angular/http";
import { RouterModule           } from "@angular/router";

import { UserListComponent  } from "UserListComponent";
import { MyProfileComponent  } from "MyProfileComponent";
import { UserDetailsComponent } from "UserDetailsComponent";
import { ChartsModule           }   from 'ng2-charts';
import {UserProfileFormComponent} from "../UserProfileFormComponent";
//import { UserProfileFormComponent  } from "UserProfileFormComponent";



var AppComponent = Component({
    selector: "users-app",
    template: "<router-outlet></router-outlet>"
}).Class({
    constructor: [
        function() {}
    ]
});


var routing = RouterModule.forRoot(
    [
        {
            path: ":id/myprofile",
            component: MyProfileComponent
        },
        {
            path: ":id",
            component: UserDetailsComponent
        },
        {
            path: "",
            component: UserListComponent
        },
    //     {
    //         path: ":id/user/edit",
    //         component: UserProfileFormComponent
    //     },
     ], { enableTracing: true });

var UserAppModule = NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartsModule,
        routing
    ],
    declarations: [
        UserListComponent,
        MyProfileComponent,
        UserDetailsComponent,
       UserProfileFormComponent,
        AppComponent
    ],
    providers: [ChartsModule, UserProfileFormComponent],
    bootstrap: [ AppComponent ]
})
    .Class({
        constructor: function() {}
    });

platformBrowserDynamic().bootstrapModule(UserAppModule);
