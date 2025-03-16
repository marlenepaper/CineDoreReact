import { FuncionDTO } from './FuncionDTO';

export interface PeliculaDTO {
    id: number;
    nombre: string;
    anio: number;
    duracion: number;
    sinopsis: string;
    imagenPoster: string;
    categoria: string;
    clasificacion: string;
    formato: string;
    lenguaje: string;
    color: string;
    funciones: FuncionDTO[];
}
