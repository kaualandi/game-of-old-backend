import { UsersService } from '../users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDto } from './dto/change-password';
import { SignUpDto } from './dto/sign-up.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(createAuthDto: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(createUserDto: SignUpDto): Promise<{
        access_token: string;
    }>;
    getMe(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        is_admin: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<void>;
}
