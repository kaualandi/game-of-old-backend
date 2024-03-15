import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';

export interface AuthRequest {
  user_id: number;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    return true;
  }

  private extractUserIdFromHeader(request: Request): string {
    return request.headers.user_id as string;
  }
}
