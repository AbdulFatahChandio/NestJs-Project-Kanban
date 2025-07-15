import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class BoardDto{
    @IsString()
    @IsNotEmpty()
    title :string

     @IsInt()
     @IsNotEmpty()
     creatorId:number

}