import { PeliculaDTO } from "../entities/PeliculaDTO";

export interface PeliculasRepository {
    getAllPeliculasDTO(): Promise<PeliculaDTO[]>;
    getPeliculaById(id: number): Promise<PeliculaDTO | null>; // ← AÑADE ESTA LÍNEA AQUÍ
}
