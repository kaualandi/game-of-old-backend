import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/modules/auth/auth.service';

export interface AuthRequest {
  user_id: number;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = this.extractUserIdFromHeader(request);
    if (!userId) {
      throw new UnauthorizedException('Forneça o id do usuário');
    }

    try {
      const user = await firstValueFrom(this.authService.findOne(+userId));

      if (!user) {
        throw new UnauthorizedException('Usuário inválido.');
      }

      request['userId'] = user.id;
    } catch {
      throw new UnauthorizedException('Usuário inválido.');
    }
    return true;
  }

  private extractUserIdFromHeader(request: Request): string {
    return request.headers.user_id as string;
  }
}
