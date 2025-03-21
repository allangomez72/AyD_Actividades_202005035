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
