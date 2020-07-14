export class Regions {
    idLugar: number;
    pais: string;
    distrito: string;
    canton: string;
    provincia: string;
  continente: string;


    constructor(id, country,state, region,province,continente){
        this.idLugar=id;
        this.pais = country;
        this.distrito = state;
        this.canton = region;
      this.provincia = province;
      this.continente = continente;
    }
}
