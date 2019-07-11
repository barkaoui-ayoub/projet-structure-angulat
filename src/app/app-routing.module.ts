import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    loadChildren: () =>
    import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
   //component : AuthLayoutComponent,
    loadChildren: () =>
    import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
