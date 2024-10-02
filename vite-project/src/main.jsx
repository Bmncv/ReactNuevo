import React from 'react'; // Asegúrate de importar React si estás usando JSX
import ReactDOM from 'react-dom/client'; // Descomentar y corregir esta línea
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
