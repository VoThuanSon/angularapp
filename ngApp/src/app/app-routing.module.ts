import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component:EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventComponent,
    // canActivate:[authGuard]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
