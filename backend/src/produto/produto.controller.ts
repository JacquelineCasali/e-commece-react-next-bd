/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
@Get()
    obterProdutos():Produto[]{
        return produtos.map((produto)=>({
            ...produto,
            especificacoes:{destaque:produto.especificacoes.destaque},
        }));
    }
}
