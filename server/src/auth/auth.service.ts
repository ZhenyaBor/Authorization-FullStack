import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordIsMatch = await argon2.verify(user.password, password);

    if (!passwordIsMatch) {
      throw new UnauthorizedException('Password is incorrect');
    }

    return user;
  }

  async login({ id, email, role }: User) {
    return { id, email, role ,token: this.jwtService.sign({ id, email, role }) };
  }
}
