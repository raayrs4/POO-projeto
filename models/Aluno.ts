export class Aluno {
  private nome: string;
  private sobrenome: string;
  email: string;
  private tipo: "presencial" | "ead";
  public readonly turma: number;
  private nascimento: Date;
  private notas: number[] = [];
  private ativo: boolean = true;

  constructor(
    nome: string,
    sobrenome: string,
    email: string,
    tipo: "presencial" | "ead",
    turma: number,
    nascimento: Date,
    notas: number[] = []
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.tipo = tipo;
    this.turma = turma;
    this.nascimento = nascimento;
    this.notas = notas;
  }

  atualizarAluno() {
    console.log("atualizar informações do aluno")
  }

  calcularMedia() {
    console.log("Calcular média do aluno")
  }
}