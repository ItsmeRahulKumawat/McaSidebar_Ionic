import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string;
  password: number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logme()
  {
    if(this.name === 'Admin' && this.password === 1234)
    {
      this.router.navigate(['/home']);
    }
    else
    {
      confirm('Invalid Username or password');
      this.router.navigate(['/login']);
    }
  }
}
