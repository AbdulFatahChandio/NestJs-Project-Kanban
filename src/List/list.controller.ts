
import { Body, Controller, Post ,Get, Put ,Delete } from "@nestjs/common";
import { ListService } from "./list.service";
import { GetListDto, ListDto } from "./dto";
import { JwtGuard } from "src/Auth/Guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/Auth/decorator";
import { user } from "generated/prisma";
//import { PrismaService } from "src/prisma/prisma.service";
import { EditListDto } from "./dto/edit-list.dto";

@UseGuards(JwtGuard)
@Controller('lists')
export class ListController {
    constructor(
        private listService: ListService
        
    )  { }
    @Post('create')
    createList(@Body() dto: ListDto, @GetUser() currentUser: user) {
        return this.listService.createList(dto, currentUser)
    }

    @Get()
    getLists(@Body() dto: GetListDto, @GetUser() currentUser : user){
        return this.listService.getLists(dto, currentUser)
    }

    @Put('update')
    updateList(@Body() dto: EditListDto , @GetUser() currentUser : user){
        return this.listService.updateList(dto, currentUser)
    }

    @Delete()
    deleteList(@Body() dto: EditListDto, @GetUser() currentUser : user)
    {
        return this.listService.deleteList(dto, currentUser)
    }
}