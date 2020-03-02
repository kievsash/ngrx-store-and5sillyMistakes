import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerComponent} from './consumer/consumer.component';
import {itemsReducer} from './items.reducer';
import {StoreModule} from '@ngrx/store';
import {featureKey} from './items.selectors';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppEffects} from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, {items: itemsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserModule,
    EffectsModule.forRoot([AppEffects])
  ],
  exports: [EffectsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
