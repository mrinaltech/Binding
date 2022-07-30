import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { RouterLink} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    BiddersignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatTableModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
