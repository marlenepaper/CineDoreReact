import {CompraRepositoyImpl} from "../../../data/repositories/CompraRespository";
import {CompraDTO} from "../../entities/CompraDTO";

const {makeCompra} = new CompraRepositoyImpl()

export const MakeCompraUseCase = async(compra:CompraDTO) =>{
    return await makeCompra(compra)
}