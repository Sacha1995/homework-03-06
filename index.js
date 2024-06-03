/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/
// 1. Turn the one with the id 'first_ghost' orange
// GET BY ID
// let firstGhost = document.getElementById("first_ghost");
// firstGhost.style.fill = "orange";

// shorter version
document.getElementById("first_ghost").style.fill = "orange";

// 2. Turn the ones with the class of 'second_wave' blue
// GET BY CLASSNAME
let secondWave = document.getElementsByClassName("second_wave");

for (let i = 0; i < secondWave.length; i++) {
  secondWave[i].style.fill = "blue";
}

// 3. Select Area 51, then select the svgs inside it and turn them green
// GET AREA, DRILL DOWN using GET BY TAG NAME
const area51 = document.getElementById("area-51").getElementsByTagName("svg");

for (let i = 0; i < area51.length; i++) {
  area51[i].style.fill = "green";
}

// alternative
// let area51 = document.querySelectorAll("#area-51 > svg");

// for (let i = 0; i < area51.length; i++) {
//   area51[i].style.fill = "green";
// }

// 4. Using querySelector (starting at the document level) and an nth-child-type css selector, make the penultimate ghost in area 51 have a red stroke with a strokeWidth of 15px
// querySelector nth-child

const middleGhost = document.querySelector("#area-51 > svg:nth-last-child(2)");
middleGhost.style.stroke = "red";
middleGhost.style.strokeWidth = "15px";

// 5. Starting with that penultimate ghost you just selected, select the div immediately above the ghost and make its border '5px dashed'
// from the last child, select the div immediately above the ghost and make its border '5px dashed'
const parentMiddleGhost = middleGhost.parentNode;
parentMiddleGhost.style.border = "black 5px dashed";

// 6. Using querySelectorAll, select all the ghosts in the div which has an id of area-50 and turn them red
// querySelectorAll
const area50 = document.querySelectorAll("#area-50 .ghost");

for (let i = 0; i < area50.length; i++) {
  area50[i].style.fill = "red";
}
