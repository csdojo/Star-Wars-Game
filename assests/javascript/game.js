// Grab reference to DOM elements
var $obihp = document.getElementById("obihp");
var $lukehp = document.getElementById("lukehp");
var $vaderhp = document.getElementById("vaderhp");
var $maulhp = document.getElementById("maulhp");
var $yourdamage = document.getElementById("yourdamage");
var $enemydamage = document.getElementById("enemydamage");
var $pickarea = document.getElementById("pickarea");
var $characterarea = document.getElementById("characterarea");
var $attackarea = document.getElementById("attackarea");
var $defenderarea = document.getElementById("defenderarea");

//set characters initial health points
var obihp = 120;
$obihp.textContent = obihp;


var lukehp = 100;
$lukehp.textContent = lukehp;


var vaderhp = 150;
$vaderhp.textContent = vaderhp;


var maulhp = 180;
$maulhp.textContent = maulhp;

// create some vars

var pickarea;
var characterarea = [];
var attackarea = [];
var defenderarea = [];

var yourdamage = "";
var enemydamage = "";

//create flags to ckeck state of application
var gameRunning = false;
var isCharacterSelected = false;
var isDefenderSelected = false;
var isEnemyDefeated = false;

// Attack power
var obiAP = 8;
var lukeAP = 5;
var daverAP = 20;
var maulAP = 25;

// Counter Attack Power
var obiCAP = 0;
var lukeCAP = 0;
var daverCAP = 0;
var maulCAP = 0;

//four characters' objects 

var obi = {
    "HP": 120,
    "AP": 8,
    "APincrease": 8,
    "CAP": 8,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
}

var luke = {
    "HP": 100,
    "AP": 5,
    "APincrease": 5,
    "CAP": 5,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
}

var daver = {
    "HP": 150,
    "AP": 20,
    "APincrease": 20,
    "CAP": 20,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
}


var maul = {
    "HP": 180,
    "AP": 25,
    "APincrease": 25,
    "CAP": 25,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
}

// link objects to images

$("#imageblock1").attr({
    "HP": 120,
    "AP": 8,
    "APincrease": 8,
    "CAP": 8,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock2").attr({
    "HP": 100,
    "AP": 5,
    "APincrease": 5,
    "CAP": 5,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock3").attr({
    "HP": 150,
    "AP": 20,
    "APincrease": 20,
    "CAP": 20,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock4").attr({
    "HP": 180,
    "AP": 25,
    "APincrease": 25,
    "CAP": 25,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

// this is reset button function   need to create a ID with resetbtn TO make this functional
document.getElementById('imageblock2')
$("#resetbtn").on("click", function () {
    document.getElementById('pickarea').appendChild(
        document.getElementById('imageblock1')
    );
    document.getElementById('pickarea').appendChild(
        document.getElementById('imageblock2')
    );
    document.getElementById('pickarea').appendChild(
        document.getElementById('imageblock3')
    );
    document.getElementById('pickarea').appendChild(
        document.getElementById('imageblock4')
    );

    characterarea = [];
    attackarea = [];
    defenderarea = [];
    $characterarea.textContent = characterarea;
    $attackarea.textContent = attackarea;
    $defenderarea.textContent = defenderarea;
    gameRunning = false;
    isCharacterSelected = false;
    isEnemyDefeated = false;
    isDefenderSelected = false;


})

// function resetbtn() {
//     var resetbtn = $("<button>");
//     resetbtn.addClass("btn btn-dark btn-lg");
//     resetbtn.attr("id", "resetbtn");
//     $("#enemydamage").append(resetbtn);
//     $(this).on("click", function () {
//         gameRunning = true;

//         obihp = 120;
//         lukehp = 100;
//         vaderhp = 150;
//         maulhp = 180;
//         characterarea = [];
//         attackarea = [];
//         defenderarea = [];

//     })
// }

// create event listeners for characters images are clicked
$(".char").on("click", function () {
    if (!isCharacterSelected) {
        document.getElementById('characterarea').append(this);
        isCharacterSelected = true;
        $(this).attr("isCharacter", true);
        console.log($("#imageblock1").attr("isCharacter"));
        console.log($("#imageblock2").attr("isCharacter"));
        console.log($("#imageblock3").attr("isCharacter"));
        console.log($("#imageblock4").attr("isCharacter"));




        var restof = $(".char").not(this);
        for (var i = 0; i < restof.length; i++) {
            document.getElementById('attackarea').appendChild(restof[i]);
            $(restof[i]).attr("isEnemy", true);
        }
    } else if (!isDefenderSelected) {
        document.getElementById('defenderarea').append(this);
        if ($(this).attr("isEnemy")) {
            isDefenderSelected = true;
            $(this).attr("isDefender", true);
        }

    }
})
// } else {

//     if (!isDefenderSelected) {
//         var restof = $(".char").not(this);
//         for (var i = 0; i < restof.length; i++) {
//             document.getElementById('attackarea').appendChild(restof[i]);
//             isEnemySelected = true;
//         }
//     }
// }
// create event listeners for attack button is clicked
$("#attackbtn").on("click", function () {

})