import {Compra, CompraDTO} from "../entities/CompraDTO";

export interface CompraRepository{
    makeCompra(compra: CompraDTO): Promise<Compra>
}