import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoneyManagerModule } from './money-manager/money-manager.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MoneyManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
