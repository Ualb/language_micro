import { IsNotEmpty } from "class-validator";

export class UpdateIdiomDto {

    @IsNotEmpty()
    name: string;

}