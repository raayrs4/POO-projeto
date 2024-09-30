import { Aluno } from "./Aluno";
import { Turma } from "./Turma";

export class Escola {
  turmas: Turma[] = [];
  alunos: Aluno[] = []

  buscarAluno(email: string): Aluno | undefined {
    return this.alunos.find(aluno => aluno.email === email);
  }

  listagemAlunos() {
    const alunos = this.turmas.flatMap(turma => turma.alunos);
    console.log(`Quantidade de alunos: ${alunos.length}`);
  }

  quantidadeTurmas(): number {
    return this.turmas.length;
  }

  cadastrarTurma(turma: Turma): void {
    if (this.turmas.length >= 10) {
      throw new Error('Número máximo de turmas atingido.');
    }
    const turmaDuplicada = this.turmas.find(t => t.codigo === turma.codigo);
    if (turmaDuplicada) {
      throw new Error('Já existe uma turma com este código.');
    }
    this.turmas.push(turma);
  }

  listarAlunosAtivos(): Aluno[] {
    return this.turmas.flatMap(turma => turma.alunos).filter(aluno => aluno.ativo);
  }

  listarAlunosInativos(): Aluno[] {
    return this.turmas.flatMap(turma => turma.alunos).filter(aluno => !aluno.ativo);
  }

  alunosComMediaEsperada(): Aluno[] {
    return this.turmas.flatMap(turma => turma.alunos).filter(aluno => {
      const { aprovado } = aluno.calcularMedia();
      return aprovado;
    });
  }

  alunosAbaixoDaMedia(): Aluno[] {
    return this.turmas.flatMap(turma => turma.alunos).filter(aluno => {
      const { aprovado } = aluno.calcularMedia();
      return !aprovado;
    });
  }

  private verificarClassificacaoAluno(turma: Turma, aluno: Aluno): void {
    const classificacao = aluno.classificacao; 
    const turmasIncompativeis = {
      A: ["B", "C"],
      B: ["A", "D"],
      C: ["A", "D"],
      D: ["B", "C"]
    };

    if (turma.alunos.some(a => turmasIncompativeis[classificacao].includes(a.classificacao))) {
      throw new Error(`Aluno com classificação ${classificacao} não pode ser cadastrado com alunos de classificação incompatível.`);
    }
  }

  cadastrarAluno(aluno: Aluno, codigoTurma: number): void {
    const turma = this.turmas.find(t => t.codigo === codigoTurma);
    if (!turma) {
      throw new Error("Turma inexistente.");
    }
    if (!turma.validarTipoDeTurma(aluno.tipo)) {
      throw new Error("O tipo do aluno não corresponde ao tipo da turma.");
    }
    const alunoDuplicado = this.alunos.find(a => a.email === aluno.email);
    if (alunoDuplicado) {
      throw new Error("Aluno com este email já cadastrado.");
    }
    this.verificarClassificacaoAluno(turma, aluno);

    this.alunos.push(aluno);
    turma.adicionarAluno(aluno);
    console.log("Aluno adicionado")
    this.listagemAlunos()
  }
}
