# Calculadora de Propinas

Este proyecto es una **calculadora de propinas**, desarrollada con **React**. Permite agregar platillos a una orden, calcular el total y, si el cliente lo autoriza, añadir una propina del 10%, 20% o 50%.

# Tecnologías Utilizadas

- React (^18.3.1)
- Vite (^6.0.5)
- TailwindCSS (^3.4.17)
- TypeScript (~5.6.2)
- ESLint (^9.17.0)

## Uso de useMemo

En este proyecto, se hace uso de useMemo para optimizar el rendimiento de la aplicación.

## ¿Qué es useMemo?

**useMemo** es un hook de React que memoriza el valor de una operación costosa (como cálculos) para evitar que se ejecute innecesariamente en cada renderizado. En este proyecto, se utiliza para calcular el total de la orden de manera eficiente.

# Creación de un Custom Hook: useOrder

En este proyecto también se creó un custom hook llamado useOrder para gestionar la lógica de la orden y las operaciones asociadas.

# Funcionalidad del Custom Hook useOrder:

- addItem: Agrega un platillo a la orden. Si el platillo ya está en la orden, incrementa su cantidad.
- removeItem: Elimina un platillo de la orden por su ID.
- placeOrder: Limpia la orden y resetea la propina.
  Este custom hook encapsula la lógica relacionada con el estado de la orden, facilitando la gestión de los platillos y la propina de forma centralizada.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión recomendada: 22.11.0)
- **npm** (el gestor de paquetes de Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/jempDev/calculadora-propinas.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd calculadora-propinas
   ```
3. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Uso

Para iniciar el entorno de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver la aplicación en http://localhost:5173.
