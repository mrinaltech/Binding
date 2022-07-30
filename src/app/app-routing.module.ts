import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login' ,component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'biddersignup',component:BiddersignupComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
