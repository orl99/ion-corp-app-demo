import { UserSessionI } from 'src/app/models/userSession.model';
import { Injectable } from '@angular/core';

// envs
import { environment } from 'src/environments/environment';

const USER_KEYS = environment.userLocalStorageKeys;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /**
   * This method will save all the data user session following the UserSesssionI interface properties
   * @param userSessionInfo: UserSessionI
   */
  public saveUserData(userSessionInfo: UserSessionI): void {
    const { department, email, role, userfullname } = userSessionInfo;
    localStorage.setItem(USER_KEYS.department, department);
    localStorage.setItem(USER_KEYS.email, email);
    localStorage.setItem(USER_KEYS.role, role);
    localStorage.setItem(USER_KEYS.userfullname, userfullname);
  }

  /**
   * getUserData()
   * This method will return all the data of the user session
   * Get all data
   * @returns UserSessionI
   */
  public getUserData(): UserSessionI {
    const userSessionData: UserSessionI = {
      department: localStorage.getItem(USER_KEYS.department),
      email: localStorage.getItem(USER_KEYS.email),
      role: localStorage.getItem(USER_KEYS.role),
      userfullname: localStorage.getItem(USER_KEYS.userfullname)
    };
    return userSessionData;
  }

  /**
   * deleterUserData
   * This method will delete all the user session data of the localStorage
   */
  public deleterUserData(): void {
    localStorage.removeItem(USER_KEYS.department);
    localStorage.removeItem(USER_KEYS.email);
    localStorage.removeItem(USER_KEYS.role);
    localStorage.removeItem(USER_KEYS.userfullname);
  }
}
