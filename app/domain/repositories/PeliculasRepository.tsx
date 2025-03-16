import {PeliculaDTO} from "../entities/PeliculaDTO";

export interface PeliculasRepository {
    getAllPeliculasDTO(): Promise<PeliculaDTO[]>
}
