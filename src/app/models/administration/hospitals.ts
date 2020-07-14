export class Hospitals {
    idCentrohospitalario: number;
    nombreHospital: string;
    provincia: string;
    camas: number;
    camasUCI: number;
    director: string;
    contacto: string;

    constructor(id, name, location, bedQuantity, uciQuantity, director, contact){
        this.idCentrohospitalario=id;
        this.nombreHospital=name;
        this.provincia = location;
        this.camas = bedQuantity;
        this.camasUCI = uciQuantity;
        this.director=director;
        this.contacto=contact;
    }
}
