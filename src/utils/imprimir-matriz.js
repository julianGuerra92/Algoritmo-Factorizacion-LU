
export const imprimirMatriz = (arreglo) => {
   const filas = arreglo.length;
   const columnas = arreglo[0].length;
   for (let i = 0; i < filas; i++) {
      let fila = '|';
      for (let j = 0; j < columnas; j++) {
         fila += ` ${arreglo[i][j]} `;
         if (j < columnas - 1) {
            fila += ' ';
         } else {
            fila += '|';
         }
      }
      console.log(fila);
   }
}

