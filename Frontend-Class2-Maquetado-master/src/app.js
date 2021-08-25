window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');
  const searchB = document.querySelector('#searchBar');
  const footerM = document.querySelector('#footerMobile');

  if (window.innerWidth > 375) {
    // Escritorio
    if (window.pageYOffset >= 150) {
      fakeH.style.top = '0px';
      fakeH.style.opacity = '1';
    } else {
      fakeH.style.top = '-75px';
      fakeH.style.opacity = '0';
    }
  } else {
    // Movil
    if (window.pageYOffset >= 50) {
      footerM.classList.remove("hide");
      searchB.classList.add("hide");
    }
    else {
      footerM.classList.add("hide");
      searchB.classList.remove("hide");
    }
  }
}; 
