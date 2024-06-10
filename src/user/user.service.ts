import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModule: Model<User>,
  ) {}

  async create(userData: CreateUserDto): Promise<User> {
    const createdUser = new this.userModule(userData);
    return await createdUser.save();
  }

  async findOne(username: string, password: string) {
    return await this.userModule.findOne({ username, password });
  }
}
