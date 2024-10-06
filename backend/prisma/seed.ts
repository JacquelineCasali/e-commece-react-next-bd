/* eslint-disable prettier/prettier */


import { PrismaClient } from "@prisma/client";
import { produtos } from "../src/core";

const prisma = new PrismaClient();
// popular banco 
async function seed() {
    await prisma.produto.createMany({

        data:produtos.map((produto)=>({
            ...produto,
            id:undefined
        })
      
        )
         
     
    });

    
}
seed()