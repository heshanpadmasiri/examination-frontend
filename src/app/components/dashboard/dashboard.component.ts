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

  constructor(private userService: UserServicesService) {
    this.moduleMessages = [];
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
      if (message.type === 'selectedModule message') {
        this.moduleMessages.push(message);
      }
    });
  }

}

interface Message {
  author: string;
  content: string;
  type: string;
}
