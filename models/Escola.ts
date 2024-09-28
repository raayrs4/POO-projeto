import { Aluno } from "./Aluno";
import { Turma } from "./Turma";

export class Escola {
  alunos: Aluno[] = [];
  turmas: Turma[] = [];

  buscarAluno() {
    console.log("Buscar um aluno específico")
  }

  listagemAlunos() {
    console.log("Listar todos os alunos de todas as turmas")
  }

  quantidadeTurmas(): number {
    return this.turmas.length;
  }
}