import {Compra, CompraDTO} from "../../domain/entities/CompraDTO";
import {CompraRepository} from "../../domain/repositories/CompraRepository";
import {ApiDelivery} from "../sources/remote/api/ApiDelivery";
import {AxiosError} from "axios";

export class CompraRepositoyImpl implements CompraRepository{
    async makeCompra(compra: CompraDTO): Promise<Compra>{
        try{
            const response = await ApiDelivery.post("/compras/crear", compra)
            return Promise.resolve(response.data)
        }catch (error){
            let e = error as AxiosError;
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as Compra)
        }
    }
}