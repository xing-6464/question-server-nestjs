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
}
