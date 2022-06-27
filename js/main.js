// Dark/Light theme Switcher
const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher =>{
    switcher.addEventListener('click', function(){
        applyTheme(this.dataset.theme);
       localStorage.setItem('theme', this.dataset.theme); 
    });
});

function applyTheme(themeName) {
    let themeUrl = `css/theme-${themeName}.css`;    document.querySelector('[tittle="theme"]').setAttribute('href', themeUrl)

}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
    applyTheme('light');

} else{
    applyTheme(activeTheme);
}

