<<<<<<< HEAD
# Prueba-con-Jest
=======
# Prueba con Jest para JavaScript Node.js v22.18.0
Este proyecto muestra cómo crear y ejecutar pruebas unitarias simples usando **Jest** en **JavaScript**, todo desde un solo archivo de guía.

---
## Requisitos Previos
- Tener instalado **Node.js** (v14+)
- Usar un gestor de paquetes como **npm**

---

### 1. Iniciar el pryecto
mkdir jest-ejemplo
cd jest-ejemplo
npm init -y

---

### 2. Instalar Jest
- npm install --save-dev jest

|Comando                     |Descripcion                   |
|----------------------------|------------------------------|
|npm install --save-dev jest |librearia de pruebas unitarias|

### 3. Configurar el script de test

{
  "name": "jest-ejemplo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest" //se cambia lo que haya aqui por Jest
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}

----

### 4.Crear el archivo src/math.js
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

module.exports = { sumar, restar };

----

### 5. Crear el archivo de pruebas tests/math.test.js
const { sumar, restar } = require('../src/math');

test('la suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('la resta de 10 - 4 debe ser 6', () => {
  expect(restar(10, 4)).toBe(6);
});

----

### 6. Ejecutar las pruebas

npm test

>>>>>>> de1141f (Primer commit sin node_modules)
