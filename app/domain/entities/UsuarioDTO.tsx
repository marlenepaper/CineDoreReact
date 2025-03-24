export interface UserDTO {
    id: number;
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    telefono?: string;
    identificacion: string;
    fechaNacimiento: string;
    contrasenia: string;
}
