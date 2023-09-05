

export const calcularPB = (matP, matB) => {
   const matrizP = JSON.parse(matP);
   const matrizB = JSON.parse(matB);
   let matrizPB = [];
   for (let i = 0; i < matrizP.length; i++) {
      let total = 0;
      for (let j = 0; j < matrizP.length; j++) {
         total += matrizP[i][j] * matrizB[j][0];
      }
      matrizPB.push([total]);
   }
   return matrizPB;
}

export const calcularLcPB = (matL, matPB) => {
   const matrizL = JSON.parse(matL);
   const filas = matrizL.length;
   let matrizLCPB = {};
   for (let i = 0; i < filas; i++) {
      matrizLCPB[`C${i + 1}`] = 1;
   }
   for (let i = 0; i < matrizL.length; i++) {
      let total = matPB[i][0];
      for (let j = 0; j < matrizL.length; j++) {
         if (j !== i) {
            total = total + (-1 * (matrizL[i][j] * matrizLCPB[`C${j + 1}`]));
         }
      }
      total = total / matrizL[i][i];
      matrizLCPB[`C${i + 1}`] = Math.round(total);
   }
   console.log('\n');
   console.log(matrizLCPB);
   return matrizLCPB;
}

export const calcularUxC = (matU, matC) => {
   const matrizU = JSON.parse(matU);
   const filas = matrizU.length;
   let matrizUxC = {};
   for (let i = 0; i < filas; i++) {
      matrizUxC[`X${i + 1}`] = 1;
   }
   for (let i = matrizU.length - 1; i >= 0; i--) {
      let total = matC[i][0];
      for (let j = 0; j < matrizU.length; j++) {
         if (j !== i) {
            total = total + (-1 * (matrizU[i][j] * matrizUxC[`X${j + 1}`]));
         }
      }
      total = total / matrizU[i][i];
      matrizUxC[`X${i + 1}`] = parseFloat(total.toFixed(2));
   }
   console.log('\n');
   console.log(matrizUxC);
   return matrizUxC;
}