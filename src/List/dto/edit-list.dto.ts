import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditListDto {
    @IsInt()
    @IsNotEmpty()
    boardId: number

    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsOptional()
    title: string

    @IsString()
    @IsOptional()
    description: string

    
}