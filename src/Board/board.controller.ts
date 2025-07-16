import { Body, Controller, Post, Req } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardDto } from "./dto/board.dto";
import { JwtGuard } from "../Auth/Guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/Auth/decorator";
import { user } from "generated/prisma";
import { Request } from "express";


@UseGuards(JwtGuard)
@Controller('boards')
export class BoardController {
    constructor(private boardService: BoardService) {

    }

    @Post('/create')
    createBoard(@Body() dto: BoardDto, @GetUser() currentUser: user, @Req() req: Request) {
        console.log("🚀 ~ BoardController ~ createBoard ~ req:", req)
        // console.log("🚀 ~ BoardController ~ createBoard ~ currentUser:", currentUser)
        return this.boardService.createBoard(dto, currentUser)
    }



}