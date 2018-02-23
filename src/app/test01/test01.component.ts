import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Data, DataService } from '../appServices';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {
  fieldValues: Observable<Data[]>;
  singleTodo: Observable<Data>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fieldValues = this.dataService.fieldValue;
    this.dataService.loadAll();

  }
}