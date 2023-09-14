Instalación y configuracion de Jest + React Testing Library:

En proyectos de React + Vite:

1.- Instalaciones:
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

2.- Opcional: Si usamos Fetch API en el proyecto:
yarn add --dev whatwg-fetch

3.- Actualizar los scripts del package.json
"scripts: {
  "test": "jest --watchAll"
}

4.- Crear la configuración de babel babel.config.js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

5.- Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


//Correcion a errores para Las pruebas de testing con jest

1.- Error: ECMAScript Modules no soportado, Instalar dependencia @babel/preset-typescript ->  https://babeljs.io/docs/babel-preset-typescript

    yarn add --dev @babel/preset-typescript

2.- Agregar en babel.config.cjs
{
  "presets": ["@babel/preset-typescript"]
}