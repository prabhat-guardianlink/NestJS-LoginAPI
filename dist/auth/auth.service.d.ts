import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UsersService);
    validateUser(username: any, pass: any): Promise<any>;
}
