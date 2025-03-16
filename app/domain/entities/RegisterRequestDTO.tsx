export interface RegisterRequestDTO {
    id?: number,
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    contrasenia: string;
    telefono?: string;
    identificacion: string;
    fechaNacimiento?: string;  // Formato de fecha como string
}
