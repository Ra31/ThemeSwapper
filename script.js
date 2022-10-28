
const sunMoonContainer = document.querySelector('.sun-moon-container');


document.querySelector('.theme-toggle-button').addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    // this toggles between light and dark mode

    // const currentRotation = parserInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    // sunMoonContainer.style.setProperty('--rotation',currentRotation + 180)

})