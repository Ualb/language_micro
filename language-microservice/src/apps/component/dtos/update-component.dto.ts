import { IsNotEmpty } from 'class-validator';  

export class UpdateComponentDto {
    
    @IsNotEmpty()
    nameKey: string;
    
    step: number;
}