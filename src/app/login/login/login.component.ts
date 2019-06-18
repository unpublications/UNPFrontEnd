import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginModel } from 'src/app/Models/Login.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logn = new LoginModel();
  constructor(private Userservice: UserService, private route: Router) {}

  ngOnInit() {}
  onLoggedin() {
    const user = {
      username: this.logn.Email,
      password: this.logn.Password,
    };
    this.Userservice.UserLogin(user).subscribe(ok => {
      console.log(ok);
      if (ok === null) {
        alert('Please Enter Valid Login Details');
      } else {
      localStorage.setItem('isLoggedin', ok);
      this.route.navigate(['/dashboard']);
      }
    });
  }
}
