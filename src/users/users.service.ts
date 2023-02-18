import { Injectable } from '@nestjs/common';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
    async findAll():Promise<string>{
        return "This action returns all users";
    }
    async create(createUsers:CreateUsersDTO):Promise<UsersDTO>{
        return {id:1,name:createUsers.name,email:createUsers.email};
    }
}
