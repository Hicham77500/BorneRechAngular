import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ListUserComponent } from './components/admin/list-user/list-user.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { HeaderComponent } from './components/header/header.component';
import { BorneComponent } from './components/borne/borne.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';

const authGuardFn: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  return authService.isLoggedInAsAdmin();
}
const authGuardAdminFn: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  
    return authService.isLoggedInAsAdmin();
  
 
}
const routes: Routes = [
  {
    path: 'profil',
    component: ProfilComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'contact',
    component: ContactComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'apropos',
    component: AProposComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'borne',
    component: BorneComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'index',
    component: IndexComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'map',
    component: MapComponent,
    // canActivate:[AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'admin',
    component: AdminComponent,
    canActivate:[authGuardAdminFn]
  }, {
    path: 'admin/add',
    component: AddUserComponent,
    // canActivate:[AuthGuard]

  }, {
    path: 'admin/edit/:id',
    component: EditUserComponent,
    // canActivate:[AuthGuard]

  }, {
    path: 'admin/:id',
    component: ListUserComponent,
    // canActivate:[AuthGuard]

  },{
    path: 'header',
    component: HeaderComponent,
    // canActivate:[AuthGuard]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
