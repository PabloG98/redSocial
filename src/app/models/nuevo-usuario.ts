export class NuevoUsuario {
    nombre: string;
    apellido: string;
    nombreUsuario: string;
    correo: string;
    roles: string[];
    contrasena: string;

    constructor(nombre: string, apellido: string, nombreUsuario: string, correo: string, contrasena: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.roles = ['user'];
    }
}
