/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { DbModule } from './db/db.module';
import { PedidoModule } from './pedido/pedido.module';


@Module({
  imports: [ProdutoModule, DbModule, PedidoModule],

  controllers: [AppController],
  providers: [],
})
export class AppModule {}
