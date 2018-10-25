import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { PlayerModule } from './player/player.module';
import { DemoMaterialModule } from './/material-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path: 'player', component: PlayerComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile', pathMatch: 'full' }
      /*{
        path: 'products/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
      {
        path: 'products/:id/edit',
        canDeactivate: [ ProductEditGuard ],
        component: ProductEditComponent
      },*/
    ]),
    PlayerModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
