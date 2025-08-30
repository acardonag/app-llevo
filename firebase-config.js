// Configuración de Firebase para la aplicación Llevo
// IMPORTANTE: Reemplaza estos valores con tu propia configuración de Firebase

const firebaseConfig = {
    apiKey: "AIzaSyCk90QFedwq0li8GJnx0euvURLJEet2L6U",
    authDomain: "llevo-app.firebaseapp.com",
    projectId: "llevo-app",
    storageBucket: "llevo-app.firebasestorage.app",
    messagingSenderId: "559080761871",
    appId: "1:559080761871:web:34e34244943b1e8497517a"
};

// INSTRUCCIONES PARA CONFIGURAR FIREBASE:
// 1. Crea un proyecto en Firebase Console
// 2. Habilita Firestore Database
// 3. Habilita Authentication y configura Google como proveedor
// 4. En las reglas de Firestore, usa:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /{document=**} {
//          allow read, write: if request.auth != null;
//        }
//      }
//    }
// 5. Copia la configuración de tu app web
// 6. Reemplaza los valores en firebaseConfig arriba

// Lista de usuarios administradores autorizados (emails de Google)
const ADMIN_USERS = [
    // Agrega aquí los emails de los usuarios administradores
    // Ejemplo: "admin@tudominio.com"
    "acg1606@gmail.com",
    "ideamossoft@gmail.com",
    "daccortes27@gmail.com"
];

export { firebaseConfig, ADMIN_USERS };
