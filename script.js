const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,index) =>{
	slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide,) =>{
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}


nextButton.addEventListener('click', e =>{
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	const nextSibling = nextSlide.nextElementSibling;
	if(!nextSibling){
		nextButton.style.visibility = 'hidden';

	}
	prevButton.style.visibility='visible';
	moveToSlide(track, currentSlide,nextSlide);
});


prevButton.addEventListener('click', e =>{
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	const prevSibling = prevSlide.previousElementSibling;

	if(!prevSibling){
		prevButton.style.visibility = 'hidden';
	}
	nextButton.style.visibility='visible';
	moveToSlide(track, currentSlide,prevSlide);
});


