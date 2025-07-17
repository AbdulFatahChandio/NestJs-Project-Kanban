import { IsOptional, IsString ,IsInt, IsNotEmpty } from "class-validator";

export class EditBoardDto {
    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsOptional()
    title: string

}