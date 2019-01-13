import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsComponent } from './inputs/inputs.component';
import { MoneyManagerService } from './services/money-manager.service';
import { StatsComponent } from './stats/stats.component';
import { WorkPlaceComponent } from './work-place/work-place.component';

@NgModule({
  declarations: [WorkPlaceComponent, InputsComponent, StatsComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatListModule,
    FormsModule
  ],
  providers: [MoneyManagerService],
  exports: [
    WorkPlaceComponent,
    InputsComponent,
    StatsComponent
  ]
})
export class MoneyManagerModule { }

