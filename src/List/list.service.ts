import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ListDto } from "./dto";
import { PrismaClient } from "@prisma/client";
import { Response } from "express";
import { Res } from "@nestjs/common";
import { user } from "generated/prisma";

@Injectable()
export class ListService {
    constructor(
        private prisma: PrismaService
    ) {

    }
    async createList(dto: ListDto, currentUser: user) {
        const existingBoard = await this.prisma.board.findFirst({ where: { id: dto.boardId, creatorId: currentUser.id } })

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
}