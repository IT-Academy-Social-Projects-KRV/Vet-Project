import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@shared/services/login.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
  constructor(private login: LoginService, private route: Router) {}
  
    logOut() {
    this.login.logout();
    this.route.navigate([''])
  
}
}
