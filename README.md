<h1 align="center">Workshop: Dictionary App</h1>

## 📚 Acerca del Proyecto

Aplicación de diccionario que permite realizar la búsqueda de palabras en inglés. Muestra su pronunciación, distintos significados, ejemplos, sinónimos e imágenes asociadas a la palabra.

## 📸 Capturas

<img src="https://github.com/misicode/WS-Dictionary/assets/88341114/1fc81702-5a89-48a0-8ff7-a6f96b01f353" />

<img src="https://github.com/misicode/WS-Dictionary/assets/88341114/862f9cc2-11c6-4ca5-a989-6da6d39a7d42" />

## 💻 Instalación y configuración

Clone este repositorio y ejecute el siguiente comando para instalar todos los paquetes que utiliza el proyecto, necesitará tener `node` y `npm` instalados globalmente en su equipo.

```
npm install
```

En la raíz del proyecto cree el archivo `.env` como copia del archivo `.env.template` y complete los variables de entorno con sus valores propios.

```env
# PEXELS
VITE_PEXELS_API_KEY=your_pexels_api_key
```

Según su necesidad puede ejecutar cualquiera de los siguientes comandos:

- Para ejecutar el proyecto en modo desarrollo:

  ```
  npm run dev
  ```

- Para construir el proyecto para producción:

  ```
  npm run build
  ```

- Para evaluar el código fuente:

  ```
  npm run sonar
  ```

## 🛠️ Desarrollado con

| Tecnología     | Uso                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://es.reactjs.org)                              | Biblioteca de JavaScript para construir las interfaces de usuario |
| [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)                               | Herramienta de Frontend para construir el proyecto más sencillo y rápido |
| [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Lenguaje de programación fuertemente tipado para escribir código |
| [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)    | Lenguaje de diseño gráfico para aplicar estilos a las pantallas |
| [![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)](https://docs.sonarqube.org/latest/)       | Plataforma para evaluar el código fuente |

## 📝 Créditos

La idea de este proyecto surgió como iniciativa del workshop "SheCodes React", de [SheCodes](https://www.shecodes.io). Para obtener más información detallada de este programa visite el siguiente [enlace](https://www.shecodes.io/react).
