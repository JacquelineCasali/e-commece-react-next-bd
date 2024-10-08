/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { PedidoController } from './pedido.controller';
import { PedidoPrisma } from './pedido.prisma';

@Module({
    imports:[DbModule],
    controllers:[PedidoController],
    providers:[PedidoPrisma]
})
export class PedidoModule {}
