import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  public stravaAuthRedirect(
    clientId: string,
    redirectUri: string,
    responseType: string,
    scope: string,
    approvalPrompt: string = 'auto') {
    // tslint:disable-next-line: max-line-length
    const fullRedirectUri = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&approval_prompt=${approvalPrompt}`;
    window.location.href = fullRedirectUri;
  }
}
