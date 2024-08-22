import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from 'src/app/models/user.dto';
import { UserService } from 'src/app/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser(): Promise<UserDTO> {
    return this.userService.getAllUser();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post('/register')
  async register(@Body() userModel: UserDTO) {
    return this.userService.registerUser(userModel);
  }
}
