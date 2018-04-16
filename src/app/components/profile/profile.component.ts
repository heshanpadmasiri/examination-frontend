import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.ping();
  }

  ping() {
    this.http.get('http://localhost:3000/users/profile')
      .subscribe(
        data => {
          const temp = <ProfileResponse>data;
          this.user = temp.user;
        },
        err => console.log(err)
      );
  }
}

interface ProfileResponse {
  user: object;
  _proto: Object;
}
