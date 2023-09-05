
import { calcularLcPB, calcularPB, calcularUxC } from './utils/operaciones-matrices.js';
import { imprimirMatriz } from './utils/imprimir-matriz.js';
import { inquirerMenu, leerInput, pausa } from './utils/inquirer.js';


const main = async () => {

   let option = '';
   let matrizP = '[[0,0,1,0],[0,0,0,1],[0,1,0,0],[1,0,0,0]]';
   let matrizB = '[[0],[1],[-3],[4]]';
   let matrizL = '[[1,0,0,0],[0,1,0,0],[0.6667,0,1,0],[0.3333,0,0,1]]';
   let matrizU = '[[3,-3,6,1],[0,2,1,1],[0,0,-1,0.33333],[0,0,0,-0.33333]]';
   let matrizPB = [];
   let matrizC = [];
   let matrizX = [];

   do {
      option = await inquirerMenu();
      switch (option) {
         case '1':
            console.log('Ingrese cada matriz siguiedo la siguiente nomenclatura: [[1,2,3],[4,5,6],[7,8,9]]');
            matrizP = await leerInput('Ingrese la matriz P: ');
            matrizB = await leerInput('Ingrese la matriz B: ');
            matrizL = await leerInput('Ingrese la matriz L: ');
            matrizU = await leerInput('Ingrese la matriz U: ');
            break;
         case '2':
            matrizPB = calcularPB(matrizP, matrizB);
            console.log('\n');
            imprimirMatriz(matrizPB);
            break;
         case '3':
            const resultC = calcularLcPB(matrizL, matrizPB);
            for (const key in resultC) {
               matrizC.push([resultC[key]]);
            }
            console.log('\n');
            imprimirMatriz(matrizC);
            break;
         case '4':
            const resultX = calcularUxC(matrizU, matrizC);
            for (const key in resultX) {
               matrizX.push([resultX[key]]);
            }
            console.log('\n');
            imprimirMatriz(matrizX);
            break;
      }
      await pausa();
   } while (option !== '0');




}

main();

