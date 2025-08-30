# 🚀 Instrucciones de Despliegue en Firebase

## Requisitos Previos
- Tener una cuenta de Firebase
- Tener Firebase CLI instalado (`npm install -g firebase-tools`)
- Estar logueado en Firebase (`firebase login`)

## Pasos para Desplegar

### 1. Verificar Configuración
Asegúrate de que tu `firebase-config.js` tenga la configuración correcta de tu proyecto.

### 2. Desplegar en Firebase Hosting
```bash
firebase deploy --only hosting
```

### 3. Verificar Despliegue
Después del despliegue, tu aplicación estará disponible en:
`https://llevo-app.web.app`

## Estructura del Proyecto
- `App.html` - Archivo principal de la aplicación
- `styles.css` - Estilos CSS
- `firebase-config.js` - Configuración de Firebase
- `firebase.json` - Configuración de Firebase Hosting
- `.firebaserc` - Identificador del proyecto

## Comandos Útiles

### Desplegar solo hosting
```bash
firebase deploy --only hosting
```

### Desplegar todo
```bash
firebase deploy
```

### Ver estado del proyecto
```bash
firebase projects:list
```

### Abrir en el navegador
```bash
firebase hosting:channel:open
```

## Solución de Problemas

### Error de permisos
Si tienes problemas con las reglas de Firestore, asegúrate de que estén configuradas correctamente en la consola de Firebase.

### Error de configuración
Verifica que el `projectId` en `firebase-config.js` coincida con tu proyecto de Firebase.

