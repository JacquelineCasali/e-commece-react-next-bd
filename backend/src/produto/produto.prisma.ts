/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Produto } from 'src/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    constructor(readonly prisma:PrismaProvider){}
    
    // salva e altera
    async salvar(produto: Produto): Promise<void> {
         await this.prisma.produto.upsert({
            where:{
                id:produto.id ?? -1
            },
            update:produto,
            create:produto
           }) ;
            }

    async obter(): Promise<Produto[]> {
  return  await this.prisma.produto.findMany() as any;
      }

      async obterPorId(id:number): Promise<Produto| null> {
        return await this.prisma.produto.findUnique({where:{id}}) as any ?? null;
            }  
            async excluirProduto (id:number): Promise<void> {
                 await this.prisma.produto.delete({where:{id}}) ;
                    }  
}
