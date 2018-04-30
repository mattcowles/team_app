import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http }           from "@angular/http";
import { ChartsModule } from 'ng2-charts'
import                         "rxjs/add/operator/map";
import   template         from "./template.html";

var SummaryComponent = Component({
  selector: "summary",
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
      this.organization_teams  = null;
      this.labels = null;
      this.data = null;
      this.labels = null;
      this.team_participation = null;

    }
  ],
    ngOnInit: function() {
        var self = this;
        self.labels = [];
        self.data = [];


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
                function(teams) {
                    self.organization_teams = teams;

                },
                teamObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(teamRouteSuccess,teamObservableFailed);

        var teamParticipationObservableFailed = function(response) {
            alert(response);
        }
        var parseParticipations = function(response) {
            var teamParticipations = response.json().team_participation;
            console.log(JSON.stringify(teamParticipations));
            return teamParticipations;
        }
        var teamParticipationRouteSuccess = function(params) {
            var observable = self.http.get(
                "/organizations/1/teams/participation.json"

            );
            var mappedObservable = observable.map(parseParticipations)

            mappedObservable.subscribe(
                function(teamParticipations) {
                    var part = JSON.parse(teamParticipations)
                    var l = [];
                    var d = [];
                    self.labels = [];
                    self.data = [];
                    for(var key in part) {
                        var item = part[key];
                        var nameKey = 'name';
                        var totalKey = 'total';
                        console.log(JSON.stringify(item));

                        l.push(item[nameKey]);
                        d.push(item[totalKey]);
                    }
                    self.data = d;
                    self.labels = l;

                },
                teamParticipationObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(teamParticipationRouteSuccess,teamParticipationObservableFailed);
    },
    editUser: function() {

    }


});
export { SummaryComponent };
