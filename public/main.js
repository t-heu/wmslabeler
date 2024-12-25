/* eslint-env browser */

// Registra o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/wmslabeler/sw.js') // Caminho para o seu arquivo sw.js
      .then(() => {
        console.log('Service Worker registrado com sucesso:');
        // console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(err => {
        console.error('Falha ao registrar o Service Worker:', err);
      });
  });
}
