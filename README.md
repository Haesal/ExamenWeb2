# ExamenWeb2
# Bruno Hae sal Vázquez Hwang

Este trabajo uso la instancia en la nube.

## Obtener lugar por pais (GET /lugar/obtenerLugar):
#### Se recibe un JSON con pais: String.
En este caso se recibe un pais en el body y con esto se busca en la BD todos los lugares que son en ese pais:
![imagen](https://user-images.githubusercontent.com/61795705/138372607-fc671db7-46f0-495d-a58a-c390a6ae32c0.png)

## Agregar lugar o actualizar el nivel de interes dependiendo de lugar y pais (POST /lugar/agregarLugar):
#### Se recibe un JSON con lugar: String, pais: String, atractivo: String, interes: Number.
### Aumenta interes:
Para aumentar el interes, ya debio de aber existido la combinación de pais con lugar:
![imagen](https://user-images.githubusercontent.com/61795705/138372691-96b1d443-6032-4a9b-ae0d-4d31d90f8148.png)
### Agrega Lugar:
Aqui el pais o el lugar no estan repeditdos por lo que se crea en la bd:
![imagen](https://user-images.githubusercontent.com/61795705/138372744-c92cb1f6-ab1c-40de-9f14-5a54d3c4c596.png)
![imagen](https://user-images.githubusercontent.com/61795705/138372758-790f1473-4102-4cd8-b039-c9af1bf6c853.png)
