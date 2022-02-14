ScrollReveal({ reset: true });
ScrollReveal().reveal('.reveal', {delay: 500});

const themeMap = {
     dark: "light",
     light: "solar",
     solar: "dark"
};

//  accessing local storage to save theme preference   
const theme = localStorage.getItem('theme')
     || (tmp = Object.keys(themeMap)[0],
     localStorage.setItem('theme', tmp),
     tmp);

     
const bodyClass = document.body.classList;

bodyClass.add(theme);


// function to toggle themes by clicking "Themify" button

function toggleTheme() {
     const current = localStorage.getItem('theme');
     const next = themeMap[current];
   
     bodyClass.replace(current, next);
     localStorage.setItem('theme', next);
   }
   
   document.getElementById('themeButton').onclick = toggleTheme;


  