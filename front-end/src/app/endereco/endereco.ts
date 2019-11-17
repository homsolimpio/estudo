import { Pais } from "src/app/pais/pais";

export class Endereco {
    id: number;
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: Pais;
}