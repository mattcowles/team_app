import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http }           from "@angular/http";
import                         "rxjs/add/operator/map";
import   template         from "./template.html";
import { ChartsModule }   from 'ng2-charts';

var UserDetailsComponent = Component({
  selector: "user-details",
  template: template
}).Class({
  constructor: [
    ActivatedRoute,
    Http, 
    ChartsModule,

      function(activatedRoute,http,charts) {
      this.activatedRoute = activatedRoute;
      this.http           = http;
      this.id             = null;
      this.user       = null;
      this.data = null;
      this.labels = null;
      this.team_participation = null;


      }
  ],
  ngOnInit: function() {
      var self = this;
      self.labels = [];
      self.data = [];

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

      var userParticipationObservableFailed = function(response) {
          alert(response);
      }
      function compare(a,b) {
          if (a.date_of < b.date_of)
              return -1;
          if (a.date_of > b.date_of)
              return 1;
          return 0;
      }

      var parseParticipations = function(response) {
          var userParticipations = response.json().participation_bydate;
          console.log(JSON.stringify(userParticipations));
          return userParticipations;
      }
      var userParticipationRouteSuccess = function(params) {
          var observable = self.http.get(
              "/users/"+params["id"]+"/participation/bydate.json"

          );
          var mappedObservable = observable.map(parseParticipations)

          mappedObservable.subscribe(
              function(userParticipations) {
                  var part = JSON.parse(userParticipations);
                  part.sort(compare)

                  var l = [];
                  var d = [];
                  self.labels = [];
                  self.data = [];
                  for(var key in part) {
                      var item = part[key];
                      var dateKey = 'date_of';
                      var totalKey = 'total';
                      console.log(JSON.stringify(item));

                      l.push(item[dateKey]);
                      d.push(item[totalKey]);
                      // only show one week
                      // if(l.length == 7) {
                      //     break;
                      // }
                  }
                  self.data = d;
                  self.labels = l;

              },
              userParticipationObservableFailed
          );
      }
      self.activatedRoute.params.subscribe(userParticipationRouteSuccess,userParticipationObservableFailed);

  }

});
export { UserDetailsComponent };
