let iconElement = document.getElementById("icon");
let themeToggle = document.getElementById('theme-icon');
console.log(themeToggle);
if(themeToggle.classList.contains("dark")){
    iconElement.src="./image/sun.jpeg";
    console.log("sun");
}
else{
    iconElement.src="./moon.png";
    console.log("moon");
}
console.log(iconElement);
iconElement.addEventListener('click', function(){
    console.log("test");
    themeToggle.classList.toggle("dark");
    if(themeToggle.classList.contains("dark")){
        iconElement.src="./image/sun.png";
    }
    else{
        iconElement.src="./image/moon.png";
    }
});