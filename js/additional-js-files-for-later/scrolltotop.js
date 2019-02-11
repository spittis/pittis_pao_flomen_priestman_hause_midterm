var totop = document.querySelector("#totop");


function goup() {
    window.scrollTo(0,0);
    behavior: 'smooth';
  // totop.classList.add("#html");
};


totop.addEventListener ("click", goup, false);