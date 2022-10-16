window.onscroll = function() {
    var navbar = document.getElementsByClassName('navbar')[0];
  
    if (window.pageYOffset > 100) {
      navbar.style.background = "#fff";
    } else {
      navbar.style.background = "transparent";
    }
  }

  /**
   * Preloader
   */
   const preloader = document.querySelector('#preloader');
   if (preloader) {
     window.addEventListener('load', () => {
       preloader.remove();
     });
   }