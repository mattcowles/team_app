import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import { Router    } from "@angular/router";
import   template    from "./template.html";

var UserListComponent = Component({

  selector: "user-list",
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
      this.loadUsers();
    }
  ],
  viewMyProfile: function(user) {
    this.router.navigate(["/",user.id, "myprofile"]);
  },
  viewPublic: function(user) {
      this.router.navigate(["/",user.id]);
  },
  loadUsers: function() {
      var self = this;
      self.http.get(
          "/users.json"
      ).subscribe(
          function(response) {
              self.users = response.json().users;
          },
          function(response) {
              window.alert(response);
          }
      );
  }

});

export { UserListComponent };
