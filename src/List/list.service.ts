import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ListDto } from "./dto";

@Injectable()
export class ListService{
    constructor(
        private prisma : PrismaService
    ){

    }
    createList(dto:ListDto){
        const list = this.prisma.list.create({
            data:{
                title:dto.title,
                description: dto.description,
                boardId : dto.boardId
            }
            // console.log("🚀 ~ AuthService ~ signup ~ user:", list)
        });
        return list;
    }
}