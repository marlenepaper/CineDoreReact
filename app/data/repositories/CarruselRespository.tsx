// src/data/repositories/CarruselRepository.tsx
import { CarruselDTO } from "../../domain/entities/CarruselDTO";
import { CarruselRepository } from "../../domain/repositories/CarruselRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";

export class CarruselRepositoryImpl implements CarruselRepository {
    async getCarruselData(): Promise<CarruselDTO[]> {
        try {
            const response = await ApiDelivery.get("/carrusel");
            return Promise.resolve(response.data);
        } catch (error) {
            const e = error as AxiosError;
            console.log("Error al obtener datos del carrusel:", JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }
}
