import { GenderEnum } from "../enums/GenderEnum";

export class UserDTO {
    public id?: number;
    public login?: string;
    public password?: string;
    public name?: string;
    public birthday?: Date;
    public gender?: GenderEnum;
    public christian?: boolean;
    public photo?: string;
}