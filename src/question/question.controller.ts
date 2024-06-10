import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('test')
  getTest() {
    throw new HttpException('获取数据失败', HttpStatus.BAD_REQUEST);
  }

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

  @Post()
  create() {
    return this.questionService.create();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
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
