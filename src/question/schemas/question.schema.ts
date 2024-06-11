import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  title: string;

  @Prop()
  desc: string;

  @Prop({ required: true })
  author: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
