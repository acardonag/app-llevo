# 🚚 Llevo - Sistema de Gestión de Mensajeros

Sistema web para gestionar mensajeros, registrar servicios y controlar saldos en tiempo real usando Firebase.

## ✨ Características

- **🔐 Autenticación de Google**: Sistema de login seguro para administradores
- **👥 Gestión de Usuarios**: Lista blanca de usuarios administradores autorizados
- **📊 Auditoría Completa**: Rastreo de quién hace cada cambio en el sistema
- **🚚 Gestión de Mensajeros**: Agregar, eliminar y gestionar mensajeros
- **💰 Registro de Servicios**: Descontar servicios del saldo del mensajero
- **💳 Recargas**: Agregar saldo a los mensajeros
- **⚖️ Balance en Tiempo Real**: Cálculo automático del saldo basado en transacciones
- **📈 Historial Completo**: Seguimiento de todos los servicios y recargas
- **📤 Exportar/Importar**: Backup y restauración de datos
- **📱 Interfaz Responsiva**: Diseño moderno y fácil de usar

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Base de Datos**: Firebase Firestore
- **Autenticación**: Firebase Auth (preparado para implementar)
- **Estilos**: CSS personalizado (sin dependencias externas)
- **Fuentes**: Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
Llevo/
├── App.html              # Aplicación principal con autenticación
├── styles.css            # Estilos CSS personalizados
├── firebase-config.js    # Configuración de Firebase y usuarios admin
├── ADMIN_SETUP.md        # Guía de configuración de administradores
├── .gitignore            # Archivos excluidos de Git
└── README.md             # Documentación del proyecto
```

## 🔧 Configuración

### Prerrequisitos

1. **Cuenta de Firebase** con proyecto creado
2. **Firestore Database** habilitado
3. **Authentication** habilitado con Google como proveedor
4. **Navegador web moderno** con JavaScript habilitado
5. **Cuenta de Google** para autenticación

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd Llevo
   ```

2. **Configurar Firebase**:
   - Editar `firebase-config.js` con tu configuración
   - Habilitar Firestore en tu proyecto de Firebase
   - Habilitar Authentication con Google como proveedor
   - Configurar reglas de seguridad de Firestore
   - Agregar usuarios administradores en `ADMIN_USERS`

3. **Ejecutar la aplicación**:
   - Abrir `App.html` en tu navegador
   - O usar un servidor local

### 🔐 Configuración de Autenticación

**📋 Pasos detallados en `ADMIN_SETUP.md`:**

1. **Habilitar Google Auth** en Firebase Console
2. **Configurar usuarios administradores** en `firebase-config.js`
3. **Configurar reglas de Firestore** para seguridad
4. **Probar autenticación** con cuentas autorizadas

**⚠️ Importante:** Solo los emails agregados a `ADMIN_USERS` podrán acceder al sistema.

## 📊 Funcionalidades Principales

### 🔐 Autenticación y Seguridad
- **Login con Google**: Autenticación segura y confiable
- **Control de Acceso**: Solo usuarios administradores autorizados
- **Auditoría Completa**: Rastreo de todos los cambios por usuario
- **Sesión Persistente**: Login automático hasta logout manual

### 🚚 Gestión de Mensajeros
- Agregar nuevos mensajeros
- Seleccionar mensajero activo
- Eliminar mensajeros y sus datos

### 💰 Transacciones
- **Servicios**: Registrar servicios prestados (descuenta del saldo)
- **Recargas**: Agregar saldo al mensajero
- **Balance**: Cálculo automático: `Saldo = Total Recargas - Total Servicios`

### 📈 Historial y Reportes
- Vista cronológica de transacciones
- Exportar datos a JSON
- Importar datos desde JSON
- **Auditoría por usuario**: Ver quién hizo cada cambio

## 🔐 Seguridad

- **🔑 Autenticación obligatoria** con Google para acceder al sistema
- **👥 Lista blanca** de usuarios administradores autorizados
- **📊 Auditoría completa** de todas las transacciones (usuario, timestamp)
- **🛡️ Validación de entrada** en todos los formularios
- **⚡ Prevención de transacciones duplicadas**
- **⏰ Timeout de seguridad** para operaciones
- **🔒 Separación de datos** por usuario autenticado
- **🚫 Acceso restringido** solo para administradores autorizados

## 🚨 Solución de Problemas

### Error de Índices de Firebase
Si encuentras errores de índices, la aplicación está configurada para ordenar los datos localmente y evitar este problema.

### Botones Bloqueados
Si los botones se quedan en "Procesando...", usa el botón "Cancelar Transacción" o recarga la página.

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: Pantallas grandes con layout completo
- **Tablet**: Adaptación automática del contenido
- **Mobile**: Interfaz optimizada para pantallas pequeñas

## 🔄 Versionado

Este proyecto usa Git para control de versiones. Para contribuir:

1. Fork del repositorio
2. Crear rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar.

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación
2. Busca en los issues existentes
3. Abre un nuevo issue con detalles del problema

---

**Desarrollado con ❤️ para la gestión eficiente de mensajeros**
