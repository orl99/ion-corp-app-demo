export interface AuthCredentialsI {
    email: string;
    password: string;
}
export interface AuthCredentialsResponseI {
    status: boolean;
    httpStatus: number;
    message: string;
    token: string;
}
