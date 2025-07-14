import { Module } from '@nestjs/common';
import { BoardService } from './board.service';

@Module({
  providers: [BoardService]
})
export class BoardModule {}
