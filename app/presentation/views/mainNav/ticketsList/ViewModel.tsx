import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import {GetTicketsByUserUseCase} from "../../../../domain/useCases/tickets/GetTicketsByUserUseCase";
import {useState} from "react";
import {TicketDisplayDTO} from "../../../../domain/entities/TicketDisplayDTO";

const TicketListViewModel = () => {
    const{user} = useUserLocalStorage()
    const [tickets, setTickets] = useState<TicketDisplayDTO[]>([]);

    const getTicketsByUser = async(userId:number) =>{
        try{
            const response =  await GetTicketsByUserUseCase(userId)
            if(response.length > 0){
                setTickets(response)
                console.log("Resultado"+ JSON.stringify(response))
            }
        }catch (error){
            console.error("Error getting TicketsByUserUseCase")
        }
    }

    return{
        user,
        getTicketsByUser,
        tickets
    }
}

export default TicketListViewModel