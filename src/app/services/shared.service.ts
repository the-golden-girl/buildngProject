import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SharedService {

    private data = new BehaviorSubject("test");
    sharedData = this.data.asObservable();

    constructor() {}

    nextMessage(data: any) {
        this.data.next(data);
    }

}