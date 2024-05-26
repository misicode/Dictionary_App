<!-- PROJECT PRESENTATION -->
<div align="center">
  <a href="https://github.com/misicode/DictionaryApp">
    <img src="./public/favicon.ico" alt="Logo Icon" width="80" height="80">
  </a>

  <h1 align="center">Dictionary App</h1>

  <p align="center">
    <span>Aplicación de diccionario</span><br>
    <a href="https://misicode-dictionary.netlify.app">Ver Demo</a>
    |
    <a href="https://github.com/misicode/DictionaryApp/issues">Reportar Bug</a>
    |
    <a href="https://github.com/misicode/DictionaryApp/issues">Solicitar Feature</a>
  </p>
</div><br>


<!-- ABOUT THE PROJECT -->
## 📖 Acerca del repositorio

Aplicación web desarrollada con React que consume la API de [Free Dictionary][dictionaryapi-url] para obtener la definición de palabras en inglés, y la API de [Pexels][pexels-url] para mostrar imágenes asociadas a la palabra.

### Construido con

| Herramienta                                       | Descripción                                                       | Versión |
| ------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| [![React][react-badge]][react-url]                | Biblioteca de JavaScript para construir las interfaces de usuario | 18.2.0  |
| [![Vite][vite-badge]][vite-url]                   | Herramienta de Frontend para construir el proyecto                | 5.2.0   |
| [![TypeScript][typescript-badge]][typescript-url] | Lenguaje de programación fuertemente tipado para escribir código  | 5.2.2   |
| [![SonarQube][sonarqube-badge]][sonarqube-url]    | Plataforma para evaluar el código fuente                          | 10.5    |
| [![NPM][npm-badge]][npm-url]                      | Administrador de paquetes para instalar las dependencias          | 10.5.0  |
| [![Visual Studio Code][vsc-badge]][vsc-url]       | Editor de código para el proyecto                                 | 1.89.1  |

### Vista previa

<img src="https://github.com/misicode/WS-Dictionary/assets/88341114/1fc81702-5a89-48a0-8ff7-a6f96b01f353" width="900" />

<img src="https://github.com/misicode/WS-Dictionary/assets/88341114/862f9cc2-11c6-4ca5-a989-6da6d39a7d42" width="900" />


<!-- GETTING STARTED -->
## 🚀 Iniciando el proyecto

Para poner en funcionamiento una copia local de este repositorio, siga los siguientes pasos.

### Requisitos previos

Obligatorio
```txt
NodeJS >= 16.X
NPM >= 8.X
```

Opcional
```txt
Git
Visual Studio Code
```

### Instalación y configuración

1. Obtenga una clave API gratuita en [Pexels][pexels-url].

2. Descargue o clone este repositorio.

   ```sh
   git clone https://github.com/misicode/DictionaryApp.git
   ```

3. Instale todos los paquetes NPM.

   ```sh
   npm install
   ```

4. Cree el archivo `.env` como copia del archivo `.env.template` e ingrese la clave de su API.

   ```env
   # PEXELS
   VITE_PEXELS_API_KEY=your_pexels_api_key
   ```

5. Ejecute el proyecto en modo desarrollo.
   ```
   npm run dev
   ```


<!-- CODE QUALITY -->
## 🔍 Evaluando la calidad de código

### Requisitos previos

```txt
SonarQube >= 9.X
```

### Configuración

1. Inicie el servicio de SonarQube.

2. Edite la sección de configuración de Sonar en el archivo `sonar-project.properties` con sus credenciales de acceso.

   ```properties
   # Sonar configuration
   sonar.host.url=http://localhost:9000/
   sonar.login=admin
   sonar.password=Admin1
   ```

3. Ejecute el escaneo de Sonar.

   ```
   npm run sonar
   ```

### Resultados

<img src="https://github.com/misicode/DictionaryApp/assets/88341114/5db634b9-3bc6-4d55-9d8a-4f9e8bbd2d18" width=800 />


<!-- LICENSE -->
## 💼 Licencia

Distribuido bajo la licencia MIT. Consulte [LICENSE.txt][license-url] para obtener más información.


<!-- CONTACT -->
## 🌸 Contacto

_Desarrollado por_ **Alessandra Mincia**

[![Misicode][misicode-badge]][misicode-url]
[![GitHub][github-badge]][github-url]
[![LinkedIn][linkedin-badge]][linkedin-url]


<!-- ACKNOWLEDGMENTS -->
## 📝 Agradecimientos

La idea de este proyecto surgió como iniciativa del workshop "SheCodes React", de [SheCodes][shecodes-url]. Para obtener más información detallada de este programa visite el siguiente [enlace][shecodes-react-url].


<!-- MARKDOWN LINKS -->
[dictionaryapi-url]: https://dictionaryapi.dev
[pexels-url]: https://www.pexels.com/api/
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://es.reactjs.org
[vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev
[typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[sonarqube-badge]: https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD
[sonarqube-url]: https://docs.sonarqube.org/latest/
[npm-badge]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[vsc-badge]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vsc-url]: https://code.visualstudio.com
[license-url]: ./LICENSE.txt
[misicode-badge]: https://img.shields.io/badge/misicode-C020FF?logo=githubsponsors&logoColor=fff
[misicode-url]: https://misicode.netlify.app/
[github-badge]: https://img.shields.io/badge/Github-272727?logo=github&logoColor=fff
[github-url]: https://github.com/misicode
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff
[linkedin-url]: https://www.linkedin.com/in/misicode
[shecodes-url]: https://www.shecodes.io
[shecodes-react-url]: https://www.shecodes.io/react