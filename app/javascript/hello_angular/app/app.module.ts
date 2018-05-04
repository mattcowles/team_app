import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { UserProfileFormComponent  } from "../../UserProfileFormComponent";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UserProfileFormComponent
  ],
  providers: [ChartsModule, UserProfileFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
