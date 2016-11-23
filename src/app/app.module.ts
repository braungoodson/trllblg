import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { HomeComponent } from './home/home.component';
import { PostsCreateFormComponent } from './posts-create-form/posts-create-form.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/create', component: PostsCreateComponent }
];

export const firebase_config = {
  apiKey: "AIzaSyAlhm2r_sJEtt5A0bugWEod3tP2ZO3p7Z8",
  authDomain: "trllblg.firebaseapp.com",
  databaseURL: "https://trllblg.firebaseio.com",
  storageBucket: "trllblg.appspot.com",
  messagingSenderId: "619277237870"
};

const firebase_auth_config = {
  // provider: AuthProviders.Google,
  // method: AuthMethods.Redirect
  method: AuthMethods.Anonymous
};

@NgModule({
  declarations: [
    AppComponent,
    PostsCreateComponent,
    HomeComponent,
    PostsCreateFormComponent
  ],
  imports: [
    // AngularFireModule.initializeApp(firebase_config),
    AngularFireModule.initializeApp(firebase_config,firebase_auth_config),
    FormsModule,
    RouterModule.forRoot(app_routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
