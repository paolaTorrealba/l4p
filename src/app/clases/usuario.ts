export enum Perfil {
    alumno = 'alumno',
    profesor = 'profesor',
    administrador = 'administrador'
}

export interface UsuarioInterface {
    id: string;
    nombre: string;
    email: string;
    imagenUrl:string;
    password: string;  
    perfil?: Perfil;
    activo?: boolean;
}

// export enum Perfil {
//     Alumno = 'Alumno',
//     Profesor = 'Profesor',
//     Administrador = 'Administrador'
// }

// export interface UsuarioInterface {
//     Uid:string;
//     Nombre:string;
//     Email:string;
//     Password:string;
//     ImagenUrl?:string;
//     Perfil?:Perfil;
//     // Activo?:boolean;
// }