function lightmode() {
      document.documentElement.setAttribute('data-bs-theme', 'light')
}

$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });

function darkmode () {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
}

// console.log(window)
// console.log(document)
// console.log(document.body)
// console.log(document.head)

// ---------------------------------
// SETTING ATTRIBUTES
// ---------------------------------

var textbox = document.querySelector("#setattribute > ul > li:nth-child(1)")

function changeText(obj) {
      obj.style.color = "red"
      obj.style.fontFamily = "monospace"
}

function undochangeText(obj) {
      obj.removeAttribute("style")
}

var listEls = document.querySelectorAll("li")

function changeallLI() {
      listEls.forEach(element => {
            element.setAttribute("style","color: yellow; text-decoration: underline;")
      });
}

function undochangeallLI() {
      listEls.forEach(element => {
            element.removeAttribute("style")
      });
}

function changeimagefunct () {
      document.querySelector("#setattribute > ul > li:nth-child(4) > div > img").setAttribute("src", "https://media1.tenor.com/m/tUcFGAJimf0AAAAC/yuji-itadori-jujutsu-kaisen.gif;")
}

// ---------------------------------
// CREATE APPENDS
// ---------------------------------

function addele() {
      var ele = document.createElement("li")
      ele.textContent = "This text was created and added to the DOM by JS."
      ele.setAttribute("style", "color: yellow;")
      ele.setAttribute("id", "createdelement")
      document.querySelector("#createappends > ul").appendChild(ele)
}


function undoaddele() {
      var parent = document.querySelector("#createappends > ul")
      var child = document.querySelector("#createdelement")
      parent.removeChild(child)
}

// ---------------------------------
// SET INTERVAL + TIMER
// ---------------------------------

function timesUp() {
      alert("Timer is complete.")
      timerbutton.textContent = "Demo code"
}

var timerbutton = document.querySelector("#timerinterval > ul > li:nth-child(2) > button")

function stintvaltimer() {
      var secondsLeft = parseInt(prompt("How long do you want the timer to go for (in seconds)?"))
      if (isNaN(secondsLeft)){
            alert("Please enter a number.")
      } else {
            var timerInterval = setInterval(function(){
                  secondsLeft--;
                  timerbutton.textContent = `${secondsLeft} seconds left until timer is up.`;
      
                  if (secondsLeft === 0) {
                        clearInterval(timerInterval);
                        timesUp();
                  }
            }, 1000);
      }
}


// ---------------------------------
// EVENT LISTENERS
// ---------------------------------

var evListenerObj = document.querySelector("#eventlisteners > ul > li:nth-child(3) > div.d-flex.justify-content-start.p-2 > div")

evListenerObj.addEventListener("mouseover", function(event) {
      alert("Hey :)")
})

var pikahoverEl = document.querySelector("#eventlisteners > ul > li:nth-child(3) > div.code.block.m-2")
var pikaparentEl = document.querySelector("#eventlisteners > ul > li:nth-child(3) > div.d-flex.justify-content-start.p-2")

function pikaadd() {
      if (pikaparentEl.children.length > 7) {
            alert("Too many Pikachus sorry :(")
      } else {
            var pikaEl = document.createElement("img")
            pikaEl.setAttribute("id", "newPikachu")
            pikaEl.setAttribute("height", "25px")
            pikaEl.setAttribute("src", "./assets/dar1q9p-59242fd1-b9e2-40b3-a933-d543fb394eed.gif")
            pikaparentEl.appendChild(pikaEl)
      }
}

pikahoverEl.addEventListener("click", pikaadd)

var changekeybevent = document.querySelector("#changekeybevent");
var ckbParent = document.querySelector("#keyboardevents > ul > li");
var ckbChild = document.querySelector("#keyboardevents > ul > li > p");
var newText;

changekeybevent.addEventListener("change", function(event){
      event.preventDefault();
      newtext = changekeybevent.value;
      ckbChild.style.color = newtext
})

var keydownevent = document.querySelector("#whatdausertypin")
var textareakeydownevent = document.querySelector("#keydownevent") 

textareakeydownevent.addEventListener("keydown", function(event){
      var key = event.key.toLowerCase()
      var alphanumericchars = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("")
      if (alphanumericchars.includes(key)) {
            keydownevent.textContent += event.key
      }
})

function btnClearText() {
      textareakeydownevent.value = ""
      keydownevent.textContent = "";      
}

function outerbubblebox() {
      document.querySelector("#outerbubblebox").style.background = "red" 
}

function middlebubblebox() {
      document.querySelector("#middlebubblebox").style.background = "cyan"
}

function innerbubblebox() {
      document.querySelector("#innerbubblebox").style.background = "green"
}

document.querySelector("#outerbubblebox").addEventListener("click", outerbubblebox)
document.querySelector("#middlebubblebox").addEventListener("click", middlebubblebox)
document.querySelector("#innerbubblebox").addEventListener("click", innerbubblebox)

function clearbubbleboxstyles(){
      document.querySelector("#outerbubblebox").removeAttribute("style")
      document.querySelector("#middlebubblebox").removeAttribute("style")
      document.querySelector("#innerbubblebox").removeAttribute("style")
}

function outerbubbleboxNOBUB(event) {
      event.stopPropagation()
      document.querySelector("#outerbubblebox").style.background = "red" 
}

function middlebubbleboxNOBUB(event) {
      event.stopPropagation()
      document.querySelector("#middlebubblebox").style.background = "cyan"
}

function innerbubbleboxNOBUB(event) {
      event.stopPropagation()
      document.querySelector("#innerbubblebox").style.background = "green"
}

function bubblingOff(){
      // event.stopPropagation on
      document.querySelector("#outerbubblebox").removeEventListener("click", outerbubblebox)
      document.querySelector("#middlebubblebox").removeEventListener("click", middlebubblebox)
      document.querySelector("#innerbubblebox").removeEventListener("click", innerbubblebox)

      document.querySelector("#outerbubblebox").addEventListener("click", outerbubbleboxNOBUB)
      document.querySelector("#middlebubblebox").addEventListener("click", middlebubbleboxNOBUB)
      document.querySelector("#innerbubblebox").addEventListener("click", innerbubbleboxNOBUB)

      // button appearances
      $("#bubblingon").removeClass("btn-outline-light")
      $("#bubblingon").removeClass("btn-light")
      $("#bubblingon").addClass("btn-outline-secondary")
      $("#bubblingoff").removeClass("btn-outline-secondary")
      $("#bubblingoff").addClass("btn-light")
}

function bubblingOn(){
      // event.stopPropagation off
      document.querySelector("#outerbubblebox").removeEventListener("click", outerbubbleboxNOBUB)
      document.querySelector("#middlebubblebox").removeEventListener("click", middlebubbleboxNOBUB)
      document.querySelector("#innerbubblebox").removeEventListener("click", innerbubbleboxNOBUB)
      
      document.querySelector("#outerbubblebox").addEventListener("click", outerbubblebox)
      document.querySelector("#middlebubblebox").addEventListener("click", middlebubblebox)
      document.querySelector("#innerbubblebox").addEventListener("click", innerbubblebox)
      
      // button appearances
      $("#bubblingon").removeClass("btn-outline-light")
      $("#bubblingoff").removeClass("btn-light")
      $("#bubblingoff").addClass("btn-outline-secondary")
      $("#bubblingon").removeClass("btn-outline-secondary")
      $("#bubblingon").addClass("btn-light")

}



// ---------------------------------
// DATA ATTRIBUTES
// ---------------------------------


var DAimgdemoEl = document.querySelector("#DAimgdemo")
var DAimgState = DAimgdemoEl.getAttribute("data-state")

function DAimgclick() {
      if (DAimgState === "gif1") {
            DAimgdemoEl.setAttribute("src", DAimgdemoEl.dataset.gif2);
            DAimgState = "gif2";
      } else if (DAimgState === "gif2") {
            DAimgdemoEl.setAttribute("src", DAimgdemoEl.dataset.gif1);
            DAimgState = "gif1";
      }
}

document.querySelector("#DAimgdemo").addEventListener("click", DAimgclick)

// ---------------------------------
// LOCAL STORAGE
// ---------------------------------

var counterEl = document.querySelector("#lscount")
var count = localStorage.getItem("count")
if (count) {counterEl.textContent= count} 
//null (which is count before any data is in local storage) equates to false, so the default HTML text appears here.

function LSadd(){
      count ++
      counterEl.textContent= count
      localStorage.setItem("count", count)
}

function LSminus(){
      count --
      counterEl.textContent= count
      localStorage.setItem("count", count)
}

function LSremove(){
      count = 0
      localStorage.removeItem("count")
      counterEl.textContent= "Counter"
      console.log(`After .removeItem() the value is still ${count}`)
}

// ---------------------------------
// JQUERY
// ---------------------------------

function jqueryaddele() {
      var placeToAddTheNewElement = $("#jqueryaddhere");
      var newBulletPoint = $("<li>");
      newBulletPoint.text("This element was created with jQuery.");
      newBulletPoint.css("color", "yellow");
      newBulletPoint.attr("id", "jqueryaddedelement");
      placeToAddTheNewElement.append(newBulletPoint)
}

function jqueryundoaddele() {
      var jqueryParentEl = $("#jqueryaddhere");
      var jqueryChildEl = $("#jqueryaddedelement");
      jqueryChildEl.remove()
}

function handleFormSubmit(){
      var checkedEl = $("input:checked")
      var selected = []
      $.each(checkedEl, function(){
            selected.push($(this).val());
            console.log(selected)
      })
      $("#checkboxes").text(`Fruits: ${selected.join(", ")}`)
      $("input[type='checkbox']").prop("checked", false)
}

$("#submit").on("click", handleFormSubmit)

// ---------------------------------
// JQUERY FORMS
// ---------------------------------

var formEl = $("#jquerytypetext")
var textfield = $("#textfield")
var putItemshere = $("#jquerytextformlist")

function typetextformSubmit(event) {
      event.preventDefault();
      var newItem = (textfield.val());
      textfield.val("");

      if (!newItem) {return;} // Prevents blank text from being entered.

      var newItemEl = $("<li>");
      newItemEl.text(newItem);
      newItemEl.addClass("toremove")
      putItemshere.append(newItemEl);
}

formEl.on("submit", typetextformSubmit)

function cleartypetextformList(){
      var removethis = $(".toremove");
      removethis.remove();
}

// ---------------------------------
// JQUERY DOM
// ---------------------------------
var jqueryDOMsect = $("#jquerydom")
// console.log(jqueryDOMsect.children())

function jqueryDOMex(){
      jqueryDOMsect.children().children().eq(1).addClass("yellowtext")
}

function undojqueryDOMex() {
      jqueryDOMsect.children().children().eq(1).removeClass("yellowtext")
}

// ---------------------------------
// JQUERY EVENT DELEGATION
// ---------------------------------

var EDparentEl = $("#eventdel")
var DelItemBtn = $("#removeline")

function EventDelegation() {
      var EDchildEl = $("<ul>")
      EDchildEl.append(`
      <li>
            <div class="col-8 d-flex align-items-center justify-content-between my-2" id="removeline">
                  <span class="comment">This is a new line, created with jQuery.</span>
                  <button class='btn btn-outline-danger btn-sm delete-item-btn px-1 py-0'><span class="comment">Remove</span></button>
            </div>
      </li>    
      `)
      EDparentEl.append(EDchildEl)
}

function removeBtnDefault() {
      var listItem = $(this).parent().parent()
      listItem.remove()
}

function removeBtnED() {
      var listItem = $(this).parent().parent()
      listItem.remove()
}

var EDonBtn = $("#EDon")
var EDoffBtn = $("#EDoff")

function JQEDon () {
      DelItemBtn.off("click", removeBtnDefault)
      EDparentEl.on("click", ".delete-item-btn", removeBtnED)
      // The lines below are relating to the appearance of the button
      EDonBtn.removeClass("btn-outline-light")
      EDoffBtn.removeClass("btn-light")
      EDoffBtn.addClass("btn-outline-secondary")
      EDonBtn.removeClass("btn-outline-secondary")
      EDonBtn.addClass("btn-light")
}

function JQEDoff () {
      DelItemBtn.on("click", removeBtnDefault)
      EDparentEl.off("click", ".delete-item-btn", removeBtnED)
      // The lines below are relating to the appearance of the button
      EDonBtn.removeClass("btn-outline-light")
      EDonBtn.removeClass("btn-light")
      EDonBtn.addClass("btn-outline-secondary")
      EDoffBtn.removeClass("btn-outline-secondary")
      EDoffBtn.addClass("btn-light")
}


EDparentEl.on("click", ".delete-item-btn", removeBtnED)
DelItemBtn.on("click", removeBtnDefault)


// ---------------------------------
// JQUERY UI
// ---------------------------------

$( "#datepicker" ).datepicker();
$( "#sortable" ).sortable();

// ---------------------------------
// DAY.JS
// ---------------------------------

var today = dayjs() 
$("#rightnow").text(today.format(`[The time is] HH:mm [and the date is] DD-MM-YYYY`))


var changeThisEl = $("#changeformatdayjs")

changeThisEl.text(today.format("DD/MM/YYYY"))

function changeformat() {
      changeThisEl.text(today.format("dddd DD MMMM YYYY"))
}

function undochangeformat() {
      changeThisEl.text(today.format("DD/MM/YYYY"))
}

$("#firstdiff").text(`// Returns ${dayjs().diff(dayjs("2024-01-01"), "days")} days.`)
$("#secondiff").text(`// Returns ${dayjs().diff(dayjs("2023-06-31"), "weeks", true)} weeks.`)

// ---------------------------------
// SERVER APIS
// ---------------------------------

// taken from https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
var PokeColours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};
// full credit to https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3

var pokeform = $("#pokeform")
var pokeinput = $("#pokeinput")
var pokearea = $("#pokearea")
var pokename = $("#pokename")
var pokeimg = $("#pokeimg")

var pokemove1 = $("#move1")
var pokemove2 = $("#move2")
var pokemove3 = $("#move3")
var pokemove4 = $("#move4")
var poketype1 = $("#type1")
var poketype2 = $("#type2")

var move1type = ""
var pokemove1bgcolour = ""
var move2type = ""
var pokemove2bgcolour = ""
var move3type = ""
var pokemove3bgcolour = ""
var move4type = ""
var pokemove4bgcolour = ""

var poketype1bgcolour = ""
var poketype2bgcolour = ""

function pokesearch(event){
      event.preventDefault();

      var searchquery = (pokeinput.val());
      pokeinput.val("");
      
      if (!searchquery) {return;} 
            
      var queryURL = "https://pokeapi.co/api/v2/pokemon/" + searchquery + "/"
      
      fetch(queryURL)
            .then(function (response) {
                  return response.json();
            }).then(function (data){
                  pokename.text(data.species.name)
                  pokeimg.attr("src", data.sprites.front_default)
                  var moveset = data.moves
                  
                  var move1 = moveset[Math.floor(Math.random()*moveset.length)].move.name
                  pokemove1.text(move1)
                  fetch("https://pokeapi.co/api/v2/move/" + move1)
                        .then(function (response) {
                              return response.json();
                        }).then(function (data){
                              move1type = data.type.name
                              for (const key in PokeColours) {
                                    if (Object.hasOwnProperty.call(PokeColours, key)) {
                                          var colortypeType = PokeColours[key];
                                          if (colortypeType = move1type) {
                                                var pokemove1bgcolour = PokeColours[colortypeType]
                                                pokemove1.css("background-color", JSON.stringify(pokemove1bgcolour))
                                          }
                                    }
                              }
                        })

                  var move2 = moveset[Math.floor(Math.random()*moveset.length)].move.name
                  pokemove2.text(move2)
                  fetch("https://pokeapi.co/api/v2/move/" + move2)
                        .then(function (response) {
                              return response.json();
                        }).then(function (data){
                              move2type = data.type.name
                              for (const key in PokeColours) {
                                    if (Object.hasOwnProperty.call(PokeColours, key)) {
                                          var colortypeType = PokeColours[key];
                                          if (colortypeType = move2type) {
                                                var pokemove2bgcolour = PokeColours[colortypeType]
                                                pokemove2.css("background-color", JSON.stringify(pokemove2bgcolour))
                                          }
                                    }
                              }
                        })

                  
                  var move3 = moveset[Math.floor(Math.random()*moveset.length)].move.name
                  pokemove3.text(move3)
                  fetch("https://pokeapi.co/api/v2/move/" + move3)
                        .then(function (response) {
                              return response.json();
                        }).then(function (data){
                              move3type = data.type.name
                              for (const key in PokeColours) {
                                    if (Object.hasOwnProperty.call(PokeColours, key)) {
                                          var colortypeType = PokeColours[key];
                                          if (colortypeType = move3type) {
                                                var pokemove3bgcolour = PokeColours[colortypeType]
                                                pokemove3.css("background-color", JSON.stringify(pokemove3bgcolour))
                                          }
                                    }
                              }
                        })

                  var move4 = moveset[Math.floor(Math.random()*moveset.length)].move.name
                  pokemove4.text(move4)
                  fetch("https://pokeapi.co/api/v2/move/" + move4)
                        .then(function (response) {
                              return response.json();
                        }).then(function (data){
                              move4type = data.type.name
                              for (const key in PokeColours) {
                                    if (Object.hasOwnProperty.call(PokeColours, key)) {
                                          var colortypeType = PokeColours[key];
                                          if (colortypeType = move4type) {
                                                var pokemove4bgcolour = PokeColours[colortypeType]
                                                pokemove4.css("background-color", JSON.stringify(pokemove4bgcolour))
                                          }
                                    }
                              }
                        })

                  var type1 = data.types[0].type.name
                  poketype1.text(type1)
                  for (const key in PokeColours) {
                        if (Object.hasOwnProperty.call(PokeColours, key)) {
                              var colortypeType = PokeColours[key];
                              if (colortypeType = type1) {
                                    var poketype1bgcolour = PokeColours[colortypeType]
                              }
                        }
                  }
                  poketype1.css("background-color", JSON.stringify(poketype1bgcolour))

                  if (data.types.length < 2) {
                        poketype2.text("")
                        poketype2.css("background-color", "")
                  } else {
                        var type2 = data.types[1].type.name
                        poketype2.text(type2)
                        for (const key in PokeColours) {
                              if (Object.hasOwnProperty.call(PokeColours, key)) {
                                    var colortypeType = PokeColours[key];
                                    if (colortypeType = type2) {
                                          var poketype2bgcolour = PokeColours[colortypeType]
                                    }
                              }
                        }
                        poketype2.css("background-color", JSON.stringify(poketype2bgcolour))
                  }
            });
}

pokeform.on("submit", pokesearch)


$("#giphysearch").on("submit", function(event){
      event.preventDefault()
      var GIPHYsearchquery = ($("#gifput").val())
      $("#gifput").val("")
      $("#giphyapi").empty()
      if (!GIPHYsearchquery) {return;} 
      var GIPHYqueryURL = "https://api.giphy.com/v1/gifs/search?api_key=RvXpHrzwL0smnnCVPCor9pLFf7oJyRMC&limit=5&q="
      fetch (GIPHYqueryURL + GIPHYsearchquery)
      .then(function (response){
            return response.json();
      }).then (function (data){
            var gifresults = data.data
            gifresults.forEach(element => {
                  console.log(element)
                  $("#giphyapi").append(`
                  <div class="card me-2 mt-2" style="max-width: 18rem;">
                        <img src="${element.images.original.url}" class="object-fit-cover rounded h-100" alt="${element.images.original.url}">
                  </div>
                  `)
            });
      })
});