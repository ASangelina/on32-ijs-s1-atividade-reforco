import {MaterialLeitura} from "./MaterialLeitura";

class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPaginar: number;

    constructor(titulo: string, autor: string, numeroPaginar: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginar = numeroPaginar;
    }

    exibirDetalhe(): void {
        console.log(`Livro: ${this.titulo} autor: ${this.autor} numeroPaginar: ${this.numeroPaginar}`);
    }
}

class Revista implements MaterialLeitura{
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string,  edicao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhe(): void {
        console.log(`Revista: ${this.titulo} autor: ${this.autor} edicao: ${this.edicao}`);
    }
}

class Artigo implements MaterialLeitura{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
    exibirDetalhe(): void {
        console.log(`Artigo: ${this.titulo} autor: ${this.autor} dataPublicacao: ${this.dataPublicacao.toDateString()}`);
    }

}
const meuLivro = new Livro("Spring Snow","Angelina",300)
meuLivro.exibirDetalhe();
const minhaRevista = new Revista("Revista Moda","Natasha",1)
minhaRevista.exibirDetalhe();
const meuArtigo = new Artigo("Mais Java","Tiago",new Date(2021,11,1))
meuArtigo.exibirDetalhe();
