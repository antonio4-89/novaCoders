import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutes } from './home/home.routes';
import { AuthGuard } from './services/auth.guard';
import { PublicGuard } from './services/public.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: HomeRoutes,
    canActivate: [AuthGuard]
  },
  {
  path: 'sign-in',
  component: AuthComponent,
  canActivate: [PublicGuard], // Bloquea si ya está autenticado
  canMatch: [PublicGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
