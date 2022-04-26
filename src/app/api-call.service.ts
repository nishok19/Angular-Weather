import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  topListData() {
    // let urls = [
    //   'api.openweathermap.org/data/2.5/find?lat=13.08784&lon=80.278473&cnt=1&appid=80982c4ab71a55bd1af158acd55ab620&units=metric',
    //   'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=80982c4ab71a55bd1af158acd55ab620',
    // ];

    let url =
      'https://api.openweathermap.org/data/2.5/find?lat=13.08784&lon=80.278473&cnt=5&appid=80982c4ab71a55bd1af158acd55ab620&units=metric';

    return this.http.get(url);
  }

  carouselData: any;

  carouselListData() {
    let city1 = this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=80982c4ab71a55bd1af158acd55ab620&units=metric'
    );
    let city2 = this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Londen&appid=80982c4ab71a55bd1af158acd55ab620&units=metric'
    );
    let city3 = this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=80982c4ab71a55bd1af158acd55ab620&units=metric'
    );
    let city4 = this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=80982c4ab71a55bd1af158acd55ab620&units=metric'
    );

    return forkJoin([city1, city2, city3, city4]);
  }

  userSearchData(place: any) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=80982c4ab71a55bd1af158acd55ab620&units=metric`;

    return this.http.get(url);
  }
}
