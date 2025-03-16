import { PeliculasRepository } from "../../domain/repositories/PeliculasRepository"; // Cambia esto por el nombre adecuado de tu repositorio
import { PeliculaDTO } from "../../domain/entities/PeliculaDTO";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class PeliculaRepositoryImpl implements PeliculasRepository {
    async getAllPeliculaDTO(): Promise<PeliculaDTO[]> {
        try {
            const response = await ApiDelivery.get<PeliculaDTO[]>("/peliculas");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
}
