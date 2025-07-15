import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
    constructor( 
        private prisma : PrismaService
    ){

    }
    createBoard(dto:BoardDto){
        const board = this.prisma.board.create({
            data:{
                title : dto.title,
                creatorId : dto.creatorId
                 
            }
        });
       
        return board;
    }
}
