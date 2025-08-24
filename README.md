# 🚚 Llevo - Sistema de Gestión de Mensajeros

Sistema web para gestionar mensajeros, registrar servicios y controlar saldos en tiempo real usando Firebase.

## ✨ Características

- **Gestión de Mensajeros**: Agregar, eliminar y gestionar mensajeros
- **Registro de Servicios**: Descontar servicios del saldo del mensajero
- **Recargas**: Agregar saldo a los mensajeros
- **Balance en Tiempo Real**: Cálculo automático del saldo basado en transacciones
- **Historial Completo**: Seguimiento de todos los servicios y recargas
- **Exportar/Importar**: Backup y restauración de datos
- **Interfaz Responsiva**: Diseño moderno y fácil de usar

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Base de Datos**: Firebase Firestore
- **Autenticación**: Firebase Auth (preparado para implementar)
- **Estilos**: CSS personalizado (sin dependencias externas)
- **Fuentes**: Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
Llevo/
├── App.html          # Aplicación principal
├── styles.css        # Estilos CSS personalizados
├── firebase-config.js # Configuración de Firebase
├── .gitignore        # Archivos excluidos de Git
└── README.md         # Documentación del proyecto
```

## 🔧 Configuración

### Prerrequisitos

1. Cuenta de Firebase
2. Proyecto de Firebase con Firestore habilitado
3. Navegador web moderno

### Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd Llevo
   ```

2. **Configurar Firebase**:
   - Editar `firebase-config.js` con tu configuración
   - Habilitar Firestore en tu proyecto de Firebase
   - Configurar reglas de seguridad

3. **Ejecutar la aplicación**:
   - Abrir `App.html` en tu navegador
   - O usar un servidor local

## 📊 Funcionalidades Principales

### Gestión de Mensajeros
- Agregar nuevos mensajeros
- Seleccionar mensajero activo
- Eliminar mensajeros y sus datos

### Transacciones
- **Servicios**: Registrar servicios prestados (descuenta del saldo)
- **Recargas**: Agregar saldo al mensajero
- **Balance**: Cálculo automático: `Saldo = Total Recargas - Total Servicios`

### Historial y Reportes
- Vista cronológica de transacciones
- Exportar datos a JSON
- Importar datos desde JSON

## 🔐 Seguridad

- Validación de entrada en todos los formularios
- Prevención de transacciones duplicadas
- Timeout de seguridad para operaciones
- Separación de datos por usuario (preparado para multi-usuario)

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
