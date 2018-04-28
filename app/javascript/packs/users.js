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


var AppComponent = Component({
    selector: "shine-users-app",
    template: "<router-outlet></router-outlet>"
}).Class({
    constructor: [
        function() {}
    ]
});


var routing = RouterModule.forRoot(
    [
        {
            path: "",
            component: UserListComponent
        },
        {
            path: ":id",
            component: UserDetailsComponent
        },
        {
            path: ":id/myprofile",
            component: MyProfileComponent
        }
    ], { enableTracing: true });

var UserAppModule = NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        UserListComponent,
        MyProfileComponent,
        UserDetailsComponent,
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
    .Class({
        constructor: function() {}
    });

platformBrowserDynamic().bootstrapModule(UserAppModule);
