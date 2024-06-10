import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop({ required: true })
  title: string;

  @Prop()
  desc: string;

  // 其他的...
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
