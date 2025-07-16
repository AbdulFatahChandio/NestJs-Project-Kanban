
import { Body, Controller, Post } from "@nestjs/common";
import { ListService } from "./list.service";
import { ListDto } from "./dto";
import { JwtGuard } from "src/Auth/Guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/Auth/decorator";
import { user } from "generated/prisma";

@UseGuards(JwtGuard)
@Controller('lists')
export class ListController {
    constructor(private listService: ListService) {
    }
    @Post('create')
    createList(@Body() dto: ListDto, @GetUser() currentUser: user) {
        return this.listService.createList(dto, currentUser)
    }
}