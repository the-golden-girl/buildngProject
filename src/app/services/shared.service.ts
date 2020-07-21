import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {

    private data = new BehaviorSubject("test");
    sharedData = this.data.asObservable();

    constructor(private http: HttpClient) {}

    nextMessage(data: any) {
        this.data.next(data);
    }

    addData(data) {
        return this.http.post('/api/addData', data);
    }

    getData() {
        return this.http.get('/api/getData');
    }

    uploadImage(file) {
        let input = new FormData();
        input.append("file" , file);
        return this.http.post('/api/uploadImage' , input);
    }

}