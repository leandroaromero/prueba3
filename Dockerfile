# Imagen de docker para ejecutar el Dockerfile
FROM node:10
 
# Desde donde ejecutamos la app

WORKDIR /usr/src/app
 
# Copiar el package.json y el lock al entorno
COPY package*.json ./
 
# Instala los paquetes necesarios de node
RUN npm install
 
# Copia todo el proyecto al entorno del container
COPY . .
 
# Configuramos el puerto para correr la app
EXPOSE 8080
 
# Ejecutamos la app
CMD [ "npm", "start" ]