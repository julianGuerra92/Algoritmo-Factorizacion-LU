
import inquirer from 'inquirer';
import 'colors';

const preguntas = [
   {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: [
         {
            value: '1',
            name: `${'1.'.green} Ingresar Datos`
         },
         {
            value: '2',
            name: `${'2.'.green} Hallar PB`
         },
         {
            value: '3',
            name: `${'3.'.green} Hallar LC = PB`
         },
         {
            value: '4',
            name: `${'4.'.green} Hallar UX = C`
         },
         {
            value: '0',
            name: `${'0.'.green} Salir`
         },

      ]
   }
];

export const inquirerMenu = async () => {

   console.clear();
   console.log('=========================='.green);
   console.log('  Seleccione una opción'.white);
   console.log('==========================\n'.green);

   const { opcion } = await inquirer.prompt(preguntas);

   return opcion;
}


export const pausa = async () => {
   const question = [
      {
         type: 'input',
         name: 'enter',
         message: `Presione ${'enter'.green} para continuar`
      }
   ];
   console.log('\n');
   await inquirer.prompt(question);
}

export const leerInput = async (message) => {
   const question = [
      {
         type: 'input',
         name: 'desc',
         message,
         validate(value) {
            if (value.length === 0) {
               return 'Por favor ingrese un valor';
            }
            return true;
         }
      }
   ];
   const { input } = await inquirer.prompt(question);
   return input;
}