import { RouteGuardComponent } from './route-guard/route-guard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NestHttpComponent } from './nest-http/nest-http.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  {path:'nest',component:NestHttpComponent},
  // 路由守衛
  {path:'routerguard',component:RouteGuardComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }