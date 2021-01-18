export interface Page {
  content: Array<Vehicle>;
  pageable: any;
  totalElements: number;
  last: boolean;
  totalPages: number;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

// export interface Usuario {
//   id: number;
//   cpf: any;
//   nome: string;
//   email: string;
//   situacao: any;
//   perfilAcesso: any;
//   funcaoUsuarioExterno: any;
//   telefone: any;
// };

export class Filtro {
  nome: string;
  situacao: any;
  vehicleBrand : any;
};


export interface Vehicle {
  id: number
  veiculo: string;
  marca: string;
  ano: string;
  descricao: string;
  vendido: boolean;
};