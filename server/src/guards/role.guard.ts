import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly role: string) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user && user.role === this.role) {
      return true;
    }

    return false;
  }
}
