import { State, Selector, Action, StateContext,  } from '@ngxs/store';
// Actions
import { AddUserInfo } from './../actions/user.actions';
import { DeleteUserInfo } from './../actions/user.actions';
// Models
import { UserStateI } from './../models/user-state.model';


@State<UserStateI>({
    name: 'userState',
    // defaults: {
    //     state: {
    //         department: null,
    //         userfullname: null,
    //         email: null,
    //         role: null,
    //         iat: null
    //     }
    // }
})
export class UserState {
    @Selector()
    static getAllUserState(state: UserStateI) {
        return state.state;
    }

    @Action(AddUserInfo)
    addUserInfo({ setState }: StateContext<UserStateI>, { payload }: AddUserInfo) {
        setState({
            state: payload
        });
    }

    @Action(DeleteUserInfo)
    deleteUserInfo({ setState }: StateContext<UserStateI>) {
        setState({
            state: null
        });
    }
}
