import { TicketEntradaDTO } from './TicketEntradaDTO';
import {FuncionDTO} from "./FuncionDTO";
import {UserDTO} from "./UsuarioDTO";

export interface CompraDTO {
    compraId?: number;
    usuarioId: number;
    funcionId: number;
    totalPago: number;
    tickets: TicketEntradaDTO[];
}

export interface CompraResponseDTO {
    id?: number;
    funcion: FuncionDTO;
    fechaCompra: string;
    totalPago: number;
    ticket: {
        id?: number,
        codigoQr: string,
        detalles: TicketEntradaDTO[]
    }
}
