const form = document.querySelector('#form-survey');
const next = document.querySelector('#form-next');
const submit = document.querySelector('#form-submit');
const reset = document.querySelector('#form-reset');
const tabs = document.querySelector('#form-tabs');
const pal = document.querySelector('#form-pal');
const palImage = document.querySelector('#form-pal-image');
const palCopy = document.querySelector('#form-pal-copy');
const palTitle = document.querySelector('#form-pal-title');
const palDescription = document.querySelector('#form-pal-description');
const gift = document.querySelector('#form-gift');
const progress = document.querySelectorAll('#form-progress span');
const inputs = document.querySelectorAll('.form-check-input');
const textInputs = document.querySelectorAll('.form-text-input');

// Bat - 
// I’m Polly Nator Bee.  
// I’m Pip Ladybug.  
// I’m Papillon Butterfly.  
// I’m Phineas Fly.  
// Hummingbird - 
// I’m Pablo Moth.  
// I’m Petunia Snail.  
// I’m Phlox Wasp.  

let traitsArray = [];

traitsArray['questionone'] = 'Your sidekick is a(n) ';
traitsArray['questiontwo'] = 'with characteristics of being ';
traitsArray['questionthree'] = 'and the superpower of ';
traitsArray['questionfour'] = 'with a secondary superpower of ';
traitsArray['questionfive'] = 'and the epic name of ';

let beeCount = 0;
let butterflyCount = 0;
let mothCount = 0;

if (next) {
	next.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		let current = next.dataset.current;
		let percent = -100 * current;
		tabs.style.transform = 'translateX('+percent+'%)';
		progress[current-1].classList.add('answered');

		if ( next.dataset.current >= 5 ) {
			next.style.display = 'none';
			submit.style.display = 'block';
			gift.classList.add('is-showing');
		} else {
			next.dataset.current = parseInt(next.dataset.current) + 1;
			next.disabled = true;
		}
		
	});
}

let sidekickTraits = function() {

	let data = new FormData(form);
	let arr = [];
	let description = '';

	data.forEach(function(item, index) {
		console.log(index);
		description += traitsArray[index] + '<strong>' + item + '</strong> ';
	});

	description = '<h2>'+description +'!</h2>';

	return description;

};

if (gift) {
	gift.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let traits = sidekickTraits();

		gift.classList.add('revealed');
		palCopy.innerHTML = traits;
		pal.classList.add('revealed');
		submit.disabled = true;
		submit.classList.add('is-hiding');
		reset.classList.add('is-showing');
	});
}
if (reset) {

	reset.addEventListener('click', (e) => {
		window.location.replace("https://biblioquizzler.net/superpowered"); 
	});

}

if (submit) {

	submit.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let traits = sidekickTraits();

		gift.classList.add('revealed');
		palCopy.innerHTML = traits;
		pal.classList.add('revealed');
		submit.disabled = true;
		submit.classList.add('is-hiding');
		reset.classList.add('is-showing');
	});

}

if (inputs?.length > 0) {

    inputs.forEach((input, i) => {
      input.addEventListener('change', (e) => {
      	next.disabled = false;
      });
    });

}

if (textInputs?.length > 0) {

    textInputs.forEach((input, i) => {
      input.addEventListener('keyup', (e) => {
      	if ( e.target.value ) {
      		next.disabled = false;
      	}
      });
    });

}