import {CompraDTO} from "../../../../domain/entities/CompraDTO";
import {MakeCompraUseCase} from "../../../../domain/useCases/compra/MakeCompraUseCase";

const TicketSelectionViewModel = () => {
    const makeCompra = async (compra: CompraDTO) => {
        const response = await MakeCompraUseCase(compra)
        if (response){
            console.log("Compra hecha correctamente" + JSON.stringify(response))
        }
        return response
    }

    return {
        makeCompra
    }
}

export default TicketSelectionViewModel;