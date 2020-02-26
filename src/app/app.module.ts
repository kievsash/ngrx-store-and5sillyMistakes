import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerComponent} from './consumer/consumer.component';
import {counterReducer} from './counter.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
