import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class BoardDto{
    @IsString()
    @IsNotEmpty()
    title :string

     @IsNumber()
     @IsNotEmpty()
     authorId:Number

}