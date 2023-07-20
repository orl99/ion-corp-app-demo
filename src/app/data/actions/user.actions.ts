// Models
import { UserSessionI } from '../../models/userSession.model';

export class AddUserInfo {
    static readonly type = '[USER] ADD_USER';
    constructor(public payload: UserSessionI) {}
}
export class DeleteUserInfo {
    static readonly type = '[USER] DELETE_USER';
    constructor() {}
}
