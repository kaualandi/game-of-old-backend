import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(createAuthDto: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(createUserDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    getMe(request: {
        user_id: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    changePassword(request: {
        user_id: string;
    }, changePasswordDto: ChangePasswordDto): Promise<void>;
}
