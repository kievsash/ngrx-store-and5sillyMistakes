import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {refetch, select, unselect} from './items.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{ count: number }>) {
  }

  selectAll() {
    this.store.dispatch(select());
  }
  unselectAll() {
    this.store.dispatch(unselect());
  }
  refetch() {
    this.store.dispatch(refetch());

  }
}
