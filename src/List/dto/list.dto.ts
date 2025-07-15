import { IsNotEmpty, IsString , IsInt} from "class-validator";

export class ListDto{
    @IsString()
    @IsNotEmpty()
    title : string

    @IsString()
    @IsNotEmpty()
    description : string

    @IsInt()
    @IsNotEmpty()
    boardId:number


}