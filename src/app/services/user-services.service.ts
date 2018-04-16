import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserServicesService {

  baseUrl = 'http://localhost:3000/users';

  constructor(public authService: AuthService,
              public http: HttpClient) {
  }

  getOverallResults() {
    const params = {
      userId: this.authService.getUserId()
    };
    return this.http.get(this.baseUrl + '/results', {params: params}) as Observable<ResultMessage>;
  }

}

interface ResultMessage {
  success: boolean;
  msg: any[];
}
