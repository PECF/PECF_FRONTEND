export interface User {
    name: string;
    email: string;
    password: string;
    avatar: string
    role: string;
    createdAt: Date;
    resetPasswordToken: string;
    resetPasswordExpire: Date;
    oldPasswords: string;
}
