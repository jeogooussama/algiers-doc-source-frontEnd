    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyC9ba11sRbAn_VgVuzh229WgnEnJnxEN4M",
      authDomain: "algeridocs.firebaseapp.com",
      projectId: "algeridocs",
      storageBucket: "algeridocs.appspot.com",
      messagingSenderId: "51794404050",
      appId: "1:51794404050:web:7879ebe5ea68c8961f430b",
      measurementId: "G-MJKLWD2965"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);