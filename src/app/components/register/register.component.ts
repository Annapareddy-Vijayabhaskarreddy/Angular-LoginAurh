
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route :Router,private service:LoginService,private r:ActivatedRoute) { }
  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {
  }
  RegisterUser() {
    this.service.register(this.registerForm.value).subscribe(data => {
      console.log(data);
    });
    this.route.navigate(['/'
        ]);
}
}