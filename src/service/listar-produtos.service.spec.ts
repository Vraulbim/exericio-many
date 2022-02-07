/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarProdutosService } from './listar-produtos.service';

describe('Service: ListarProdutos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarProdutosService]
    });
  });

  it('should ...', inject([ListarProdutosService], (service: ListarProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
