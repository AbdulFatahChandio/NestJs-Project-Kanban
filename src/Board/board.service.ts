import { Injectable , NotFoundException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardDto } from './dto/board.dto';
import { user } from 'generated/prisma';
import { DeleteBoardDto } from './dto/delete-board.dto';
import { EditBoardDto } from './dto';
import { title } from 'process';

@Injectable()
export class BoardService {

    constructor(
        private prisma: PrismaService
    ) {

    }
   
    createBoard(dto: BoardDto, currentUser: user) {
        const board = this.prisma.board.create({
            data: {
                title: dto.title,
                creatorId: currentUser.id

            }
        });

        return board;
    }
     async getBoard(currentUser: user) {
        const boards = await this.prisma.board.findMany({
            where: {
                creatorId: currentUser.id,
            },
        });
        return boards

    }

    async updateBoard(dto:EditBoardDto , currentUser : user){
        const existingBoard = await this.prisma.board.findFirst({
            where: {
                creatorId: currentUser.id
            },
        });
        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }
        const updatedBoard = this.prisma.board.update({
            data: {
                title: dto.title
            },
            where:{
                  id:dto.id,
            }
        })
        return updatedBoard
    }

    async deleteBoard(dto:DeleteBoardDto, currentUser: user) {
        const existingBoard = await this.prisma.board.findFirst({
            where: {
                id:dto.id,  creatorId: currentUser.id
            },
        });
        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }

         const deletedBoard = this.prisma.board.delete({
            where: {
                id : dto.id
            }
            
            // console.log("🚀 ~ AuthService ~ signup ~ user:", list)
        });

        return deletedBoard
    }
}
