<h1 align="center"> Promesas con Async/Await y .then() </h1>

### Resolución del desafio

Armar un programa que permita obtener titulares (top headlines) de noticias, descripción, autor y el link al artículo completo, para crear una collection con objetos que tengan esa info. Imprimir en la terminal el resultado.

El proyecto debe estar compuesto por al menos dos módulos:

- /src
  |- index.ts | Encargado de delegar las acciones a public-api.ts según lo que el usuario ingrese (Usar readline o process.argv).
  |- public-api.ts | Encargado de realizar las peticiones a la API y de manejar los errores.

El usuario tiene que poder filtrar las noticias según: país, categoría y fuente.
Usar las herramientas de la API para filtrar.
El usuario también puede indicar la cantidad de resultados que le saldrá por consulta.
