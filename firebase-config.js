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
// 3. En las reglas de Firestore, usa temporalmente:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /{document=**} {
//          allow read, write: if true;
//        }
//      }
//    }
// 4. Copia la configuración de tu app web
// 5. Reemplaza los valores en firebaseConfig arriba

export { firebaseConfig };
