import {TicketDisplayDTO} from "../entities/TicketDisplayDTO";

export interface TicketRepository{
    getAllTicketsDisplay(userId: number):Promise<TicketDisplayDTO[]>
}