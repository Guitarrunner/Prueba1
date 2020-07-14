export class Patients {
    idPaciente:number;
    nombrePaciente:string;
    apellidos:string;
    ID:string;
    edad:number;
    nacionalidad:string;
    provincia:string;
    patologias:string;
    estado:string;
    medicacion:string;
    internado:string;
    uci: string;
    pais: string;

  constructor(id, name, lastName, patientId, age, nationality, region, pathologies, states, medication, intern, uci) {
    this.idPaciente = id;
    this.nombrePaciente = name;
    this.apellidos = lastName;
    this.ID = patientId;
    this.edad=age;
    this.nacionalidad=nationality;
    this.provincia=region;
    this.patologias=pathologies;
    this.estado=states;
    this.medicacion=medication;
    this.internado=intern;
    this.uci=uci;
            
        }


}
