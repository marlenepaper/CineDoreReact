import { PeliculaRepositoryImpl } from "../../../data/repositories/PeliculasRepository";

const peliculaRepository = new PeliculaRepositoryImpl();

export const GetAllPeliculasUseCase = async () => {
    return await peliculaRepository.getAllPeliculasDTO();
};
