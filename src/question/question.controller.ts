import { Controller, Get } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  @Get()
  findAll() {
    return {
      list: ['a', 'b', 'c'],
      count: 10,
    };
  }
}
