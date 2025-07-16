import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardDto } from './dto/board.dto';
import { user } from 'generated/prisma';

@Injectable()
export class BoardService {
    constructor( 
        private prisma : PrismaService
    ){

    }
    createBoard(dto:BoardDto, currentUser: user){
        const board = this.prisma.board.create({
            data:{
                title : dto.title,
                creatorId : currentUser.id
                 
            }
        });
       
        return board;
    }
}
