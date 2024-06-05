import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';

@Controller('question')
export class QuestionController {
  @Get()
  findAll(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    console.log(keyword, page, pageSize);
    return {
      list: ['a', 'b', 'c'],
      count: 10,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return 'question test';
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() question: QuestionDto) {
    console.log(question);
    return {
      id,
      title: 'aaa',
      desc: 'ccc',
    };
  }
}
