/***
 * Excerpted from "Rails, Angular, Postgres, and Bootstrap, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/dcbang2 for more book information.
 ***/
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
