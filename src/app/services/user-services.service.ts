import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Data} from '@angular/router';

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
    return this.http.get(this.baseUrl + '/results', {params: params}) as Observable<DataMessage>;
  }

  getMessages() {
    const params = {
      userId: this.authService.getUserId()
    };
    return this.http.get(this.baseUrl + '/messages', {params: params}) as Observable<DataMessage>;
  }

  registerToModule(moduleCode: string) {
    const params = {
      userId: this.authService.getUserId(),
      moduleId: moduleCode
    };
    return this.http.post('http://localhost:3000/modules/registerToModule', params) as Observable<SimpleMessage>;
  }

}

interface DataMessage {
  success: boolean;
  msg: any[];
}

interface SimpleMessage {
  success: boolean;
  msg: string;
}
