export interface UserRegisterRequestDTO {
    nombre: string;
    apellidos: string;
    correoElectronico: string;
    contrasenia: string;
    telefono?: string;
    identificacion: string;
    fechaNacimiento?: string;
}
