import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetListDto, ListDto } from "./dto";
// import { PrismaClient } from "@prisma/client";
// import { Response } from "express";
// import { Res } from "@nestjs/common";
import { user } from "generated/prisma";
import { EditListDto } from "./dto/edit-list.dto";

@Injectable()
export class ListService {
    // updateList(dto: EditListDto, currentUser: { id: number; createdAt: Date; updatedAt: Date; email: string; hash: string; firstName: string | null; lastName: string | null; }) {
    //     throw new Error("Method not implemented.");
    // }
    constructor(
        private prisma: PrismaService
    ) {

    }
    async createList(dto: ListDto, currentUser: user) {
        const existingBoard = await this.prisma.board.findFirst({
            where: { id: dto.boardId, creatorId: currentUser.id }
        })

        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }

        const list = this.prisma.list.create({
            data: {
                title: dto.title,
                description: dto.description,
                boardId: dto.boardId
            }
            // console.log("🚀 ~ AuthService ~ signup ~ user:", list)
        });

        return list;
    }

    async getLists(dto: GetListDto,  currentUser: user) {
        const existingBoard = await this.prisma.board.findFirst({
            where: {
                creatorId: currentUser.id,
                id: dto.boardId
            
            },
        });
        //console.log("🚀 ~ ListService ~ getLists ~ existingBoard here:", existingBoard)
        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }
        const lists = await this.prisma.list.findMany({
            where: {
            
                boardId: dto.boardId
            }
        })
        return lists
    }

    async updateList(dto : EditListDto , currentUser:user){
        const existingBoard = await this.prisma.board.findFirst({
            where: {
                creatorId: currentUser.id,
            
            },
        });
        console.log("🚀 ~ ListService ~ updateList ~ existingBoard:", existingBoard)
        //console.log("🚀 ~ ListService ~ getLists ~ existingBoard here:", existingBoard)
        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }
        const updatedList = this.prisma.list.update({
            data:{
                title: dto.title,
                description: dto.description
            },
            where:{
                id: dto.id
            }
        })
        return updatedList
    }

    async deleteList(dto: EditListDto,  currentUser: user) {
        const existingBoard = await this.prisma.board.findFirst({
            where: {
                creatorId: currentUser.id,
                id: dto.boardId
            
            },
        });
        //console.log("🚀 ~ ListService ~ getLists ~ existingBoard here:", existingBoard)
        if (!existingBoard) {
            throw new NotFoundException("Board doesn't Exist")
        }
        const lists = await this.prisma.list.delete({
            where: {
            
                id : dto.id
            }
        })
        return lists
    }
}