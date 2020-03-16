/*Interactive navigations in header block*/
const nav = document.getElementById('nav')

nav.addEventListener('click', e => {
	if (e.target != nav) {
		nav.querySelectorAll('a').forEach(a => a.classList.remove('active'))
		e.target.classList.add('active')
	}
})

/*Interactive phone in slider block*/
const slider = document.getElementById('slider')
const phoneVerticalOn = document.querySelector('.phone_vertical')
const phoneVerticalOff = document.querySelector('.phone_verticalOff')
const phoneGorizontalOn = document.querySelector('.phone_gorizontal')
const phoneGorizontalOff = document.querySelector('.phone_gorizontalOff')

phoneVerticalOn.addEventListener('click', () => {
	phoneVerticalOn.classList.add('hidden')
	phoneVerticalOff.classList.remove('hidden')
})

phoneVerticalOff.addEventListener('click', () => {
	phoneVerticalOff.classList.add('hidden')
	phoneVerticalOn.classList.remove('hidden')
})

phoneGorizontalOn.addEventListener('click', () => {
	phoneGorizontalOn.classList.add('hidden')
	phoneGorizontalOff.classList.remove('hidden')
})

phoneGorizontalOff.addEventListener('click', () => {
	phoneGorizontalOff.classList.add('hidden')
	phoneGorizontalOn.classList.remove('hidden')
})


/*Active border images of gallery*/
const img = document.getElementById('images')

img.addEventListener('click', e => {
	if (e.target != img) {
		img.querySelectorAll('img').forEach(a => a.classList.remove('border_img'))
		e.target.classList.add('border_img')
	}
})


/*
const listingArrow = document.querySelectorAll ('.listing')

listingArrow.forEach('listing' => {
	listing.addEventListener ('click', () => {
		document.getElementById ('slider-inner-blue').classList.toggle('hidden')
	}
	)
})
*/
