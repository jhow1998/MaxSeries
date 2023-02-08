

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function(currentSlider){

    const sliderContainer = currentSlider.querySelector("[data-slider-container]");

    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");

    const sliderNexBtn = currentSlider.querySelector("[data-slider-next]");

    const totalsliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));

    const totalSliderItems = sliderContainer.childElementCount - totalsliderVisibleItems;

    let currentSlidePos = 0;

    /* next slide*/ 

    const slideNext = function(){

        currentSlidePos++

        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

        if (currentSlidePos >= totalSliderItems)sliderNexBtn.setAttribute("disabled", "");

        sliderPrevBtn.removeAttribute("disabled");

    }
   

    sliderNexBtn.addEventListener("click",slideNext);

     /* proximo slide*/ 

      const slidePrev = function(){

        currentSlidePos--;

         sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

         if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");

        sliderNexBtn.removeAttribute("disabled");
        

     }

     sliderPrevBtn.addEventListener("click",slidePrev);

     const dontHaveExtraItem = totalSliderItems <=0;

    if(dontHaveExtraItem)sliderNexBtn.setAttribute("disabled","");

     sliderPrevBtn.setAttribute("disabled","");



}

for(let i = 0, len = sliders.length; i< len; i++) { sliderInit(sliders[i]); }

