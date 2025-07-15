import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './User/user.controller';
import { UserModule } from './User/user.module';
import { BoardModule } from './Board/board.module';
import { AuthModule } from './Auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ListModule } from './List/list.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }) ,PrismaModule,ListModule, UserModule,AuthModule, BoardModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
