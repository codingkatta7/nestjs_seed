import { IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator";

export class CreateUsersDTO{

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsEmail({},
        {
          message: 'Invalid email',
        },)
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;

}