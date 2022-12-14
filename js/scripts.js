/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

//var
var piplupMoveset;
var feebasMoveset;
var stuffulMoveset;
var cosmogMoveset;

var tableData;

const img2 = document.getElementById("sprite2");
const selectedPokemon = document.getElementById("pokemonSelected");

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

//piplup
$.getJSON("https://pokeapi.co/api/v2/pokemon/piplup", function (piplup) {
  console.log(piplup);
  //load piplup sprite
  var piplupSprite = piplup.sprites.front_default;
  var shinyPiplup = piplup.sprites.front_shiny;

  $(".piplupSprite").attr("src", piplupSprite);
  $(".shinyPiplup").attr("src", shinyPiplup);

  //load moveset data in table
  piplupMoveset = piplup.moves;

  let tableData = "";
  piplupMoveset.map((values) => {
    tableData += ` <tr>
    <td>${values.move.name}</td>
    </tr>`;
  });

  document.getElementById("movesetTable_body").innerHTML = tableData;
});

//piplup evolution
$.getJSON(
  "https://pokeapi.co/api/v2/evolution-chain/205/",
  function (piplupEvo) {
    var evolution = piplupEvo.chain.evolves_to[0].species.name;
    document.getElementById("evolution").innerHTML = evolution;

    var evolution2 = piplupEvo.chain.evolves_to[0].evolves_to[0].species.name;
    document.getElementById("evolution2").innerHTML = evolution2;
  }
);

$.getJSON("https://pokeapi.co/api/v2/pokemon/prinplup", function (prinplup) {
  var prinplupSprite = prinplup.sprites.front_default;

  $(".prinplupSprite").attr("src", prinplupSprite);
});

$.getJSON("https://pokeapi.co/api/v2/pokemon/empoleon", function (empoleon) {
  var empoleonSprite = empoleon.sprites.front_default;

  $(".empoleonSprite").attr("src", empoleonSprite);
});

//piplup location
$.getJSON(
  "https://pokeapi.co/api/v2/pokemon/393/encounters",
  function (piplupLocation) {
    var location = piplupLocation[0].location_area.name;
    console.log(location);

    document.getElementById("location").innerHTML = location;
  }
);

//feebas
$.getJSON("https://pokeapi.co/api/v2/pokemon/feebas", function (feebas) {
  var feebasSprite = feebas.sprites.front_default;

  $(".feebasSprite").attr("src", feebasSprite);
});

//stufful
$.getJSON("https://pokeapi.co/api/v2/pokemon/stufful", function (stufful) {
  var stuffulSprite = stufful.sprites.front_default;

  $(".stuffulSprite").attr("src", stuffulSprite);
});

//cosmog
$.getJSON("https://pokeapi.co/api/v2/pokemon/cosmog", function (cosmog) {
  var cosmogSprite = cosmog.sprites.front_default;

  $(".cosmogSprite").attr("src", cosmogSprite);
});

//btn stat events
function loadPiplup() {
  $.getJSON("https://pokeapi.co/api/v2/pokemon/piplup", function (piplup) {
    selectedPokemon.innerHTML = "Piplup";

    document.getElementById("shinyIcon").style.opacity = 0;
    document.getElementById("location").style.opacity = 0;
    document.getElementById("movesetScroll").style.opacity = 0;
    document.getElementById("wrapper").style.opacity = 0;

    console.log(piplup);
    //load piplup sprite
    var piplupSprite = piplup.sprites.front_default;
    var shinyPiplup = piplup.sprites.front_shiny;

    $(".piplupSprite").attr("src", piplupSprite);
    $(".shinyPiplup").attr("src", shinyPiplup);

    $("#shinyIcon").fadeTo("slow", 1);
    $("#location").fadeTo("slow", 1);
    $("#movesetScroll").fadeTo("slow", 1);
    $("#wrapper").fadeTo("slow", 1);

    //load moveset data in table
    piplupMoveset = piplup.moves;

    let tableData = "";
    piplupMoveset.map((values) => {
      tableData += ` <tr>
    <td>${values.move.name}</td>
    </tr>`;
    });

    document.getElementById("movesetTable_body").innerHTML = tableData;
  });

  //piplup evolution
  $.getJSON(
    "https://pokeapi.co/api/v2/evolution-chain/205/",
    function (piplupEvo) {
      var evolution = piplupEvo.chain.evolves_to[0].species.name;
      document.getElementById("evolution").innerHTML = evolution;

      var evolution2 = piplupEvo.chain.evolves_to[0].evolves_to[0].species.name;
      document.getElementById("evolution2").innerHTML = evolution2;
    }
  );

  $.getJSON("https://pokeapi.co/api/v2/pokemon/prinplup", function (prinplup) {
    var prinplupSprite = prinplup.sprites.front_default;

    $(".prinplupSprite").attr("src", prinplupSprite);
  });

  $.getJSON("https://pokeapi.co/api/v2/pokemon/empoleon", function (empoleon) {
    var empoleonSprite = empoleon.sprites.front_default;

    $(".empoleonSprite").attr("src", empoleonSprite);
  });

  //piplup location
  $.getJSON(
    "https://pokeapi.co/api/v2/pokemon/393/encounters",
    function (piplupLocation) {
      var location = piplupLocation[0].location_area.name;
      console.log(location);

      document.getElementById("location").innerHTML = location;
    }
  );
}

function loadFeebas() {
  $.getJSON("https://pokeapi.co/api/v2/pokemon/feebas", function (feebas) {
    selectedPokemon.innerHTML = "Feebas";

    document.getElementById("shinyIcon").style.opacity = 0;
    document.getElementById("location").style.opacity = 0;
    document.getElementById("movesetScroll").style.opacity = 0;
    document.getElementById("wrapper").style.opacity = 0;

    //shiny feebas sprite
    var shinyFeebas = feebas.sprites.front_shiny;
    $(".shinyPiplup").attr("src", shinyFeebas);

    $("#shinyIcon").fadeTo("slow", 1);
    $("#location").fadeTo("slow", 1);
    $("#movesetScroll").fadeTo("slow", 1);
    $("#wrapper").fadeTo("slow", 1);

    //load moveset data in table
    feebasMoveset = feebas.moves;

    let tableData = "";
    feebasMoveset.map((values) => {
      tableData += ` <tr>
      <td>${values.move.name}</td>
      </tr>`;
    });

    document.getElementById("movesetTable_body").innerHTML = tableData;

    //feebas evolution
    $.getJSON(
      "https://pokeapi.co/api/v2/evolution-chain/178/",
      function (feebasEvo) {
        var evolution = feebasEvo.chain.evolves_to[0].species.name;
        document.getElementById("evolution").innerHTML = evolution;
        document.getElementById("evolution2").innerHTML = "";
        img2.setAttribute("src", "");
      }
    );

    $.getJSON("https://pokeapi.co/api/v2/pokemon/milotic", function (milotic) {
      var miloticSprite = milotic.sprites.front_default;

      $(".prinplupSprite").attr("src", miloticSprite);
    });

    //feebas location
    $.getJSON(
      "https://pokeapi.co/api/v2/pokemon/349/encounters",
      function (feebasLocation) {
        var location = feebasLocation[0].location_area.name;
        console.log(location);

        document.getElementById("location").innerHTML = location;
      }
    );
  });
}

function loadStufful() {
  $.getJSON("https://pokeapi.co/api/v2/pokemon/stufful", function (stufful) {
    selectedPokemon.innerHTML = "Stufful";

    document.getElementById("shinyIcon").style.opacity = 0;
    document.getElementById("location").style.opacity = 0;
    document.getElementById("movesetScroll").style.opacity = 0;
    document.getElementById("wrapper").style.opacity = 0;

    //stufful evolution
    $.getJSON(
      "https://pokeapi.co/api/v2/evolution-chain/391/",
      function (stuffulEvo) {
        var evolution = stuffulEvo.chain.evolves_to[0].species.name;
        document.getElementById("evolution").innerHTML = evolution;
        document.getElementById("evolution2").innerHTML = "";
        img2.setAttribute("empoleonSprite", "");
      }
    );

    $.getJSON("https://pokeapi.co/api/v2/pokemon/bewear", function (bewear) {
      var bewearSprite = bewear.sprites.front_default;

      $(".prinplupSprite").attr("src", bewearSprite);
    });

    //shiny feebas
    var shinyStufful = stufful.sprites.front_shiny;
    $(".shinyPiplup").attr("src", shinyStufful);

    $("#shinyIcon").fadeTo("slow", 1);
    $("#location").fadeTo("slow", 1);
    $("#movesetScroll").fadeTo("slow", 1);
    $("#wrapper").fadeTo("slow", 1);

    //load moveset data in table
    stuffulMoveset = stufful.moves;

    let tableData = "";
    stuffulMoveset.map((values) => {
      tableData += ` <tr>
        <td>${values.move.name}</td>
        </tr>`;
    });

    document.getElementById("movesetTable_body").innerHTML = tableData;

    //stufful location
    document.getElementById("location").innerHTML = "akala-outskirts";
  });
}
