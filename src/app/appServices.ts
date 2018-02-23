import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Data {
    string;
    // id: number | string;
    // createdAt: number;
    // value: string;

}

@Injectable()
export class DataService {
    fieldValue: Observable<Data[]>
    private _data: BehaviorSubject<Data[]>;
    private baseUrl: string;
    private dataStore: {
        fieldValue: Data[]
    };

    constructor(private http: HttpClient) {
        this.baseUrl = '../assets/data.json';
        this.dataStore = { fieldValue: [] };
        this._data = <BehaviorSubject<Data[]>>new BehaviorSubject([]);
        this.fieldValue = this._data.asObservable();
    }

    loadAll() {
        this.http.get(`${this.baseUrl}`).subscribe((data: Data[]) => {
            this.dataStore.fieldValue = data;
            this._data.next(Object.assign({}, this.dataStore).fieldValue);
        }, error => console.log('Could not load Data.'));
    }

}