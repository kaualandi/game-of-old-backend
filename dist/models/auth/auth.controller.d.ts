import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { ChangePasswordDto } from './dto/change-password';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(createAuthDto: SignInDto): Promise<any>;
    getMe(request: {
        user_id: string;
    }): Promise<{
        name: string;
        created_at: Date;
        updated_at: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }>;
    changePassword(request: {
        user_id: string;
    }, changePasswordDto: ChangePasswordDto): Promise<void>;
}
