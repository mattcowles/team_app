import "polyfills";

import { Component, NgModule    } from "@angular/core";
import { BrowserModule          } from "@angular/platform-browser";
import { FormsModule            } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule             } from "@angular/http";
import { RouterModule           } from "@angular/router";

import { SummaryComponent  } from "SummaryComponent";

var AppComponent = Component({
    selector: "summary-app",
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
            component: SummaryComponent
        }
    ], { enableTracing: true });

var SummaryAppModule = NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        SummaryComponent,
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
    .Class({
        constructor: function() {}
    });

platformBrowserDynamic().bootstrapModule(SummaryAppModule);
