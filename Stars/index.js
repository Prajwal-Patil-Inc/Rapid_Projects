const url = 'https://stars-by-api-ninjas.p.rapidapi.com/v1/stars?name=polaris';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '18e7142935msh300407594275d15p1de239jsnbeeb7841dd08',
		'X-RapidAPI-Host': 'stars-by-api-ninjas.p.rapidapi.com'
	}
};

const stars = (star_name) => {
	//star_names.innerHTML = star_name; 
	fetch(
		"https://stars-by-api-ninjas.p.rapidapi.com/v1/stars?name=" + star_name , options
	  )
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
		//console.log(response[0].name);
		star_names.innerHTML = response[0].name;
		constellatn.innerHTML = response[0].constellation;
		abs_magnitude.innerHTML = response[0].absolute_magnitude;
		app_magnitude.innerHTML = response[0].apparent_magnitude;
		declin.innerHTML = response[0].declination;
		dist_ligh_year.innerHTML = response[0].distance_light_year;
		right_asc.innerHTML = response[0].right_ascension;
		spect_class.innerHTML = response[0].spectral_class;
	  })	
	  .catch((err) => console.error(err));
};

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	console.log("somthing clicked");
	stars(star_name.value);
})

