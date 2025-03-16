import { TicketEntradaDTO } from './TicketEntradaDTO';

export interface CompraDTO {
    compraId: number;
    usuarioId: number;
    funcionId: number;
    totalPago: number;
    tickets: TicketEntradaDTO[];
}
