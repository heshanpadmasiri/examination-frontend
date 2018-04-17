import {Component, OnInit} from '@angular/core';
import {UserServicesService} from '../../services/user-services.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-re-correction',
  templateUrl: './re-correction.component.html',
  styleUrls: ['./re-correction.component.css']
})
export class ReCorrectionComponent implements OnInit {

  registeredModules: any[];
  selectedModule: string;

  constructor(private userService: UserServicesService,
              private flashMessageService: FlashMessagesService) {
    this.registeredModules = [];
  }

  ngOnInit() {
    this.userService.getRegisteredModules().subscribe(message => {
      if (message.success) {
        this.registeredModules = message.msg;
        this.selectedModule = this.registeredModules[0];
        console.log(this.registeredModules);
      }
    });
  }

  onSubmit() {
    this.userService.requestReCorrection(this.selectedModule).subscribe(message => {
      if (message.success) {
        this.flashMessageService.show('Re-correction request placed successfully', {
          cssClass: 'alert-success',
          timeOut: 5000
        });
      } else {
        this.flashMessageService.show(message.msg, {
          cssClass: 'alert-danger',
          timeOut: 5000
        });
      }
    });
  }

  onChange(value) {
    this.selectedModule = value;
  }

}
