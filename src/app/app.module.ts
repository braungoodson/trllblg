import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { HomeComponent } from './home/home.component';
import { PostsCreateFormComponent } from './posts-create-form/posts-create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsCreateComponent,
    HomeComponent,
    PostsCreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
