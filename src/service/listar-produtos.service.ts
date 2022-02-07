import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ListarProdutosService {

constructor(private http: HttpClient) { }

getProdutos(){
  let listaProdutos = {"products":[{"idProduct":2195,"title":"Chá Verde Latte","description":"Feito com Leite Vaporizado e Matcha. Levemente adocicado ","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/1113/1454_0.jpg","price":12.5,"tag":"a partir de R$ 12,50"},{"idProduct":1072,"title":"Frappuccino®️ Choco Chip","description":"Feito com Frappuccino Roast (café), Leite, Choco chip e Calda Mocha (Chocolate). Finalizado com Chantilly de Baunilha e Cobertura Mocha - Com café<br>Feito com Leite, Choco chip e Calda Mocha (Chocolate). Finalizado com Chantilly de Baunilha e Cobertura Mocha - Sem café","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/1002/1343_0.jpg","idCategory":4,"price":15.5,"tag":"a partir de R$ 15,50"},{"idProduct":2229,"title":"Sanduíche de Salame","description":"Sanduíche de pão integral, salame, maionese, queijo mussarela, tomate e rúcula.","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/1075/1416_0.jpg","idCategory":25,"price":18},{"idProduct":1099,"title":"Chocolate Gelado","description":"Leite, gelo, essência de baunilha e calda de chocolate. Finalizado com chantilly e cobertura de chocolate.","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/936/1277_0.jpg","idCategory":8,"price":11.9,"tag":"a partir de R$ 11,90"},{"idProduct":3219,"title":"Café Latte Gelado","description":"Café espresso, leite e gelo. ","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/1225/1566_0.jpg","idCategory":68,"price":12.49,"tag":"a partir de R$ 12,49"},{"idProduct":1049,"title":"Croissant de Frango","description":"  Massa  folheada recheada com Frango e finalizada com salsa","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/999/1340_0.jpg","idCategory":6,"price":9.5},{"idProduct":1004,"title":"Bananinha","description":"  Doce de  banana sem açúcar.","imageUrl":"https://manyplaces-h.s3.sa-east-1.amazonaws.com/paris6/domain/31/advertisement/1235/1576_0.jpg","idCategory":7,"price":3.5}]}

  return JSON.parse(JSON.stringify(listaProdutos));
}
}

