import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  arrayDta: Subject<any>;
  constructor(private http: HttpClient) {
    this.arrayDta = new BehaviorSubject<any>("");
  }

  getApi(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  fetchData(): Observable<any> {
    return this.arrayDta.asObservable();
  }

  PushData(data) {
    return this.arrayDta.next(data);
  }
}
