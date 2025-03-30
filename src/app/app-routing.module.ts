import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutes } from './home/home.routes';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: HomeRoutes,
    // canActivate: [AuthGuard]
  },
  {
  path: 'sign-in',
  component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'sign-in'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
