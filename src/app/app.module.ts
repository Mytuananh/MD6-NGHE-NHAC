import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import { LoginComponent } from './form-login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminAccountComponent } from './form-login/admin-account/admin-account.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import { ChangeAvatarComponent } from './manager-profile/change-avatar/change-avatar.component';
import {httpInterceptorProvider} from './security/auth.interceptor';
import { ListUserComponent } from './admin-manager/list-user/list-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListSongComponent } from './song-manager/list-song/list-song.component';
import {MatTableModule} from '@angular/material/table';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-account', component: AdminAccountComponent},
  {path: 'upload-avatar', component: UploadAvatarComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, AdminAccountComponent, UploadAvatarComponent, ChangeAvatarComponent, ListUserComponent, ListSongComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {

}
