# Requisitos para levantar el proyecto

Node version: ^16.16.0
Yarn version(recomendado): ^1.23.0-20200615.1913

# Pasos de instalación y de inicio

## Con YARN

1. yarn install -> Descarga los paquetes necesarios.
2. yarn start -> Inicia el proyecto de forma local.

# Deploy en Github Pages

yarn deploy -> Genera un build y es deployado en https://santi2001.github.io/proyecto-recetas-andinas/

# Detalles de implementación

# Estructura de directorios en "src"

## Tener en cuenta

Todos los directorios mencionados a continuación poseen un archivo index.js.
Con el fin de poder facilitar la exportarción de archivos y/o componentes de React.

### directorio assets

Contiene archivos de imagenes.

### directorio config

Contiene la configuración de tamaños de letras, paleta de colores, entre otras cosas para el proyecto. Requeridos por Material-UI (MUI).

### directorio context

Almacena la configuración del estado de la aplicación usando createContext de React.

### directorio pages

Almacena las paginas de la aplicación, en conjunto a sus componentes.

### directorio shared

Almacena los componentes reutilizados por otros componentes.

### directorio utils/data

Almacena los datos harcodeados utilizadospor la aplicación.

# Estructura de componente

Por cada componente generado los siguientes archivos

.ComponentName
|
|_ ComponentName.jsx -> Contendra el desarrollo del componente (funciones necesarias, jsx requerido, entre otras cosas)
|
|_ ComponentName.style.js -> Contendra los estilos usados por el componente. Puede ser opcional
| en caso de que el componente no requiera.
|
|\_ index.js -> Facilitara la exportación del componente a otros directorios y/o componentes.

# Archivo .eslintrc.js

Contiene la configuración eslint utilizada. Por ej el orden de importación que se debe seguir.
