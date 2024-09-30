import { Aluno } from "./models/Aluno";
import { Turma } from "./models/Turma";
import { Escola } from "./models/Escola";


const escola = new Escola();

const turma1 = new Turma(1, "Desenvolvimento Full Stack", "presencial");
const turma2 = new Turma(2, "Front End", "ead");

const aluno1 = new Aluno("Ana", "Silva", "ana.silva@gmail.com", "presencial", 1, new Date(2005, 5, 15), [7, 8, 9], true, "A");
const aluno2 = new Aluno("João", "Santos", "joao.santos@gmail.com", "ead", 2, new Date(2004, 3, 10), [5, 6, 7], true, "B");
const aluno3 = new Aluno("Maria", "Costa", "maria.costa@gmail.com", "ead", 2, new Date(2006, 2, 10), [8, 9, 10], true, "B");
const aluno4 = new Aluno("Lucas", "Oliveira", "lucas.oliveira@gmail.com", "presencial", 1, new Date(2005, 8, 12), [6, 7, 8], true, "A");
const aluno5 = new Aluno("Fernanda", "Lima", "fernanda.lima@gmail.com", "ead", 2, new Date(2005, 4, 22), [5, 6, 4], true, "B");
const aluno6 = new Aluno("Ricardo", "Moura", "ricardo.moura@gmail.com", "presencial", 1, new Date(2004, 1, 5), [9, 10, 10], true, "A");
const aluno7 = new Aluno("Tatiane", "Pereira", "tatiane.pereira@gmail.com", "ead", 2, new Date(2006, 6, 30), [4, 5, 6], true, "C");
const aluno8 = new Aluno("André", "Nunes", "andre.nunes@gmail.com", "presencial", 1, new Date(2005, 10, 19), [7, 7, 7], true, "A");
const aluno9 = new Aluno("Juliana", "Ferreira", "juliana.ferreira@gmail.com", "ead", 2, new Date(2006, 3, 28), [5, 6, 4], true, "B");
const aluno10 = new Aluno("Paulo", "Almeida", "paulo.almeida@gmail.com", "presencial", 1, new Date(2005, 2, 17), [6, 6, 6], true, "B");
const aluno11 = new Aluno("Cecília", "Cardoso", "cecilia.cardoso@gmail.com", "ead", 2, new Date(2005, 5, 23), [8, 9, 10], true, "A");
const aluno12 = new Aluno("Rafael", "Gomes", "rafael.gomes@gmail.com", "presencial", 1, new Date(2004, 9, 9), [5, 6, 5], true, "C");
const aluno13 = new Aluno("Vanessa", "Barros", "vanessa.barros@gmail.com", "ead", 2, new Date(2006, 7, 14), [9, 9, 8], true, "A");

escola.cadastrarTurma(turma1);
escola.cadastrarTurma(turma2);

escola.cadastrarAluno(aluno1, 1);
escola.cadastrarAluno(aluno2, 2);
escola.cadastrarAluno(aluno3, 2);
escola.cadastrarAluno(aluno4, 1);
escola.cadastrarAluno(aluno5, 2);
escola.cadastrarAluno(aluno6, 1);
escola.cadastrarAluno(aluno7, 2);
escola.cadastrarAluno(aluno8, 1);
escola.cadastrarAluno(aluno9, 2);
escola.cadastrarAluno(aluno10, 1);
escola.cadastrarAluno(aluno11, 2);
escola.cadastrarAluno(aluno12, 1);
escola.cadastrarAluno(aluno13, 2);


aluno1.exibirInformacoes();
aluno2.exibirInformacoes();
aluno3.exibirInformacoes();

escola.listagemAlunos();

console.log("Quantidade de turmas cadastradas:", escola.quantidadeTurmas());

console.log("Alunos ativos:", escola.listarAlunosAtivos());

console.log("Alunos abaixo da média:", escola.alunosAbaixoDaMedia());
