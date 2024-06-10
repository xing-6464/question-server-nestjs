import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  Post,
  Delete,
} from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create() {
    return this.questionService.create();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.questionService.delete(id);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() question: QuestionDto) {
    return this.questionService.update(id, question);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Get()
  async findAll(
    @Query('keyword') keyword: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    const list = await this.questionService.findAllList({
      keyword,
      page,
      pageSize,
    });

    const count = await this.questionService.countAll({ keyword });

    return {
      list,
      count,
    };
  }
}
