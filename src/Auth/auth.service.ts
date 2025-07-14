import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
    constructor(
        private prisma : PrismaService
    ){

    }
    signup(dto:AuthDto){
        console.log("🚀 ~ AuthService ~ signup ~ dto:", dto)
        const user = this.prisma.user.create({
                data:
                {
                    email: dto.email,
                    hash : dto.password

                },
            });
            console.log("🚀 ~ AuthService ~ signup ~ user:", user)
            return user
    }
}
    console.log("🚀 ~ AuthService ~ signup ~ AuthDto:", AuthDto)

