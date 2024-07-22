export class Unidade {
    constructor(title, the_content, map, tel, cep) {
      this.title = title;
      this.the_content = the_content;
      this.map = map;
      this.tel = tel;
      this.cep = cep;
    }
  }
  

export class Estado {
    constructor(id, nome, regiao, unidades) {
      this.id = id;
      this.nome = nome;
      this.regiao = regiao;
      this.unidades = unidades.map(unidade => new Unidade(
        unidade.title,
        unidade.the_content,
        unidade.map,
        unidade.tel,
        unidade.cep
      ));
    }
  }