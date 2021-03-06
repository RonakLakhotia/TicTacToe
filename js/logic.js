//anonymous function
window.onload = function() {

	//variable declaration

	var num;
	var box;
	var ctx;
	var turn = 1;
	var filled;
	var symbol;
	var winner;
	var isGameOver = false;

	filled = [false, false, false, false, false, false, false, false, false];
	symbol = ['', '', '', '', '', '', '', '', ''];

	winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	//new game button

	var button = document.getElementById("new");
	button.addEventListener("click", newGame);

	function newGame() {
		document.location.reload();
	}

	document.getElementById("tic").addEventListener("click", function(e) {
		boxClick(e.target.id);
	});

	function boxClick(numId) {
		box = document.getElementById(numId);
		ctx = box.getContext("2d");

		switch(numId) {
			case "canvas1": num = 1;
						  break;

			case "canvas2": num = 2;
						  break;

			case "canvas3": num = 3;
						  break;

			case "canvas4": num = 4;
						  break;

			case "canvas5": num = 5;
						  break;

			case "canvas6": num = 6;
						  break;

			case "canvas7": num = 7;
						  break;

			case "canvas8": num = 8;
						  break;
						  						  
			case "canvas9": num = 9;
						  break;
						  
		}
		addImage();
	}
	function addImage() {

		if (filled[num - 1] == false) {
			if (isGameOver == false) {
				if (turn % 2 == 1) {
				showFirstPlayerMove();
				symbol[num - 1] = 'X';

			} else {
				showSecondPlayerMove();
				symbol[num - 1] = 'O';
			}
			turn++;
			filled[num - 1] = true;
			var isWinner = checkForWinner();
			if (isWinner == true) {
				if (symbol[num - 1] == 'X')
					var player = "First";
				else {
					player = "Second";
				}
				document.getElementById("result").innerText = player + " Player Won!";
				isGameOver = true;
			}
			if (turn > 9 && isGameOver == false) {
				document.getElementById("result").innerText = "It is a Draw!";
			}

		} else {
			alert("Game is over! Click on new game button to start a new game.");
		}
	} else {
		alert("This box has already been filled!");
	}

}
	function showFirstPlayerMove() {
		crossImage = new Image();
		crossImage.src = 'image/cross.png';
		crossImage.onload = function() {
		ctx.drawImage(crossImage, 0, 0, 120, 120, 0, 0, 120, 120);
		}
	}
	function showSecondPlayerMove() {
		crossImage = new Image();
		crossImage.src = 'image/circle.png';
		crossImage.onload = function() {
		ctx.drawImage(crossImage, 0, 0, 120, 120, 0, 0, 120, 120);
		}
	}
	function checkForWinner() {

		var lastSymbol = symbol[num - 1];
		var isAllFilled = true;

		for (var i = 0; i < 8; ++i) {
			isAllFilled = true;
			for (var j = 0; j < 3; ++j) {
				if (symbol[winner[i][j]] != lastSymbol)
					isAllFilled = false;
			}
			if (isAllFilled == true)
				return true;
		}
		return false;
	}

}

