import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css'],
})
export class BottomComponent implements OnInit {
  value: string = 'tokyo';
  data: any;
  constructor(private http: ApiCallService) {
    this.searchPlace();
  }
  ngOnInit(): void {}

  searchPlace() {
    this.http.userSearchData(this.value).subscribe((data) => {
      this.value = '';
      this.data = data;
      console.warn(this.data);
    });
  }
}
