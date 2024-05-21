# Raices Urbanas

## Descripción

En este proyecto, se implementa una aplicación web de una sola página (SPA) utilizando Webpack y Babel. La pagina consta de varias escenas, como la vista principal, la vista de las porpiedades, la vista de inicio de sesion, las vistas de perfil de cada tipo de usuario(usuario y dueño), la vista de chat, la vista de notificaciones y la vista de agregar propiedades(solo dueño) 

Algunas escenas contienen componentes reutilizables, como la barra de navegación y el footer. El proyecto está estructurado de acuerdo con las mejores prácticas de desarrollo web y utiliza tecnologías modernas para optimizar el rendimiento y la eficiencia del código.

## Estructura del proyecto
```txt
project-root/
│
├── dist/                       # Carpeta de salida de archivos generados por Webpack
│
├── app/                        # Carpeta de código fuente
│   ├── assets/                 # Imágenes, fuentes, etc.
│   ├── components/             # Componentes reutilizables globales
|   |   ├── header/             # header 
|   |       ├── header.js
|   |       └── header.
|   |   ├── footer/             # footer
|   |       ├── footer.js
|   |       └── footer.css
│   │   ├── navigation-bar/     # Barra de navegación
│   │   │   ├── navigation-bar.js
│   │   │   └── navigation-bar.css
├── scenes/                 # Diferentes escenas para el dashboard
│   │   ├── home/          # Vista principal
│   │   │   ├── home.js
│   │   │   ├── home.css
│   │   │   └── components/
│   │   ├── login/               # Escena de login
│   │   │   ├── login.js
│   │   │   ├── login.css
│   │   │   └── components/
│   │   ├── property-view/            # Escena de Property-view
│   │   │   ├── property-view.js
│   │   │   ├── property-view.css
│   │   │   └── components/
│   │   └── register/           # Escena de Register
│   │       ├── register.js
│   │       ├── register.css
│   │       └── components/
│   ├── styles/                 # Estilos globales
│   │   └── global.css          # Estilos globales compartidos
│   └── index.js                # Archivo principal de JavaScript
|   └── App.js                  # Archivo principal de nuestra app SPA
|   └── Router.js               # Archivo de configuración de rutas de nuestra app SPA
│
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── index.html                  # Archivo principal de HTML
├── package-lock.json           # Dependencias del proyecto con versiones exactas
├── package.json                # Dependencias del proyecto y scripts
├── webpack.config.js           # Archivo de configuración de Webpack
└── README.md                   # Documentación del proyecto
```