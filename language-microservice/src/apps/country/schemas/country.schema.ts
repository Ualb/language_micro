import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as SchemaMongoose } from "mongoose";
import { Idiom } from "src/apps/idiom/schemas/idiom.schema";



export type CountryDocument = Country & Document;

@Schema()
export class Country {

    _id: SchemaMongoose.Types.ObjectId;

    @Prop({
        required: true
    })
    name:string;

    @Prop({
        required: true
    })
    idioms: Idiom[];

}

export const CountrySchema = SchemaFactory.createForClass(Country);

