// Guess The Number Game JS

var secretNumber = 0,
	numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	var elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	var userGuessed = document.getElementById('userGuess').value;
	var statusArea = document.getElementById('statusArea');
	var historyList = document.getElementById('historyList');
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {
		writeMessage('statusArea', '<p> Please enter a number 1-100 and press the Guess button.</p>');
	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<p> Please enter a whole number 1-100 and press the Guess button.</p>');
	} else {
		numberOfGuesses++;

		if (userGuessed == secretNumber) {
			writeMessage('statusArea', '<p> congratulations 🤞😎 You guess Right number in ' + numberOfGuesses +' guesses, I was thinking about ' + secretNumber + ' number, Let\'s go again...</p>');
			newGame();
		} else if (userGuessed < secretNumber) {
			writeMessage('statusArea', '<p>You need to guess Bigger Number than ' + userGuessed + ', try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' (too low)</li>', true);
		} else {
			writeMessage('statusArea', '<p>You need to guess smaller Number than ' + userGuessed + ', try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed + ' (too high)</li>', true);
		}
	}

	document.getElementById('userGuess').value = '';	
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};


// Animation jS
particlesJS("particles-js", {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});



// var draggableDiv = document.getElementById('draggableDiv');
// var offsetX, offsetY;

// function dragMouseDown(e) {
//   e.preventDefault();

//   offsetX = e.clientX - draggableDiv.offsetLeft;
//   offsetY = e.clientY - draggableDiv.offsetTop;

//   document.addEventListener('mousemove', elementDrag);
//   document.addEventListener('mouseup', closeDragElement);
// }

// function elementDrag(e) {
//   e.preventDefault();

//   var newX = e.clientX - offsetX;
//   var newY = e.clientY - offsetY;

//   draggableDiv.style.left = newX + 'px';
//   draggableDiv.style.top = newY + 'px';
// }

// function closeDragElement() {
//   document.removeEventListener('mousemove', elementDrag);
//   document.removeEventListener('mouseup', closeDragElement);
// }

// draggableDiv.addEventListener('mousedown', dragMouseDown);