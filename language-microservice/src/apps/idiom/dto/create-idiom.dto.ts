import { IsNotEmpty } from "class-validator";

export class CreateIdiomDto {

    @IsNotEmpty()
    name: string;

}
