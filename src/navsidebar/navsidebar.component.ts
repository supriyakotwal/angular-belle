import { Component } from '@angular/core';
import {dataService} from '../app/dataservice.service';
import {loginService} from '../app/login/login.service';

@Component({
  selector: 'app-navsidebar',
  templateUrl: './navsidebar.component.html',
  styleUrls: ['./navsidebar.component.css']
})
export class NavSidebarComponent {
    constructor(
      private SVC: dataService,
      public loginService : loginService
    ) {
      
    }
  sender(header:string){
    this.SVC.headerText=header
  }
  logout() {
    this.loginService.isLoggedIn = false;
  }

}
