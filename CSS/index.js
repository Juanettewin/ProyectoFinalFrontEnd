

window.addEventListener('scroll',()=>{
    subrayadoAnimacion('info-personal');

    })
    const subrayadoAnimacion = (valor)=>{
        let animacion = document.getElementById(`subrayado-color-${valor}`)
        let position = animacion.getBoundingClientRect().top;
        let positionback = animacion.getBoundingClientRect().bottom;
        let screen = window.innerHeight/1.5;
        let screen2 = window.innerHeight/5;
        const root = document.querySelector(":root");
        if(position<screen){
            root.style.setProperty(`--animacion-${valor}`, 'subrayado 2s ease both');
            root.style.setProperty(`--animacion-width`, '100%');
        } else {
            root.style.setProperty(`--animacion-${valor}`, 'subrayado-reverse 2s ease both')
        }
        if(positionback<screen2){
            root.style.setProperty(`--animacion-${valor}`, 'subrayado-reverse 2s ease both')
        }
    }
// Efecto subrayado
 