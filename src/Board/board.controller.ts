import { Body, Controller, Delete, Get, Post,Put, Req } from "@nestjs/common";
import { BoardService } from "./board.service";
import { BoardDto } from "./dto/board.dto";
import { JwtGuard } from "../Auth/Guard";
import { UseGuards } from "@nestjs/common";
import { GetUser } from "src/Auth/decorator";
import { user } from "generated/prisma";
import { Request } from "express";
import { DeleteBoardDto } from "./dto/delete-board.dto";
import { EditBoardDto } from "./dto";


@UseGuards(JwtGuard)
@Controller('boards')
export class BoardController {
    constructor(private boardService: BoardService) {

    }

    @Get('/')
    getBoard(@GetUser() currentUser:user){
        return this.boardService.getBoard(currentUser)
    }

    @Post('/create')
    createBoard(@Body() dto: BoardDto, @GetUser() currentUser: user, @Req() req: Request) {
       // console.log("🚀 ~ BoardController ~ createBoard ~ req:", req)
        // console.log("🚀 ~ BoardController ~ createBoard ~ currentUser:", currentUser)
        return this.boardService.createBoard(dto, currentUser)
    }


    @Delete('/')
    deleteBoard(@Body() dto: DeleteBoardDto ,@GetUser()  currentUser:user ){
        return this.boardService.deleteBoard(dto , currentUser)
    }

    @Put()
    updateBoard(@Body() dto:EditBoardDto , @GetUser() currentUser :user ){
        return this.boardService.updateBoard(dto, currentUser)
    }
    



}