export class Aluno {
  nome: string;
  sobrenome: string;
  email: string;
  tipo: "presencial" | "ead";
  turma: number;
  nascimento: Date;
  notas: number[] = [];
  ativo: boolean = true;
  classificacao:  "A" | "B" | "C" | "D";
  static readonly MEDIA_ESCOLA = 6; // Média padrão da escola

  constructor(
    nome: string,
    sobrenome: string,
    email: string,
    tipo: "presencial" | "ead",
    turma: number,
    nascimento: Date,
    notas: number[] = [],
    ativo: boolean = true,
    classificacao: "A" | "B" | "C" | "D",
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.tipo = tipo;
    this.turma = turma;
    this.nascimento = nascimento; 
    this.notas = notas.slice(0, 5);
    this.ativo = ativo;
    this.classificacao = classificacao;
  
    if (!this.validarIdade()) {
      throw new Error("Aluno deve ter pelo menos 16 anos.");
    }
  }

  private validarIdade(): boolean {
    const hoje = new Date();
    const idade = hoje.getFullYear() - this.nascimento.getFullYear();
    const aniversarioPassou =
      hoje.getMonth() > this.nascimento.getMonth() ||
      (hoje.getMonth() === this.nascimento.getMonth() && hoje.getDate() >= this.nascimento.getDate());
    return idade > 16 || (idade === 16 && aniversarioPassou);
  }

  // Método para atualizar as informações do aluno, exceto o email
  public atualizarInformacoes(dados: {
    nome?: string;
    sobrenome?: string;
    tipo?: "presencial" | "ead";
    nascimento?: Date;
    notas?: number[];
    ativo?: boolean;
  }): void {
    if (dados.nome) {
      this.nome = dados.nome;
    }
    if (dados.sobrenome) {
      this.sobrenome = dados.sobrenome;
    }
    if (dados.tipo) {
      this.tipo = dados.tipo;
    }
    if (dados.nascimento) {
      this.nascimento = dados.nascimento;
    }
    if (dados.notas) {
      this.notas = dados.notas;
    }
    if (dados.ativo !== undefined) {
      this.ativo = dados.ativo;
    }
  }

  public calcularMedia(): { media: number; aprovado: boolean } {
    if (this.notas.length === 0) {
      throw new Error("O aluno não possui notas cadastradas.");
    }

    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / this.notas.length;
    const aprovado = media >= Aluno.MEDIA_ESCOLA;

    return {
      media,
      aprovado,
    };
  }

  desativar(): void {
    this.ativo = false;
  }

  // Método para exibir as informações do aluno
  public exibirInformacoes(): void {
    console.log(`Nome: ${this.nome} ${this.sobrenome}`);
    console.log(`Email: ${this.email}`); 
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Turma: ${this.turma}`);
    console.log(`Nascimento: ${this.nascimento.toDateString()}`);
    console.log(`Notas: ${this.notas.join(', ')}`);
    console.log(`Ativo: ${this.ativo}`);
    const { media, aprovado } = this.calcularMedia();
    console.log(`Média: ${media}`);
    console.log(`Status: ${aprovado ? "Aprovado" : "Reprovado"}`);
  }
}
