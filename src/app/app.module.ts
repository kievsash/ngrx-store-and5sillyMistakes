import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerComponent} from './consumer/consumer.component';
import {counterReducer} from './counter.reducer';
import {StoreModule} from '@ngrx/store';
import {featureKey} from './counter.selectors';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, {count: counterReducer}),
    BrowserModule,
    //StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  exports: [EffectsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
