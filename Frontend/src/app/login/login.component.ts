import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(@Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.document.body.classList.value = 'login';

  }


  get f() { return this.loginForm.controls; }

  onSubmit(form) {
    //    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }

    //   this.loading = true;
    const user = {
      email: this.f.email.value,
      password: this.f.password.value
    };

    this.authService.login(form.value).subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      if (data['message'] === 'OK') {
        // tslint:disable-next-line:no-string-literal
        localStorage.setItem('accessToken', data['accessToken']);
        window.location.reload();
      } else {
        alert('invalid credentials');
      }
    });


  }

}
