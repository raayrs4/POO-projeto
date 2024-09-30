import { Aluno } from "./Aluno";

export class Turma {
  codigo: number;
  alunos: Aluno[] = [];
  private descricao: string;
  private tipo: "presencial" | "ead"; 
  private static readonly MAXIMO_ALUNOS = 10;

  constructor(
    codigo: number,
    descricao: string,
    tipo: "presencial" | "ead"
  ) {
    if (codigo < 1 || codigo > 10) {
      throw new Error("O código da turma deve estar entre 1 e 10.");
    }
    this.codigo = codigo;
    this.descricao = descricao;
    this.tipo = tipo;
  }
  
  validarTipoDeTurma(tipoTurma: "presencial" | "ead"): boolean {
    return this.tipo === tipoTurma;
  }

  listagemAlunos(): Aluno[] {
    return this.alunos;
  }

  adicionarAluno(aluno: Aluno): void {
    if (this.alunos.length >= Turma.MAXIMO_ALUNOS) {
      throw new Error("Turma já atingiu o número máximo de alunos.");
    }
    if (this.alunos.some(a => a.email === aluno.email)) {
      throw new Error("Aluno já cadastrado nesta turma.");
    }
    if (!this.validarTipoDeTurma(aluno.tipo)) {
      throw new Error("O tipo do aluno não corresponde ao tipo da turma.");
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