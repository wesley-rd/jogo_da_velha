var player1 = "X";
var player2 = "O";
var vezDoJogador = player1;
function comecarcomx() {
	atualizaPlacar();
	inicioEspacos();
}
function comecarcomo() {
	vezDoJogador = player2;
	atualizaPlacar();
	inicioEspacos();
}

var gameOver = false;

function atualizaPlacar() {
	if (gameOver) { return; }

	if (vezDoJogador == player1) {
		var player = document.querySelectorAll("div#placar img")[0]
		player.setAttribute("src", "img/x.jpg");
	} else {
		var player = document.querySelectorAll("div#placar img")[0];
		player.setAttribute("src", "img/circulo.png");
	}
}
function inicioEspacos() {
	var espacos = document.getElementsByClassName("espaco");
	for (var i = 0; i <= espacos.length; i++) {
		espacos[i].addEventListener("click", function () {
			if (gameOver) { return; }
			if (this.getElementsByTagName("img").length == 0) {
				if (vezDoJogador == player1) {
					this.innerHTML = "<img src='img/x.jpg' class= 'xjpg'>";
					this.setAttribute("vez", player1);
					vezDoJogador = player2;
				} else {
					this.innerHTML = "<img src='img/circulo.png' class= 'circulopng'>";
					this.setAttribute("vez", player2);
					vezDoJogador = player1;
				}
				atualizaPlacar();
				verificador();
			}

		}
		);
	}
}
function verificador() {
	var aux = 0;
	var c1 = document.getElementById("c1").getAttribute("vez");
	var c2 = document.getElementById("c2").getAttribute("vez");
	var c3 = document.getElementById("c3").getAttribute("vez");
	var c4 = document.getElementById("c4").getAttribute("vez");
	var c5 = document.getElementById("c5").getAttribute("vez");
	var c6 = document.getElementById("c6").getAttribute("vez");
	var c7 = document.getElementById("c7").getAttribute("vez");
	var c8 = document.getElementById("c8").getAttribute("vez");
	var c9 = document.getElementById("c9").getAttribute("vez");
	var vencedor = "";
	if (((c1 == c4 && c1 == c7) || (c1 == c2 && c1 == c3) || (c1 == c5 && c1 == c9)) && c1 != "") {
		vencedor = c1;
	} else if (((c5 == c4 && c5 == c6) || (c5 == c2 && c5 == c8) || (c5 == c3 && c5 == c7 || (c5 == c1 && c5 == c9))) && c5 != "") {
		vencedor = c5;

	} else if (((c9 == c8 && c9 == c7) || (c9 == c6 && c9 == c3)) && c9 != "") {

		vencedor = c9;
	}
	if (vencedor != "") {
		gameOver = true;

		alert("o ganhador foi o: " + vencedor);
	} else {
		for (var x = 1; x <= 9; x++) {
			if (document.getElementById("c" + x).getAttribute("vez") == "") {
				aux += 1;
			}
		}
		if (aux == 0) {
			alert("deu velha")

		}
	}
}
function novojogo() {
	document.location.reload(true);
}


