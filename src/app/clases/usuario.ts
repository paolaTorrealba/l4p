export enum Perfil {
    alumno = 'alumno',
    profesor = 'profesor',
    administrador = 'administrador'
}

export interface UsuarioInterface {
    id: string;
    nombre: string;
    email: string;
    password: string;  
    perfil?: Perfil;
    activo?: boolean;
}