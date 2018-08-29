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
var defeatedEnemies = [];

var yourdamage = "";
var enemydamage = "";

//create flags to ckeck state of application
var gameRunning = false;
var isCharacterSelected = false;
var isDefenderSelected = false;
var isEnemyDefeated = false;


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
    "name": "Obi-Wan Kenobi",
    "HP": 120,
    "_HP": $("#obihp"),
    "AP": 8,
    "APincrease": 8,
    "CAP": 8,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock2").attr({
    "name": "Luke Skywalker",
    "HP": 100,
    "_HP": $("#lukehp"),
    "AP": 5,
    "APincrease": 5,
    "CAP": 5,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock3").attr({
    "name": "Darth Vader",
    "HP": 150,
    "_HP": $("#vaderhp"),
    "AP": 20,
    "APincrease": 20,
    "CAP": 20,
    "isCharacter": false,
    "isEnemy": false,
    "isDefender": false,
    "isDefeated": false,
});

$("#imageblock4").attr({
    "name": "Darth Maul",
    "HP": 180,
    "_HP": $("#maulhp"),
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

function reset() {



    document.getElementById('pickarea').append(
        document.getElementById('imageblock1')
    );
    document.getElementById('pickarea').append(
        document.getElementById('imageblock2')
    );
    document.getElementById('pickarea').append(
        document.getElementById('imageblock3')
    );
    document.getElementById('pickarea').append(
        document.getElementById('imageblock4')
    );

    obihp = 120;
    $obihp.textContent = obihp;


    lukehp = 100;
    $lukehp.textContent = lukehp;


    vaderhp = 150;
    $vaderhp.textContent = vaderhp;


    maulhp = 180;
    $maulhp.textContent = maulhp;
    characterarea = [];
    attackarea = [];
    defenderarea = [];
    // $characterarea.textContent = characterarea;
    // $attackarea.textContent = attackarea;
    // $defenderarea.textContent = defenderarea;
    gameRunning = false;
    isCharacterSelected = false;
    isEnemyDefeated = false;
    isDefenderSelected = false;


}

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
var youPick = null;
var youBeat = null;
var num_enermies = 3;

// create event listeners for characters images are clicked
$(".char").on("click", function () {
    if (!isCharacterSelected) {
        document.getElementById('characterarea').append(this);
        youPick = $(this);
        isCharacterSelected = true;
        $(youPick).attr("isCharacter", true);

        var restof = $(".char").not(this);
        for (var i = 0; i < restof.length; i++) {
            document.getElementById('attackarea').appendChild(restof[i]);
            $(restof[i]).attr("isEnemy", true);

        }
    } else if (!isDefenderSelected) {
        document.getElementById('defenderarea').append(this);
        youBeat = $(this);
        if ($(youBeat).attr("isEnemy")) {
            isDefenderSelected = true;
            $(youBeat).attr("isDefender", true);

        }
    }
})


var yourHP = null;
var enemyHP = null;
var yourAP = null;

$("#attackbtn").on("click", function () {
    if (isCharacterSelected && isDefenderSelected) {

        yourHP = parseInt($(youPick).attr("HP"));
        enemyHP = parseInt($(youBeat).attr("HP"));
        yourAP = parseInt($(youPick).attr("AP"));
        enemyCAP = parseInt($(youBeat).attr("CAP"));


        enemyHP -= yourAP;
        console.log(youBeat);
        console.log
        $(youBeat).attr("HP", enemyHP.toString());
        youBeat.find('h4').last().text(enemyHP.toString());
        youPick.find('h4').last().text(yourHP.toString());
        // $(youBeat).attr("_HP").textContent = enemyHP.toString();


        console.log(yourHP);
        console.log(yourAP);
        console.log(enemyHP);
        console.log(enemyCAP);
        console.log(enemyHP <= 0);
        console.log(num_enermies);


        if (enemyHP <= 0) { // you defeat the enemy
            // check if all enemies are down
            num_enermies -= 1;
            if (num_enermies <= 0) {
                $yourdamage.innerHTML = "";
                $enemydamage.innerHTML = "";
                $yourdamage.innerHTML = "You Won!!! GAME OVER!!!";
                $("#resetbtn").on("click", reset);
                reset();

            }
            // message of defeating a single enemy
            else {
                $yourdamage.innerHTML = "";
                $enemydamage.innerHTML = "";
                $yourdamage.innerHTML = "You have defeated " + youBeat.attr("name") + ", you can choose to fight another enemy.";
                yourHP = 120;
                youPick.find('h4').last().text(yourHP.toString());

            }
            // remove imageblock in defender area
            $('#defenderarea').empty();
            // defender is back ready to be selected
            isDefenderSelected = false;
        }
        else { // enemy is not down yet
            $yourdamage.innerHTML = "";
            $enemydamage.innerHTML = "";
            yourHP -= enemyCAP;
            $(youPick).attr("HP", yourHP.toString());
            $(youPick).attr("_HP").textContent = yourHP.toString();

            if (yourHP <= 0) { // you are defeated by the enemy
                $yourdamage.innerHTML = "";
                $enemydamage.innerHTML = "";
                $yourdamage.innerHTML = "You been Defeated GAME OVER!!!";
                $("#resetbtn").on("click", reset);
                reset();

            }
            else {
                $yourdamage.innerHTML = "";
                $enemydamage.innerHTML = "";
                $yourdamage.innerHTML = "You attacked " + $(youBeat).attr("name") + " for " + yourAP.toString() + " damage.";
                $enemydamage.innerHTML = $(youBeat).attr("name") + " attacked you back for " + enemyCAP.toString() + " damage.";
            }
        }
        // your AP increases for the next round
        yourAP += parseInt($(youPick).attr("APincrease"));
        $(youPick).attr("AP", yourAP.toString());
    }
})