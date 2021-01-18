export class Perfil {

    public id: string;
    public perfil: string;

    get value() {
        return this.id;
    }
    get display() {
      return this.perfil;
    }
  }
  