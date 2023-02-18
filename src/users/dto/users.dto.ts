import { IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator";

export class UsersDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}