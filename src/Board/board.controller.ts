import { Body, Controller, Post } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardDto } from "./dto/board.dto";
import { JwtGuard } from "../Auth/Guard";
import { UseGuards } from "@nestjs/common";


@UseGuards(JwtGuard)
@Controller('boards')
export class BoardController {
    constructor( private boardService : BoardService){

    }

    @Post('/create')
    createBoard(@Body() dto:BoardDto){
        return this.boardService.createBoard(dto)
    }



}