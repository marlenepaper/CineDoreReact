export interface MovieBoxInterface{
    age: number,
    name: string,
    duration: string,
    version: string,
    date: string,
    time: string,
    room: number
}

export interface MovieDataInterface{
    age: number,
    name: string,
    category: string,
    year: string,
    duration: string,
    version: string,
}

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