import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile.component';

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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
