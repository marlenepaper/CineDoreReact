import { CarruselDTO } from "../entities/CarruselDTO";

export interface CarruselRepository {
    getCarruselData(): Promise<CarruselDTO[]>;
}
