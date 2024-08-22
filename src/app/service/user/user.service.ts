import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/app/models/user.dto';

@Injectable()
export class UserService {
  getAllUser(): any {
    return 'Hello User';
  }

  getUser(id: string) {
    return `get user with id ${id}`;
  }

  registerUser(user: UserDTO): any {
    console.log(user);
    return `registering ${user.fname} to database`;
  }
}
