let init =()=>{
    let cotainer= document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles=document.getElementsByClassName("jumbo-slider__circle"),
    links= circles=document.getElementsByClassName("jumbo-slider__link"),
    current=1,
    time=6000;

    //Add animation class to slide
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');

    //Update elipsis and links
    let updateNav=()=>{
        console.log(`current: ${current}`)
    }
    updateNav()

    let startSliding=()=>{
        let test=1
        setInterval(()=>{
            test++
          console.log(test)
        },6000);
    }
    startSliding();

}

init();