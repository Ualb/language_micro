import { IsNotEmpty } from "class-validator";
import { Idiom } from "src/apps/idiom/schemas/idiom.schema";

export class CreateCountryDto {
 
    @IsNotEmpty()
    name: string;
 
    @IsNotEmpty()
    idioms: Idiom[];    
}
