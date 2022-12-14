/* eslint-disable*/

import { register } from 'register-service-worker'
import Swal from 'sweetalert2'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      Swal.fire({
        toast: true,
        icon: 'warning',
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        title: 'Baixando atualizações...'
      });
    },
    updated (registration) {
      Swal.fire({
        toast: true,
        icon: 'warning',
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        title: 'Atualizando...'
      }).finally(() => {
        const worker = registration.waiting;
        worker!.postMessage({ action: "SKIP_WAITING" });
        window.location.reload();
      });
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}