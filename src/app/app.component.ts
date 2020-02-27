import {Component} from '@angular/core';
import {increment} from './counter.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value = 0; // try null, undefined, 0, 1,  etc and observe it in ReduxDevTools

  constructor(private store: Store<{ count: number }>) {
  }

  increment() {
    this.store.dispatch(increment({value: this.value}));
  }
}
