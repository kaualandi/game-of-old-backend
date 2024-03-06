import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
export interface AuthRequest {
    user_id: number;
}
export declare class AuthGuard implements CanActivate {
    private readonly authService;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractUserIdFromHeader;
}
