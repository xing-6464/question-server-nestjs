import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() body) {
    return await this.answerService.create(body);
  }
}
