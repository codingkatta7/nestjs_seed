import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(public readonly usersService: UsersService) { }
    @Get()
    findAll(): Promise<string> {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() createUsers: CreateUsersDTO): Promise<UsersDTO> {
        return this.usersService.create(createUsers);
    }
}
