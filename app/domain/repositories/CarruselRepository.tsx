// src/domain/repositories/CarruselRepository.tsx
import { CarruselDTO } from "../entities/CarruselDTO";

export interface CarruselRepository {
    getCarruselData(): Promise<CarruselDTO[]>;  // Método para obtener los datos del carrusel
}
