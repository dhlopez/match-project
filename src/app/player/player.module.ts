import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '..//material-module.module';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule { }
