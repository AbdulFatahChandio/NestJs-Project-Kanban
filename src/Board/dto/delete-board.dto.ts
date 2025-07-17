import {IsInt, IsNotEmpty } from "class-validator";

export class DeleteBoardDto{
    @IsInt()
    @IsNotEmpty()
    id : number
}