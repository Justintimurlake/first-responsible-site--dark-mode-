// let player = "rock";
// let computer = "scissors";
// let result;


// if (player === computer) {
//     result = "tie game";
// } else if (player === "paper") {
//     if (computer === "scissors") {
//         result = "player lose";
//     } else {
//         result = "computer lose"; 
//     }
// } else if (player === "rock") {
//     if (computer === "paper") {
//         result = "player lose";
//     } else {
//         result = "computer lose"; }
// } else if (player === "scissors") {
//     if (computer === "rock") {
//         result = "player lose";
//     } else {
//         result = "computer lose"; }
// } 



// console.log(result);

// let nmb =  Math.floor(Math.random() * 11);
// let randomnumber = nmb;
// let number;
// let contronumber = true;
// let mainnumber = true;

// if (nmb >= 10) {
//     number = "too much";
// } else if (nmb >= 9)  {
//     number = "just much";
// } else if (nmb >= 8)  {
//     number = "yes, much";
// } else if (nmb >= 7)  {
//     number = "good";
// } else if (nmb >= 4)  {
//     if (contronumber && mainnumber){
//         number = "IT IS SUPER OKEY"
//     } else if (contronumber) {
//         number = "IT IS  OKEY"
//     } else {
//     number = "it is okey";
// }} else {
//     number = "sorry it is not anough";
// }


// console.log(randomnumber);
// console.log(number);


// ------------------------- 
// switch (Math.floor(Math.random() * 10 + 1)) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     case 4:
//         console.log(4);
//         break;
//     case 5:
//         console.log(5);
//         break;
//     case 6:
//         console.log(6);
//         break;
//     case 7:
//         console.log(7);
//         break;
//     case 8:
//         console.log(8);
//         break;
//     case 9:
//         console.log(9);
//         break;
//     default: 
//     console.log("no matchs");
// }


// let player = "scissors";
// let computer = "paper";

// switch (player) {
//     case computer:
//         console.log("tie game");
//         break;
//     case "rock":
//         if (computer === "paper") {
//             console.log("player lose");
//             }
//             else {
//                 console.log("player won");
//             }
//         break;
//     case "paper":
//         if (computer === "scissors") {
//             console.log("player lose");
//         }  else {
//             console.log("player won");
//         }
//         break;
//     case "scissors":
//         if (computer === "rock") {
//             console.log("player lose");
//         }  else {
//             console.log("player won");
//         }
//         break;
//         default : 
//         console.log("8888 won");
// }


// let soup = "Chiken Noodel Soup";
// let bannedCustomer = false;
// let crekers = true;
// let soupAcces = bannedCustomer &&  crekers ? "no soap for  you" 
// : crekers
// ? " take some"
// : soup 
// ? `we have ${soup} today` : "Sorry, no soap for you!"  ;
// console.log(soupAcces);


// let tester = 39;
// let myGrade = tester > 89 ? "A"
// : tester >= 79 ? "B"
// : tester > 69 ? "C"
// : tester > 59 ? "D"
// : tester > 49 ? "E"
// : "F" ;
// console.log(myGrade);

// let player = "paper";
// let computer = "rock"; 
// let result = player === computer ? "tie game" 
// : player === "rock" && computer === "paper" ? "player lose"
// : player === "scissors" && computer === "rock" ? "player lose"
// : player === "paper" && computer === "scissors" ? "player lose" 
// :  "computer lose";
// console.log(result);

// let mybob = prompt("Please enter your name");
// // if (mybob) {
// //     console.log(mybob.trim());
// // } else {
// //     console.log("Please enter your name");
// // }

//  mybob ? console.log(mybob.trim()) :  console.log("Please enter your name"); 

// f


// let playGame = confirm("shell we play a game");
// if (playGame) {
//     let playerChoice = prompt("Choose Paper, Rock or Scissors" ); 
//     if (playerChoice) { 
//         let playerOne = playerChoice.trim().toLowerCase();

//         if (playerOne === "scissors" || 
//             playerOne === "rock" || 
//             playerOne === "paper") { 
//             let computerChoice = Math.floor(Math.random() * 3 + 1);
//             let computerOne = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

//             let result = 
//             playerOne === computerOne ? `playerOne ${playerOne}\ncomputerOne ${computerOne}\ntie game` 
// : playerOne === "rock" && computerOne === "paper" ? `playerOne ${playerOne}\ncomputerOne ${computerOne}\n Computer won`
// : playerOne === "scissors" && computerOne === "rock" ? `playerOne ${playerOne}\ncomputerOne ${computerOne}\nComputer won`
// : playerOne === "paper" && computerOne === "scissors" ? `playerOne ${playerOne}\ncomputerOne ${computerOne}\nComputer won`
// :  `playerOne ${playerOne}\ncomputerOne ${computerOne}\nPlayerOne won`;
//  alert(result); 
//  let playAgain = confirm("Play Again?");
//   playAgain ? location.reload() : alert("Thanks for game");


//         } else {
//             confirm("you made a mistake, shell we play again?")
//             ? location.reload() : alert("Thanks for it");

//         }
//     } else {
//         confirm("you did  write mistake or say that do not want to play, Do you want continua ?")
//             ? location.reload() : alert("Thanks for game");
//     }

// } else {
//     alert("maybe in the next time");
// }

// let myNumber = 0; 
// while (myNumber < 50) {
//     myNumber += 4;
//     console.log(myNumber);
// }  else

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let names = "Timur";



// for (i = 0; i <= names.length; i++) {
//     if( i === 2 ) {
//         continue ;
//     }
//     console.log(names.charAt(i));
// }


// var x = 1;
// let y = 2;
// const z = 3;

// {

//     var x = 5;
// }


// const ballaria1 = ["1", "2", "3", "4", "5", "6"];
// const ballaria2  = ["1", "2", "3", "4", "5", "6"];

// const bootsaria1 = ["1", "2", "3", "4", "5", "6"];
// const bootsaria2  = ["1", "2", "3", "4", "5", "6"];

// console.log(ballaria1[2])

// const zoneball = [ballaria1, ballaria2];
// const zonebootd = [bootsaria1, bootsaria2];

// console.log(zoneball[1]);


// const sfg = [zoneball, zonebootd];

// console.log(sfg);

// const animals = ["1", "2", "3", "4", "5", "6"];

// animals.forEach(c => {
//     console.log(c);
// })



// const btn = document.querySelector('button');
// const txt = document.querySelector('p');

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//  if (btn.textContent === 'Start') {
//     btn.textContent = 'Stop';
//     txt.textContent = 'it is work';
//  } else {
//     btn.textContent = 'Start';
//     txt.textContent = 'The machine is stopped.';
//  }


// }


// const btn = document.querySelector('button');
// const txt = document.querySelector('p');

// btn.addEventListener('click', updateBtn);

// function updateBtn() {
//   if (btn.textContent === 'Start machine') {
//     btn.textContent = 'Stop machine';
//     txt.textContent = 'The machine has started!';
//   } else {
//     btn.textContent = 'Start machine';
//     txt.textContent = 'The machine is stopped.';
//   }\\

// function f (name, jobtitle, born) {
//     this.name = name;
//     this.jobtitle = jobtitle;
//     this.born = born;  
// }

// f.prototype.salary = 2000;
// const fred = new f("Fred Flintstone", "Caveman", 1970);
// console.log(fred.salar

// let x = admin;

// if(x === admin) {

// // }
// let x = prompt('Who is there');

// if (x === 'admin') {
//     let y = prompt('Password');
//     if (y === 'themaster') {
//         alert('Welcome');
//     } else if (y === '' || y === null) {
//         alert( 'Canyou didnt write anything' );
//     }
//      else if (y !== 'thadminemaster') {
//         alert('Wrong password');
//     }
//     else {
//         alert('Canceled');
//     }
        
//  }admin else if (x === '' || x === null) {
//         alert('you didnt write anything' );
//     }
// else if (x !== 'admin') {
//   alert('i dont know you');
// }
// else {
//     alert('Canceled');
// }

// // let playerOne = playerChoice.trim().toLowerCase();



// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}