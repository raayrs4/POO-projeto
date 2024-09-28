// - Cadastrar turma contendo
// 	- código, *number* entre 1 e 10 (no máximo 10 turmas)
// 	- máximo, *number* máximo de alunos de 5 a 10
// 	- alunos, *Alunos[]*
// 	- descrição, *string*
// 	- tipo, *string* (sendo presencial ou ead)

import { Aluno } from "./Aluno";

export class Turma {
  private codigo: number;
  private maximoAlunos: number;
  private alunos: Aluno[];
  private descricao: string;
  private tipo: "presencial" | "ead"; 

  constructor(
    codigo: number, 
    maximoAlunos: number, 
    descricao: string, 
    tipo: "presencial" | "ead") {

    if (codigo < 1 || codigo > 10) {
      throw new Error("O código da turma deve estar entre 1 e 10");
    }
    if (maximoAlunos < 5 || maximoAlunos > 10) {
      throw new Error("O máximo de alunos deve estar entre 5 e 10.");
    }
    this.codigo = codigo;
    this.maximoAlunos = maximoAlunos;
    this.descricao = descricao;
    this.tipo = tipo;
    this.alunos = [];
  }

  listagemAlunos(): Aluno[] {
    return this.alunos;
  }

  adicionarAluno(aluno: Aluno): void {
    if (this.alunos.length >= this.maximoAlunos) {
      throw new Error("Turma já atingiu o número máximo de alunos.");
    }
    this.alunos.push(aluno);
  }

  removerAluno(email: string): void {
    this.alunos = this.alunos.filter(aluno => aluno.email !== email);
  }

  buscarAluno(email: string): Aluno | undefined {
    return this.alunos.find(aluno => aluno.email === email);
  }
}