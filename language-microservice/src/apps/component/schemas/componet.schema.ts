import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type ComponentDocument = Component & Document;

@Schema()
export class Component {
    @Prop({
        required:true
    })
    nameKey: string;

    @Prop(
        {
            required: true,
            default: 1
        }
    )
    step: number;
}

export const ComponentSchema = SchemaFactory.createForClass(Component);

