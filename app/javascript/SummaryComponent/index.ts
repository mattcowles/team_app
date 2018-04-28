import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http }           from "@angular/http";
import                         "rxjs/add/operator/map";
import   template         from "./template.html";

var SummaryComponent = Component({
  selector: "summary",
  template: template
}).Class({
  constructor: [
    ActivatedRoute,
    Http,
    function(activatedRoute,http) {
      this.activatedRoute = activatedRoute;
      this.http           = http;
      this.id             = null;
      this.organization_teams  = null;

    }
  ],
    ngOnInit: function() {
        var self = this;

        var teamObservableFailed = function(response) {
            alert(response);
        }
        var parseTeams = function(response) {
            var teams = response.json().organization_teams;
            console.log(response);
            return teams;
        }
        var teamRouteSuccess = function(params) {
            var observable = self.http.get(
                "/organizations/1/teams.json"

            );
            var mappedObservable = observable.map(parseTeams)

            mappedObservable.subscribe(
                function(teams) { self.organization_teams = teams; },
                teamObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(teamRouteSuccess,teamObservableFailed);

    },
    editUser: function() {

    }


});
export { SummaryComponent };
