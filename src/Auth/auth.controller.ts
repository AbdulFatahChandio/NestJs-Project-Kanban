import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authservice : AuthService){
        // this.authservice.test()
    }

    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authservice.signup(dto)
    }
}
