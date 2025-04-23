import { CarruselDTO } from "../../entities/CarruselDTO";
import { CarruselRepositoryImpl } from "../../../data/repositories/CarruselRespository";

export const GetCarruselUseCase = async (): Promise<CarruselDTO[]> => {
    const carruselRepository = new CarruselRepositoryImpl();
    const carruselData = await carruselRepository.getCarruselData();
    return carruselData;
};
