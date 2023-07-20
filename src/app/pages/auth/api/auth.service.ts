import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Loader service
import { LoaderService } from './../../../services/loader.service';
// Models
import { AuthCredentialsI, AuthCredentialsResponseI } from '../models/auth-credentials.interface';

const API_ENDPOINT = environment.apiEndPoint;
const API_ENDPOINT_LOCAL = 'http://201.144.125.147:3000';
@Injectable()
export class AuthService {

  private httpHeaders = new HttpHeaders();

  constructor(private http$: HttpClient, private loaderService: LoaderService) {
    this.httpHeaders.set('Content-Type', 'application/json');
  }

  /**
   * postLogin()
   * @param body: AuthCredentialsI
   * This method will make a http resquest to the endpoint in orther to authenticate
   * @return jw-user-response
   */
  public async postSignIn(body: AuthCredentialsI): Promise<AuthCredentialsResponseI> {
    console.log('log', API_ENDPOINT);
    await this.loaderService.present();
    // tslint:disable-next-line: max-line-length
    const response = await this.http$.post<AuthCredentialsResponseI>(`${API_ENDPOINT_LOCAL}/auth/singIn`, body, { headers: this.httpHeaders })
      .toPromise();
    await this.loaderService.dismiss();
    return response;
  }

  public async validateUserJwt(userJwt: string) {
    await this.loaderService.present();
    const customHttpHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + userJwt
    });

    const response = await this.http$
      .get<{statusCode: number; message: string}>(`http://201.144.125.147:3000/auth/validateJwt`,
      { headers: customHttpHeader }).toPromise();
    await this.loaderService.dismiss();
    return response;
  }
}
