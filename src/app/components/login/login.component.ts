import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,private r:ActivatedRoute,private route :Router ) {}
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {
  }
  LoginUser() {
    this.service.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('token', data.access_token);
      console.log(data)
      this.route.navigate(['/products'
    ]);
    });
  
  }
}
