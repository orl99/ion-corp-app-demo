export interface UserStateI {
    state: {
        email: string;
        role: string;
        department: string;
        userfullname: string;
        iat?: number;
    }
}
