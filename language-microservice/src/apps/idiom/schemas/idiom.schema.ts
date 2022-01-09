import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema } from "mongoose";


export type IdiomDocument = Idiom & Document;

@Schema()
export class Idiom {
    _id: MongooseSchema.Types.ObjectId;

    @Prop({
        required: true
    })
    name: string;
}

export const IdiomSchema = SchemaFactory.createForClass(Idiom);