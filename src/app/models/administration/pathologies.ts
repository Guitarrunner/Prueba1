export class Pathologies {
    idPatologia: number;
    nombrePatologia:string;
    descripcion:string;
    sintomas: string;
    tratamiento:string;

    constructor(id, name, description,symptoms, treatment){
        this.idPatologia=id;
        this.nombrePatologia=name;
        this.descripcion=description;
        this.sintomas=symptoms;
        this.tratamiento=treatment;
    }
}
