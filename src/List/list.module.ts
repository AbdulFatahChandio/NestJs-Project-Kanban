import { Module } from "@nestjs/common";
import { ListController } from "./list.controller";
import { ListService } from "./list.service";
@Module({
    providers:[ListService],
    controllers:[ListController]
})

export class ListModule {}