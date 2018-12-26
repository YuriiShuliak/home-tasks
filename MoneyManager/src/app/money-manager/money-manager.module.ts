import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsComponent } from './inputs/inputs.component';
import { StatsComponent } from './stats/stats.component';
import { WorkPlaceComponent } from './work-place/work-place.component';

@NgModule({
  declarations: [WorkPlaceComponent, InputsComponent, StatsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WorkPlaceComponent,
    InputsComponent,
    StatsComponent
  ]
})
export class MoneyManagerModule { }

