alert("hello")


  var a=document.getElementById("button");
  a.addEventListener('click',()=>{

    if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission(function(status) {
          console.log('Notification permission status:', status);
        });
      }
      if ('serviceWorker' in navigator) {
        if (location.protocol !== 'https:') {
          console.warn('Service workers can only be used with HTTPS.');
        } else {
          navigator.serviceWorker.register('/service-worker.js')
          .then(function(registration) {
            console.log('Service worker registered');
          })
          .catch(function(error) {
            console.error('Service worker registration failed:', error);
          });
        }
      }
      self.addEventListener('push', function(event) {
        console.log('Push event received');
        var title = 'Web Push Notification';
        var options = {
          body: event.data.text(),
          icon: '/images/icon.png',
          badge: '/images/badge.png'
        };
        event.waitUntil(self.registration.showNotification(title, options));
      });
    




  });
