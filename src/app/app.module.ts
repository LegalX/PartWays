import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';
import { PartyComponent } from './party/party';

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
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouting,
  ],
  providers: [
    AuthGuard,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PartyComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
