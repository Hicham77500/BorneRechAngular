import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register/register.component';
import { NotificationModule } from './services/notification/notification.module';
import { AdminComponent } from './components/admin/admin.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ListUserComponent } from './components/admin/list-user/list-user.component';
import { NotificationService } from './services/notification/notification.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { IndexComponent } from './components/index/index.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { BorneComponent } from './components/borne/borne.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfilComponent } from './components/profil/profil.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    IndexComponent,
    MapComponent,
    HeaderComponent,
    BorneComponent,
    AProposComponent,
    FooterComponent,
    ContactComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotificationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
