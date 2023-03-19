import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ListUserComponent } from './components/admin/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AuthenticationService } from './services/authentication/authentication.service';

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

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
