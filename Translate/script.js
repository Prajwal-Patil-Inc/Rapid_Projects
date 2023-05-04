const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
const translateMe = async (text) => {
  original.innerHTML = text;
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "18e7142935msh300407594275d15p1de239jsnbeeb7841dd08",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: text,
      target: "mr",
      source: "en",
    }),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response.data.translations[0].translatedText);
      result_txt.innerHTML = response.data.translations[0].translatedText;
    });
};

submit.addEventListener('click', (e)=>{
  e.preventDefault();
	console.log("somthing clicked");
  translateMe(trantext.value);
} )

