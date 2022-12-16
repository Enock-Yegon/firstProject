const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
//Code for login button
const btn = document.getElementById('btn1');
btn.addEventListener('click', () => {
    document.getElementById("mainFrameOne").style.visibility = "visible";
//   const div = document.getElementById('mainFrameOne');

//   if (div.style.display === 'block') {
//     // 👇️ this SHOWS the form
//     div.style.display = 'none';
//   } else {
//     // 👇️ this HIDES the form
//     div.style.display = 'none';
//   }
});
let infoData = ''
const poster = document.getElementById('poster')
function getAllFilms(){
    return fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => data.forEach(item => displayAllFilms(item)))
  }
  function getFirstFilm(){
    return fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(data => firstFilm(data))
  }
  
  document.addEventListener('DOMContentLoaded',() => {
    getFirstFilm()
    getAllFilms()
  })

//   
  //displaying all available movies
  function displayAllFilms(data){
    const filmPart = document.querySelector('#films');
    const filmFile = document.createElement('li');
    filmFile.setAttribute('class', 'film item');
    filmFile.textContent = data.title;
    filmPart.appendChild(filmFile);
  }
  (function($){
    function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);