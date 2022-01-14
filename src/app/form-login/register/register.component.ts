import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  status = 'Please fill in the form register!';
  form: any = {};
  hide: boolean;
  hide1: boolean;
  signUpFrom: SignUpForm;
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_phone'
  };
  success: any = {
    message: 'yes'
  };
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpFrom = new SignUpForm(
      this.form.username,
      this.form.password,
      this.form.re_password,
      this.form.phoneNumber
    );
    this.authService.signUp(this.signUpFrom).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        this.status = 'The username is existed! Please try again!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error2)){
        this.status = 'The PhoneNumber is existed! Please try again!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = 'Create account success !';
        this.authService.setData(true);
        this.router.navigate(['login']);
      }
    });
  }
}


