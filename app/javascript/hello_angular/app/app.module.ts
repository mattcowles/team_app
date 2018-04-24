import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from '../../myprofile/myprofile.component';
import { SummaryComponent } from '../../summary/summary.component';
import {UserComponent} from "../../users/user.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    SummaryComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
