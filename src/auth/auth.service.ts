import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async singIn(username: string, password: string) {
    const user = await this.userService.findOne(username, password);

    if (!user) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: p, ...userInfo } = user.toObject();

    return {
      token: this.jwtService.sign(userInfo),
    };
  }
}
