import { CompraDTO, CompraResponseDTO} from "../entities/CompraDTO";

export interface CompraRepository{
    makeCompra(compra: CompraDTO): Promise<CompraResponseDTO>
}