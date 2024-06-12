import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Answer } from './schemas/answer.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private readonly answerModule: Model<Answer>,
  ) {}

  async create(answerInfo) {
    if (answerInfo.questionId == null) {
      throw new HttpException('缺少问卷id', HttpStatus.BAD_REQUEST);
    }

    const answer = new this.answerModule(answerInfo);
    return await answer.save();
  }

  async count(questionId: string) {
    if (questionId == null) return 0;
    return await this.answerModule.countDocuments({ questionId });
  }

  async findAll(questionId: string, opt: { page: number; pageSize: number }) {
    if (!questionId) return [];

    const { page = 1, pageSize = 10 } = opt;
    const list = await this.answerModule
      .find({ questionId })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    return list;
  }
}
