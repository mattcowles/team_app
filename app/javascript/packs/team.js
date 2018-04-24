import "polyfills";

import { Component, NgModule    } from "@angular/core";
import { BrowserModule          } from "@angular/platform-browser";
import { FormsModule            } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule             } from "@angular/http";
import { RouterModule           } from "@angular/router";

import { UserComponent  } from "../users/user.component";
import { MyProfileComponent } from "../myprofile/myprofile.component";

var AppComponent = Component({
  selector: "team-app",
  template: "<router-outlet></router-outlet>"
}).Class({
  constructor: [
    function() {}
  ]
});




var routing = RouterModule.forRoot( 
[
  {
    path: "user",
    component: UserComponent
  },
  {
    path: ":id",
    component: MyProfileComponent
  }
]);

var UsersAppModule = NgModule({

  // rest of the code...

  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
      UserComponent,
      MyProfileComponent,
      AppComponent
  ],
  bootstrap: [ AppComponent ]
})
.Class({
  constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(UsersAppModule);
