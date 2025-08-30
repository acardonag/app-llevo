# 🔐 Configuración de Usuarios Administradores - Llevo

## 📋 Pasos para Configurar la Autenticación

### 1. 🔧 Configurar Firebase Authentication

1. **Ir a Firebase Console** → Tu Proyecto → Authentication
2. **Habilitar Authentication** si no está habilitado
3. **Agregar proveedor Google**:
   - Click en "Sign-in method"
   - Habilitar "Google"
   - Configurar nombre del proyecto y dominio autorizado
   - Guardar cambios

### 2. 📝 Configurar Usuarios Administradores

Editar el archivo `firebase-config.js` y agregar los emails de los usuarios administradores:

```javascript
// Lista de usuarios administradores autorizados (emails de Google)
const ADMIN_USERS = [
    "admin@tudominio.com",
    "gerente@tudominio.com",
    "supervisor@tudominio.com"
    // Agregar más emails según sea necesario
];
```

### 3. 🛡️ Configurar Reglas de Firestore

En Firebase Console → Firestore Database → Rules, usar estas reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. 🚀 Probar la Autenticación

1. **Abrir la aplicación** en el navegador
2. **Ver pantalla de login** con botón "Iniciar Sesión con Google"
3. **Hacer click en el botón** y seleccionar cuenta de Google
4. **Verificar acceso**:
   - ✅ Si el email está en `ADMIN_USERS` → Acceso permitido
   - ❌ Si el email NO está en `ADMIN_USERS` → Acceso denegado

## 🔍 Funcionalidades de Seguridad

### ✅ **Características Implementadas:**
- **Autenticación obligatoria** para acceder a la aplicación
- **Lista blanca** de usuarios administradores
- **Verificación automática** de permisos
- **Auditoría completa** de cambios (quién, cuándo, qué)
- **Sesión persistente** hasta cerrar sesión manualmente

### 📊 **Datos de Auditoría:**
Cada transacción incluye:
- `userId`: ID único del usuario de Firebase
- `userEmail`: Email del usuario que hizo el cambio
- `userName`: Nombre del usuario (si está disponible)
- `date`: Timestamp exacto del cambio

### 🚫 **Acceso Restringido:**
- Solo usuarios en `ADMIN_USERS` pueden acceder
- Usuarios no autorizados son rechazados automáticamente
- Sesión cerrada inmediatamente si no es administrador

## 🛠️ Solución de Problemas

### **Error: "Acceso denegado"**
- Verificar que el email esté en `ADMIN_USERS`
- Verificar que la cuenta de Google esté activa
- Revisar configuración de Firebase Authentication

### **Error: "Firebase no se inicializó"**
- Verificar `firebase-config.js`
- Verificar conexión a internet
- Revisar consola del navegador para errores

### **No aparece botón de login**
- Verificar que Firebase Auth esté habilitado
- Verificar que Google esté configurado como proveedor
- Revisar reglas de Firestore

## 📱 Experiencia del Usuario

### **Primera vez:**
1. Usuario ve pantalla de login
2. Click en "Iniciar Sesión con Google"
3. Selecciona cuenta de Google
4. Sistema verifica permisos
5. Acceso permitido/denegado según configuración

### **Sesiones posteriores:**
- Login automático si la sesión está activa
- Acceso inmediato si es administrador
- Logout manual con botón "Cerrar Sesión"

## 🔄 Mantenimiento

### **Agregar Nuevo Administrador:**
1. Editar `firebase-config.js`
2. Agregar email a `ADMIN_USERS`
3. Hacer commit y push a Git
4. El usuario podrá acceder inmediatamente

### **Remover Administrador:**
1. Editar `firebase-config.js`
2. Remover email de `ADMIN_USERS`
3. Hacer commit y push a Git
4. El usuario perderá acceso en el próximo login

---

**⚠️ IMPORTANTE:** Nunca compartas o subas a Git la lista completa de `ADMIN_USERS` en producción. Considera usar variables de entorno o configuración externa para mayor seguridad.
