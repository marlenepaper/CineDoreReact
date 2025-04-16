import {TicketRepository} from "../../domain/repositories/TicketRepositoy";
import {TicketDisplayDTO} from "../../domain/entities/TicketDisplayDTO";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class TicketRepositoryImpl implements TicketRepository {
    async getAllTicketsDisplay(userId: number): Promise<TicketDisplayDTO[]> {
        try{
            const response = await ApiDelivery.get(`/tickets/usuario/${userId}`)
            return Promise.resolve(response.data)
        }catch (error){
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as TicketDisplayDTO[])
        }
    }
}