import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

}
