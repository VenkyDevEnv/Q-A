import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    BodyComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    TodoComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
