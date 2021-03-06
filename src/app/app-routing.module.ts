import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { RandomGuard } from './_helpers/random.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'secret-random-number',
    loadChildren: './random/random.module#RandomModule',
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

