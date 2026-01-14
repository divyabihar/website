import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const adminSecret = request.headers['x-admin-secret'];

    // In production, this should match an env variable
    const validSecret = process.env.ADMIN_SECRET || 'divyabihar-admin-secret';

    if (adminSecret !== validSecret) {
      throw new UnauthorizedException('Invalid Admin Secret');
    }

    return true;
  }
}
