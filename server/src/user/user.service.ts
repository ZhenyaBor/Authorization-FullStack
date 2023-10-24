import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser({ email, password }: CreateUserDto) {
    const userExists = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (userExists) throw new BadRequestException('This email already exists');

    const user = this.userRepository.create({
      email,
      password: await argon2.hash(password),
    });

    await this.userRepository.save(user);

    const token = this.jwtService.sign({ id: user.id, email, role: user.role });

    return { user, token };
  }

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
