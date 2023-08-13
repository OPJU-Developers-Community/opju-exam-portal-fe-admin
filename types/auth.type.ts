export interface loginType {
    email: string,
    password: string
}

export interface signupType extends loginType{
    username: string,
}