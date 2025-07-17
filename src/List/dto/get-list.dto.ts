import { IsInt, IsNotEmpty } from "class-validator";

export class GetListDto{
    @IsInt()
    @IsNotEmpty()
    boardId:number

    // @IsInt()
   // @IsNotEmpty()
   // id:number


}