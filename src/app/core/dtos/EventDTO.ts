import { EventEnum } from "../enums/EventEnum";

export class EventDTO {
    public id?: number;
    public userId?: number;
    public name?: string;
    public description?: string;
    public eventDate?: Date;
    public address?: string;
    public status?: EventEnum;
}