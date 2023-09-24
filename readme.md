# Tablas RESTful

En una aplicación web basada en la arquitectura REST, los recursos (como datos o entidades) se representan mediante URLs (Uniform Resource Locators) y se pueden manipular utilizando los métodos HTTP estándar, que se utilizan para realizar las operaciones CRUD:
  1. Para crear un recurso en el servidor hay que utilizar un POST.
  2. Para recuperar un recurso hay que utilizar un GET.
  3. Para reemplazar el estado de un recurso, o para reemplazarlo totalmente, hay que utilizar un PUT.
  4. Para cambiar el estado de un recurso, o para actualizarlo, hay que utilizar un PATCH.
  5. Para eliminar o borrar un recurso hay que utilizar un DELETE.


### Prerequisites
Tener:
-Node.js
-NPM
-Express.js

## Getting Started

Abrimos la cerpeta del trabajo y nos metemos a la terminal, despues escribimos este comando: 

node index.js

El servidor se corre en el puerto 2202 y aparece esto:

Cannot GET /results/

Se abre POSTMAN y se crea una solicitud para cada operación.

## GET

1. Se pone la solicitud como GET.
2. Se pone la ruta y los valores que vamos a sumar de n1 y n2.
3. Nos muestra el resulatdo cuando le ponemos SEND como se muestra en la siguiente foto:

![`GET:`](./assets/GET.png)
 
## POST

1. Se pone la solicitud como POST.
2. Se pone la ruta y los valores de n1 y n2 que vamos a multiplicar.
3. Nos muestra el resulatdo cuando le ponemos SEND como se muestra en la siguiente foto:

![`GET:`](./assets/POST.png)

## PUT
1. Se pone la solicitud como PUT.
2. Se pone la ruta y los valores de n1 y n2 que vamos a dividir.
3. Nos muestra el resulatdo cuando le ponemos SEND como se muestra en la siguiente foto:

![`GET:`](./assets/PUT.png)


## PATCH

1. Se pone la solicitud como PATCH.
2. Se pone la ruta y los valores de n1 y en este caso el n2 seria la potencia a la cual vamos a elevar el n1.
3. Nos muestra el resulatdo cuando le ponemos SEND como se muestra en la siguiente foto:

![`GET:`](./assets/PATCH.png)

## DELETE

1. Se pone la solicitud como DELETE.
2. Se pone la ruta y los valores de n1 y n2  que vamos a restar.
3. Nos muestra el resulatdo cuando le ponemos SEND como se muestra en la siguiente foto:

![`GET:`](./assets/DELETE.png)

## Built With

* Javascript - Lenguaje de programación
* Express js - Framework
* Postman - Plataforma API
* Visual Studio Code - Editor de texto
* Node js - Entorno en tiempo de ejecución


## Authors

Fátima Monserrath Duarte Pérez 353324.




