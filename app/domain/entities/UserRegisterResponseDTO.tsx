export interface RegisterResponse {
    id: number;
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    telefono?: string;
    identificacion: string;
    fechaNacimiento: string;
    token: string;
}