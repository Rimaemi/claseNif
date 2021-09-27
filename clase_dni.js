class NIF {
    constructor(dni){
        this._dni = dni;
        this._letra = this.sacarLetra();
    }

    get dni(){
        return this._dni;
    }
    set dni(nuevoDNI) {
        this._dni = nuevoDNI;
        this._letra = this.sacarLetra();
    }

    get letra(){
        return this.sacarLetra(this._dni);
    }

    sacarLetra() {
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

        return letras[this._dni%23];
    }

    mostrar(){
        return `${this._dni}-${this._letra}`;
    }
}

let nuevoNIF = new NIF(6029187);
console.log(nuevoNIF.mostrar());