import { Response } from 'express';
export declare class AppController {
    index(req: any): {
        message: string;
    };
    login(res: Response): void;
    getHome(req: any): {
        user: any;
    };
    getProfile(req: any): {
        user: any;
    };
    logout(req: any, res: Response): void;
}
