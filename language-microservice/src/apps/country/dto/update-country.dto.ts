import { IsNotEmpty } from "class-validator";
import { Idiom } from "src/apps/idiom/schemas/idiom.schema";

export class UpdateCountryDto {
    
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    idioms: Idiom[];
}