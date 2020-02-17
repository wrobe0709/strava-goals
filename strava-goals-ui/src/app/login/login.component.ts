import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { STRAVA_CLIENT_ID, STRAVA_REDIRECT_URI, STRAVA_RESPONSE_TYPE, STRAVA_SCOPE } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public stravaAuth(): void {
    this.loginService.stravaAuthRedirect(
      STRAVA_CLIENT_ID,
      STRAVA_REDIRECT_URI,
      STRAVA_RESPONSE_TYPE,
      STRAVA_SCOPE
    );
  }

}
