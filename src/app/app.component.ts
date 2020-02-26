import { Component } from '@angular/core';
import { increment } from './counter.actions';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{ count: number }>) {
  }

  increment() {
    this.store.dispatch(increment());
  }
}
