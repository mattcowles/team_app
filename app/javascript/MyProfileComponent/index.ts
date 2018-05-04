import { Component }      from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Http }           from "@angular/http";
import                         "rxjs/add/operator/map";
import   template         from "./template.html";
import { UserProfileFormComponent  } from "../UserProfileFormComponent";

var MyProfileComponent = Component({
  selector: "myprofile",
  template: template
}).Class({
  constructor: [
    ActivatedRoute,
    Http,
    UserProfileFormComponent,
    function(activatedRoute,
             http,
             userProfileFormComponent
    ) {
      this.activatedRoute = activatedRoute;
      this.http           = http;
      this.id             = null;
      this.user           = null;
      this.teams          = null;
      this.user_sports    = null;
      this.user_participations = null;
      this.userProfileFormComponent = userProfileFormComponent
      this.userEdit = {};

    }
  ],
    ngOnInit: function() {
        var self = this;
        var userObservableFailed = function(response) {
            alert(response);
        }
        var parseUser = function(response) {
            var user = response.json().user;
            console.log(response);
            return user;
        }
        var userRouteSuccess = function(params) {
            var observable = self.http.get(
                "/users/" + params["id"] + ".json"

            );
            var mappedObservable = observable.map(parseUser)

            mappedObservable.subscribe(
                function(user) { self.user = user; },
                userObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(userRouteSuccess,userObservableFailed);

        var teamObservableFailed = function(response) {
            alert(response);
        }
        var parseTeams = function(response) {
            var teams = response.json().teams;
            console.log(response);
            return teams;
        }
        var teamRouteSuccess = function(params) {
            var observable = self.http.get(
                "/team_users/" + params["id"] + "/teams.json"

            );
            var mappedObservable = observable.map(parseTeams)

            mappedObservable.subscribe(
                function(teams) { self.teams = teams; },
                teamObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(teamRouteSuccess,teamObservableFailed);

        var sportObservableFailed = function(response) {
            alert(response);
        }
        var parseSports = function(response) {
            var sports = response.json().user_sports;
            console.log(response);
            return sports;
        }
        var sportRouteSuccess = function(params) {
            var observable = self.http.get(
                "/user_sports/" + params["id"] + "/sports.json"

            );
            var mappedObservable = observable.map(parseSports)

            mappedObservable.subscribe(
                function(sports) { self.user_sports = sports; },
                sportObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(sportRouteSuccess,sportObservableFailed);

        var participationObservableFailed = function(response) {
            alert(response);
        }
        var parseParticipations = function(response) {
            var participations = response.json().user_participations;
            console.log(response);
            return participations;
        }
        var participationRouteSuccess = function(params) {
            var observable = self.http.get(
                "/user_participations/" + params["id"] + "/participations.json"

            );
            var mappedObservable = observable.map(parseParticipations)

            mappedObservable.subscribe(
                function(participations) { self.user_participations = participations; },
                participationObservableFailed
            );
        }
        self.activatedRoute.params.subscribe(participationRouteSuccess,participationObservableFailed);
    },
    editUser: function(user) {
        var self = this;
        this.display='block';
        Object.assign(self.userEdit, self.user);

    },
    onCloseHandled: function() {
        this.display='none';
    },
    onSubmit: function() {
        var self = this;

       this.display='none';
        console.log(JSON.stringify(self.userEdit));

        var observable = self.http.put(
            "/users/" + self.userEdit.id,
            self.userEdit);

        var mappedObservable = observable.map(
                function(response) {
                    console.log(JSON.stringify(response));

                    return response;
                },
            )

        mappedObservable.subscribe(
            function(response) { Object.assign(self.user, self.userEdit); },
            function(response) { alert(response); },
        );
    },


});
export { MyProfileComponent };
