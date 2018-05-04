import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import { Router    } from "@angular/router";
import   template    from "./index.html";

var UserProfileFormComponent = Component({

    selector: "user-profile-form",
    template: template
}).Class({
    constructor: [
        Http,
        Router,
        function(http,router) {
            this.customers = null;
            this.http      = http;
            this.keywords  = "";
            this.router    = router;
            this.first_name = null;
            this.last_name = null;
            this.email = null;
            this.weight = null;
            this.height = null;
            this.isPublic = null;

        }
    ],
    ngOnInit: function() {
        var self = this;
        self.labels = [];
        self.data = [];
        self.first_name = "Tom";
        self.last_name = "Sullivan";
        self.email = "mo@goh.com";
        self.weight = "23";
        self.height = "123";
        self.isPublic = true;

    },
    onSubmit: function() {
        this.submitted = true;
    },


});

export { UserProfileFormComponent };