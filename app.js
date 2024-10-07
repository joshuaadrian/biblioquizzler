const form = document.querySelector('#form-survey');
const next = document.querySelector('#form-next');
const submit = document.querySelector('#form-submit');
const tabs = document.querySelector('#form-tabs');
const pal = document.querySelector('#form-pal');
const palImage = document.querySelector('#form-pal-image');
const palCopy = document.querySelector('#form-pal-copy');
const palTitle = document.querySelector('#form-pal-title');
const palDescription = document.querySelector('#form-pal-description');
const gift = document.querySelector('#form-gift');
const progress = document.querySelectorAll('#form-progress span');
const inputs = document.querySelectorAll('.form-check-input');

// Bat - 
// I’m Polly Nator Bee.  
// I’m Pip Ladybug.  
// I’m Papillon Butterfly.  
// I’m Phineas Fly.  
// Hummingbird - 
// I’m Pablo Moth.  
// I’m Petunia Snail.  
// I’m Phlox Wasp.  

let pals = {
	'bat' : {
		'title' : 'You most identify with a Bat',
		'description' : 'I’m a very important pollinator in desert and tropical climates.  I love the insects and the nectar that I find in flowers, and I’m wild about banana trees.  In addition to banana trees, mangoes, guavas and agave also depend on me for pollination.  Sometimes I even stumble upon and hummingbird feeder and drain it before the birds wake up.  You know what they say: the early bat gets the sweets!',
		'image' : 'bat.png'
	},
	'bee' : {
		'title' : 'You most identify with a Bee',
		'description' : 'Scientists would say that bees are flying insects that collect pollen and nectar, but I’m a lot more than that.  For instance, did you know I have four wings?  The front and back wings hook together when I fly for maximum lift.  Now that’s efficient!  I’m fast, too, flying up to 15 mph.  Don’t try to outrun me!  Do you want to know a secret?  Everyone loves me for my honey, but only about 100 out of 20,000 species of bees make honey at all.  We’re the world’s most important pollinators, so look past the honey and love me for bee-ing me!',
		'image' : 'bee.png'
	},
	'butterfly' : {
		'title' : 'You most identify with a Butterfly',
		'description' : 'There are almost 20,000 species of butterflies in the world, and each of us is special.  A birdwing is huge, with a wingspan almost a foot across.  Butterflies’ mesmerizing patterns are made up of tiny scales.  Our patterns are often shaped like large, staring eyes, which scare off birds and other predators.  Other butterflies, like the glasswing, have few scales, which makes their semi-transparent wings almost invisible to bad guys.  Pretty clever either way!',
		'image' : 'butterfly.png'
	},
	'ladybug' : {
		'title' : 'You most identify with a Ladybug',
		'description' : 'Did you know that I hibernate through the winter like a bear?  When I wake up I’m ready to eat up to 5,000 aphids until fall rolls around again.  Predators like birds should know better than to eat me.  If someone tries, I’ll ooze a nasty liquid from my leg joints and ruin their appetite.  My most famous outfit sports seven spots, but some of my sisters have up to 22 spots, three stripes or a distinctive M design.',
		'image' : 'ladybug.png'
	},
	'wasp' : {
		'title' : 'You most identify with a Wasp',
		'description' : 'Don’t confuse me with a bee.  I’m much slimmer, and I have a smooth, shiny body without hair, but I’m not vain about it.  Those poor little bees can only sting once, but I can sting as many times as needed, so watch out!   We live in smaller colonies than bees, hibernate over the winter, and build a new nest each fall.  Some of us–the yellow jackets–love sugar, so don’t blame us if we come for your soda or perfume; it’s just too tempting!',
		'image' : 'wasp.png'
	},
	'moth' : {
		'title' : 'You most identify with a Moth',
		'description' : 'Butterflies may be flashy attention-seekers, but moths are just as important and just as cool, even when they go unnoticed.  Some of us are so small we can hardly be seen.  Pygmy leaf miners are only 25 mm across!  Sometimes we have to get sneaky to stay safe.  The Spanish moon moth has a long tail that interferes with echolocation by hungry bats and gives the moth extra time to fly away.  We don’t need a butterfly’s loud colors to attract each other.  Our feathery antennae can pick up chemical signals from potential mates up to 20 miles away!',
		'image' : 'moth.png'
	},
	'hummingbird' : {
		'title' : 'You most identify with a Hummingbird',
		'description' : 'In addition to astounding the humans with our grace and beauty, we hummingbirds are critical for wildflower pollination.  I especially love bright red, orange and yellow flowers.  The fragrance doesn’t matter, as I can’t smell much anyway.  I weigh hardly more than a penny but have to consume more than my weight in pollen every day!  That’s just what it takes to keep my heart pumping 1,200 times per minute and wings beating seventy times each second.  You must be exhausted just reading about it!',
		'image' : 'hummingbird.png'
	},
	'fly' : {
		'title' : 'You most identify with a Fly',
		'description' : 'Bees may get most of the credit in the pollinator world, but we flies are just as important.  In fact, flies may out-pollinate bees in the early spring because we’re active at lower temperatures.  We zip from flower to flower and transport pollen on our bodies as we go.  The worse a flower smells to people, the more delicious it is to me.  One of my favorite meals comes from a skunky trillium that humans call Stinking-Benjamin.',
		'image' : 'fly.png'
	},
	'beetle' : {
		'title' : 'You most identify with a Beetle',
		'description' : 'Ut sed et ut sed. Alias quod omnis reiciendis at quam quas et cumque amet rerum.',
		'image' : 'fly.png'
	},
	'snail' : {
		'title' : 'You most identify with a Snail',
		'description' : 'Let’s be clear: I’m not a bug, but I’m still a pollinator.  Some humans don’t realize that I’m attracted to the sweet nectar of flowers, too.  As I visit each blossom, pollen sticks to me and travels to the next plant, allowing reproduction.  I’m especially helpful because I like working at night and on rainy days when my other pollinator friends are less active.  On a very rainy day I might pollinate even more flowers than bees!  Snail pollination is so special that it has its own fancy name: malacophily.  Say that ten times fast, and remember: It’s not just the birds and the bees–let’s hear it for the snails!',
		'image' : 'snail.png'
	}
};

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

		if ( next.dataset.current >= 8 ) {
			next.style.display = 'none';
			submit.style.display = 'block';
			gift.classList.add('is-showing');
		} else {
			next.dataset.current = parseInt(next.dataset.current) + 1;
			next.disabled = true;
		}
		
	});
}

let whichPal = function() {

	let data = new FormData(form);
	let arr = [];

	console.log(data);

	data.forEach(function(value) {
	  arr.push(value);
	});

	obj = {};
	let el,
    max = 0;
	for (let i = 0; i < arr.length; i++) {
    	if (!obj[arr[i]]) obj[arr[i]] = 1;
    	else obj[arr[i]]++;
	}

	for (const i in obj) {
	    if (max < obj[i]) {
	        max = obj[i];
	        el = i;
	    }
	}

	return el;

};

if (gift) {
	gift.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let selectedPal = whichPal();

		gift.classList.add('revealed');
		palImage.setAttribute('src',pals[selectedPal].image);
		palTitle.innerHTML = pals[selectedPal].title;
		palDescription.innerHTML = pals[selectedPal].description;
		pal.classList.add('revealed');
		submit.disabled = true;
	});
}


if (submit) {
	submit.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		let selectedPal = whichPal();

		gift.classList.add('revealed');
		palImage.setAttribute('src',pals[selectedPal].image);
		palTitle.innerHTML = pals[selectedPal].title;
		palDescription.innerHTML = pals[selectedPal].description;
		pal.classList.add('revealed');
		submit.disabled = true;
	});
}

if (inputs?.length > 0) {

    inputs.forEach((input, i) => {
      input.addEventListener('change', (e) => {
      	next.disabled = false;
      });
    });

}