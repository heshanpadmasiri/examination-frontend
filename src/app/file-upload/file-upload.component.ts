import { Component, OnInit } from '@angular/core';
import {UserServicesService} from '../services/user-services.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  adminModules: any[];
  module: string;
  block = false;
  btnText: string;

  constructor(
    private userService: UserServicesService,
    private flashMessageService: FlashMessagesService
  ) {
    this.btnText = 'Upload';
  }

  ngOnInit() {
    this.userService.getAdminModules().subscribe(res => {
      if (res.success) {
        this.adminModules = res.msg;
        this.module = this.adminModules[0];
      } else {
        this.flashMessageService.show('Internal Error', {
          cssClass: 'alert-danger',
          timeOut: 5000
        });
      }
    });
  }

  onSubmit() {

  }

  blockUpload() {
    this.block = true;
    this.btnText = 'Wait';
  }

  upBlockUpload() {
    this.block = false;
    this.btnText = 'Upload';
  }

  onChange(module: string) {
    this.module = module;
    console.log(module);
  }

  upload(event: any) {

  }

}
