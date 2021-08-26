import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import {dataService} from '../app/dataservice.service';
import {loginService} from '../app/login/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() headerText: string | undefined;
    constructor(
        private location: Location,
        public SVC: dataService,
        public loginService : loginService
      ) {}
    goBack(): void {
        this.location.back();
    }
}