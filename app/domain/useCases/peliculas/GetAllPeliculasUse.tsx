import {PeliculaRepositoryImpl} from "../../../data/repositories/PeliculasRepository";

const {getAllPeliculaDTO} = new PeliculaRepositoryImpl()

export const GetAllProductsUseCase = async () =>{
    return await getAllPeliculaDTO()
}