import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorator/role.decorator";
import { User } from "../user/schema/user.schema";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true; // No roles specified, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user: User = request.user; // Assuming the user object is available in the request and has a roles property

    if (!user?.role) {
      return false; // No user roles, deny access
    }

    return requiredRoles.some((role) => user.role.includes(role));
  }
}
