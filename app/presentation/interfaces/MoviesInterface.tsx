export interface FuncionDTO {
    id: number;
    fechaHora: string;
    sala: string;
}

export interface PeliculaDTOInterface {
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