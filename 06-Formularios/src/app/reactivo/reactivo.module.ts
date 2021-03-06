import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivoRoutingModule } from './reactivo-routing.module';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DinamicosComponent,
    BasicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactivoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactivoModule { }
