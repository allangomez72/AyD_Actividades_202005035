# Tarea 2 - Docker

## Descripción
Esta es una aplicación desarrollada en React con Vite, la cual muestra mi nombre, carné y curso al presionar un botón.

**Nombre:** Allan Gómez  
**Carné:** 202005035  
**Curso:** Análisis y Diseño de Sistemas 1

---

## Ambiente Local

### Requisitos
- Node.js
- pnpm o npm

### Instrucciones para ejecutarlo en local
```bash
# Clonar el repositorio
git clone https://github.com/allangomez72/AyD_Actividades_202005035.git

cd Tarea2

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## Despliegue con Docker
### Requisitos
- Tener docker instalado
- Crear un dockerfile similar a este:
```dockerfile
# Etapa de build
FROM node:18 AS build

WORKDIR /app

# Copiar archivos importantes
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY public/ public/
COPY src/ src/

# Instalar pnpm y dependencias
RUN npm install -g pnpm
RUN pnpm install

# Compilar el proyecto
RUN pnpm run build

# Etapa de producción con nginx
FROM nginx:alpine

# Copiar el contenido compilado al servidor web
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

```

# Construir la imagen
docker build -t tarea2-app .

# Ejecutar el contenedor en el puerto 80
docker run -d -p 80:80 tarea2-app

## Comprobación

Ejecución del contenedor
![Ejecución](/tarea2/assets/img.png)

Boton para visualizar el contenido:
![captura1](/tarea2/assets/img_1.png)

Mostrar contenido:
![captura1](/tarea2/assets/img_2.png)
