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

export interface Compra{
    id?: number;
    usuario: UserDTO;
    funcion: FuncionDTO;
    fechaCompra: string;
    totalPago: number;
    tickets: TicketEntradaDTO[];
}
