class Estudante {
    #nome;
    #email;
    #ra;
    #curso;
    #disciplinas;
  
    constructor(nome, email, ra, curso, disciplinas) {
      this.#nome = nome;
      this.#email = email;
      this.#ra = ra;
      this.#curso = curso;
      this.#disciplinas = disciplinas;
    }
  
    get nome() {
      return this.#nome;
    }
  
    get email() {
      return this.#email;
    }
  
    get ra() {
      return this.#ra;
    }
  
    get curso() {
      return this.#curso;
    }
  
    get disciplinas() {
      return this.#disciplinas;
    }
  
    primeiraDisciplina() {
      return this.#disciplinas[0];
    }
  
    ultimaDisciplina() {
      return this.#disciplinas[this.#disciplinas.length - 1];
    }
  }
  
  const estudante1 = new Estudante("João Silva", "joao.silva@example.com", "123456", "Ciência da Computação", ["Algoritmos", "Estrutura de Dados", "Programação Orientada a Objetos"]);
  const estudante2 = new Estudante("Maria Rodrigues", "maria.rodrigues@example.com", "789012", "Engenharia Civil", ["Cálculo", "Física", "Geometria"]);
  
  console.log("Estudante 1:");
  console.log("Nome:", estudante1.nome);
  console.log("E-mail:", estudante1.email);
  console.log("RA:", estudante1.ra);
  console.log("Curso:", estudante1.curso);
  console.log("Disciplinas:", estudante1.disciplinas);
  console.log("Primeira disciplina:", estudante1.primeiraDisciplina());
  console.log("Última disciplina:", estudante1.ultimaDisciplina());
  
  console.log("\nEstudante 2:");
  console.log("Nome:", estudante2.nome);
  console.log("E-mail:", estudante2.email);
  console.log("RA:", estudante2.ra);
  console.log("Curso:", estudante2.curso);
  console.log("Disciplinas:", estudante2.disciplinas);
  console.log("Primeira disciplina:", estudante2.primeiraDisciplina());
  console.log("Última disciplina:", estudante2.ultimaDisciplina());
