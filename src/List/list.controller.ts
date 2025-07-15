import { Body, Controller, Post } from "@nestjs/common";
import { ListService } from "./list.service";
import { ListDto } from "./dto";

@Controller('lists')
export class ListController{
    constructor( private listService : ListService){

    }
    @Post('create')
    createList(@Body() dto:ListDto){
        return this.listService.createList(dto)
    }
}