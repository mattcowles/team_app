import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http }           from "@angular/http";
import                         "rxjs/add/operator/map";
import   template         from "./template.html";

var UserDetailsComponent = Component({
  selector: "user-details",
  template: template
}).Class({
  constructor: [
    ActivatedRoute,
    Http,
    function(activatedRoute,http) {
      this.activatedRoute = activatedRoute;
      this.http           = http;
      this.id             = null;
      this.user       = null;

    }
  ],
  ngOnInit: function() {
    var self = this;
      var observableFailed = function(response) {
          alert(response);
      }
      var parseUser = function(response) {
          var user = response.json().user;
          console.log(response);
          return user;
      }
      var routeSuccess = function(params) {
          var observable = self.http.get(
              "/users/" + params["id"] + ".json"
          );
          var mappedObservable = observable.map(parseUser)

          mappedObservable.subscribe(
              function(user) { self.user = user; },
              observableFailed
          );
      }
      self.activatedRoute.params.subscribe(routeSuccess,observableFailed);
  }

});
export { UserDetailsComponent };
