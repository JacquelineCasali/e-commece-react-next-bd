/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Produto } from 'src/core';
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {
constructor(readonly repo:ProdutoPrisma){}


@Post()
    salvarProdutos(@Body() produto : Produto):Promise<void>{
        return this.repo.salvar(produto);
    }

@Get()
    obterProdutos():Promise<Produto[]>{
        return this.repo.obter();
    }
    @Get(':id')
    async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
      return this.repo.obterPorId(Number(id))
    }
@Delete(':id')
async DeletarProduto(@Param('id') id: string): Promise<void> {
    return await this.repo.excluirProduto(+id)
  }

}
