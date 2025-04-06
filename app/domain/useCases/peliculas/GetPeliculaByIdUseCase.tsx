import { PeliculaRepositoryImpl } from "../../../data/repositories/PeliculasRepository";

const peliculaRepository = new PeliculaRepositoryImpl();

export const GetPeliculaByIdUseCase = async (id: number) => {
    return await peliculaRepository.getPeliculaById(id);
};
