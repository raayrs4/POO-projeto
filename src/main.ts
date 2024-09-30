import { Aluno } from "./models/Aluno";
import { Escola } from "./models/Escola";
import { Turma } from "./models/Turma";

const escola = new Escola();

// Criando alunos
const aluno1 = new Aluno("Ana", "Silva", "ana.silva@gmail.com", "presencial", 1, new Date(2005, 5, 15), [7, 8, 9], true);
const aluno2 = new Aluno("João", "Santos", "joao.santos@gmail.com", "ead", 2, new Date(2004, 3, 10), [5, 6, 7], true);

console.log(aluno1)
console.log(aluno2)