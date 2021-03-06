import { IsNotEmpty } from 'class-validator';  

export class CreateComponentDto {
    
    @IsNotEmpty()
    nameKey: string;
    
    step: number;
}