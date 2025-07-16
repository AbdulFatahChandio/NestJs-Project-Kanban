import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class AuthService {
    constructor(
    private prisma: PrismaService,
    public JWT : JwtService,
    public config : ConfigService
    ){

    }
    async signup(dto: AuthDto) {
        //Generate a hash password
        const hash = await bcrypt.hash(dto.password, 10);
        console.log("🚀 ~ AuthService ~ signup ~ hash:", hash)
        //save the user in db
        try {

            const user = await this.prisma.user.create({
                data:
                {
                    email: dto.email,
                    hash :hash
                },
            });
            console.log("🚀 ~ AuthService ~ signup ~ hash:", user)
            // return user
            // delete (user as Partial<any>).hash /** https://stackoverflow.com/questions/63702057/what-is-the-logic-behind-the-typescript-error-the-operand-of-a-delete-operato/63705211 */
            //return the saved user 
            return this.signToken(user.id, user.email );
        } catch (error: any) {
            if (error?.code === 'P2002') {
                throw new ForbiddenException('Credentials taken');
            }
            throw error;
        }

    }

     async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });  
    console.log("🚀 ~ AuthService ~ signin ~ user:", user)
    // if user does not exist throw exception
    if (!user)
      throw new ForbiddenException(
        'Invalid email or password',
      );

    // compare password
    const matchPassword = await bcrypt.compare(dto.password ,user.hash  )
    //console.log("match password : " , matchPassword,"Dto password : ", user.hash, "User hash : s", dto.password)
    if (!matchPassword)
      throw new ForbiddenException(
        'Invalid email or password',
      );
    //   delete (user as Partial<any>).hash /** https://stackoverflow.com/questions/63702057/what-is-the-logic-behind-the-typescript-error-the-operand-of-a-delete-operato/63705211 */
            //return the saved user 
     return this.signToken(user.id, user.email );
    }
    async signToken(
           userId: number,
           email: string,
         ): Promise<{ access_token: string }> {
           const payload = {
             sub: userId,
             email,
           };
           const secret = this.config.get('JWT_SECRET');
       
           const token = await this.JWT.signAsync(
             payload,
             {
               expiresIn: '340m',
               secret: secret,
             },
           );
       
           return {
             access_token: token,
           };
         }
}




//     signup(dto:AuthDto){
//         // console.log("🚀 ~ AuthService ~ signup ~ dto:", dto)
//         const user = this.prisma.user.create({
//                 data:
//                 {
//                     email: dto.email,
//                     hash : dto.password,
//                     firstName: dto.firstName

//                 }
//             });
//             console.log("🚀 ~ AuthService ~ signup ~ user:", user)
//             return user
//     }

// }
//     // console.log("🚀 ~ AuthService ~ signup ~ AuthDto:", AuthDto)

//     async signin(dto: AuthDto) {
        
//     // find the user by email
//     const user = await this.prisma.user.findUnique({
//         where: {
//           email: dto.email,
//         },
//       });  
//     console.log("🚀 ~ AuthService ~ signin ~ user:", user)
//     // if user does not exist throw exception
//     if (!user)
//       throw new ForbiddenException(
//         'Credentials incorrect',
//       );

//     // compare password
//     const matchPassword = await bcrypt.compare(dto.password ,user.hash )

//     if (!matchPassword)
//       throw new ForbiddenException(
//         'Credentials incorrect',
//       );
//     //   delete (user as Partial<any>).hash /** https://stackoverflow.com/questions/63702057/what-is-the-logic-behind-the-typescript-error-the-operand-of-a-delete-operato/63705211 */
//             //return the saved user 
//       return user
//     }

