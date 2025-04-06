import { PeliculasRepository } from "../../domain/repositories/PeliculasRepository";
import { PeliculaDTO } from "../../domain/entities/PeliculaDTO";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class PeliculaRepositoryImpl implements PeliculasRepository {
    async getAllPeliculasDTO(): Promise<PeliculaDTO[]> {
        try {
            const response = await ApiDelivery.get<PeliculaDTO[]>("/peliculas");
            return Promise.resolve(response.data);
        } catch (error) {
            const e = error as AxiosError;
            console.log("Error al obtener películas: ", JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async getPeliculaById(id: number): Promise<PeliculaDTO | null> {
        try {
            const response = await ApiDelivery.get<PeliculaDTO>(`/peliculas/${id}`);
            return response.data;
        } catch (error) {
            const e = error as AxiosError;
            console.log("Error al obtener película por ID: ", JSON.stringify(e.response?.data));
            return null;
        }
    }
}
