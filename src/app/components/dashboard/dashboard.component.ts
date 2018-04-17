import {Component, OnInit} from '@angular/core';
import {UserServicesService} from '../../services/user-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messages: Message[];
  moduleMessages: Message[];
  reCorrectionMessages: Message[];

  constructor(private userService: UserServicesService) {
    this.moduleMessages = [];
    this.reCorrectionMessages = [];
  }

  ngOnInit() {
    this.userService.getMessages().subscribe(next => {
      console.log(next);
      if (next.success) {
        this.messages = next.msg;
        this.addToMessageArrays(this.messages);
      }
    });
  }

  addToMessageArrays(messages: Message[]) {
    messages.forEach(message => {
      if (message.type === 'module message') {
        this.moduleMessages.push(message);
      } else if (message.type === 're-correction request') {
        this.reCorrectionMessages.push(message);
      }
    });
  }

}

interface Message {
  author: string;
  content: string;
  type: string;
}
