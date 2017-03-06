import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBo41ERx8-sWyLWx56WvFc-RH6-nCvpFTI',
  authDomain: 'partways-dev.firebaseapp.com',
  databaseURL: 'https://partways-dev.firebaseio.com',
  storageBucket: 'partways-dev.appspot.com',
  messagingSenderId: '1727367456',
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouting,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
