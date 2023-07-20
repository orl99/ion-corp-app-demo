import { Injectable } from '@angular/core';

// JWT Decode
import * as jwt_decode from 'jwt-decode';
// http Service
import { AuthService } from '../api/auth.service';

// Models
import { AuthCredentialsI } from './../models/auth-credentials.interface';
import { UserSessionI } from '../../../models/userSession.model';
import AutoUnsub from 'src/app/functions/autoUnSub.func';

// User service
import { UserService } from 'src/app/services/user.service';

interface ReponseI {
    status: boolean;
    message: string;
}

const TOKEN_KEY =  'JWT-TOKEN';

@Injectable()
@AutoUnsub()
export class LoginService {
    constructor(private authService: AuthService,
                private userService: UserService)  {}

    public async signIn(body: AuthCredentialsI ): Promise<ReponseI> {
        const response = await this.authService.postSignIn(body);
        if (!response.status) {
            return {
                status: false,
                message: response.message,
            };
        }
        const decreptedUserData: UserSessionI = jwt_decode(response.token);
        console.log('decredted', decreptedUserData);
        this.saveJWTToken(response.token);

        this.saveUserInfo(decreptedUserData);

        return { status: true, message: response.message };
    }

    // isAuth
    public async isAuth(): Promise<boolean> {
        const JWT_TOKEN = localStorage.getItem(TOKEN_KEY);
        if (JWT_TOKEN) {
            const isJwtAuthed = await this.authService.validateUserJwt(JWT_TOKEN);
            if (isJwtAuthed.statusCode === 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }



    // Private methods

    // JWT save process
    private saveJWTToken(jwtToken: string): void {
        localStorage.setItem(TOKEN_KEY, jwtToken);
    }

    private saveUserInfo(userSessionInfo: UserSessionI): void {
        this.saveUserInfoLocalStorage(userSessionInfo);
    }

    private saveUserInfoLocalStorage(userSessionInfo: UserSessionI): void {
        this.userService.saveUserData(userSessionInfo);
    }
}
