import {TicketRepositoryImpl} from "../../../data/repositories/TicketRepository";

const {getAllTicketsDisplay} = new TicketRepositoryImpl()

export const GetTicketsByUserUseCase = async (userId: number) => {
    return await getAllTicketsDisplay(userId)
}