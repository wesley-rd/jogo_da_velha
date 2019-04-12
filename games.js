var player1 = "X";
var player2 = "O";
var vezDoJogador = player1;
// seleciona com "letra" qual quer começar
function comecarcomx() {
	atualizaPlacar();
	inicioEspacos();
}
function comecarcomo() {
	vezDoJogador = player2;
	atualizaPlacar();
	inicioEspacos();
}
// essa variavel permite que o jogo comece
var gameOver = false;

function atualizaPlacar() {
	// essa função muda a imagem do placar de acordo com o jogador
	//if (gameOver) { return; }
	if (vezDoJogador == player1) {
		var player = document.querySelectorAll("div#placar img")[0]
		player.setAttribute("src", "img/x.jpg");
	} else {
		var player = document.querySelectorAll("div#placar img")[0];
		player.setAttribute("src", "img/circulo.png");
	}
}
function inicioEspacos() {
	// aqui  a variavel espaço vai "pegar" todas as classe com o nome "espaço"
	var espacos = document.getElementsByClassName("espaco");
	for (var i = 0; i <= espacos.length; i++) {
		espacos[i].addEventListener("click", function () {
			// todos os clique serão "ouvidos" e chamara o "for"  para completar todos os "espaços"
			if (gameOver) { return; }
			// quando der game over, não será possivel clicar em nenhum "espaço"
			if (this.getElementsByTagName("img").length == 0) {
				if (vezDoJogador == player1) {
					this.innerHTML = "<img src='img/x.jpg' class= 'xjpg'>";
					this.setAttribute("vez", player1);
					vezDoJogador = player2;
					// os dois blocos "chama a imagem" que o jogador optou jogar
				} else {
					this.innerHTML = "<img src='img/circulo.png' class= 'circulopng'>";
					this.setAttribute("vez", player2);
					vezDoJogador = player1;
				}
				//atualizaPlacar();
				// aqui como o proprio nome diz, verifica se há um vencedor
				verificador();
			}

		}
		);
	}
}
// as variaveis recebe o valor do "clique" e troca de acordo com a vez do jogador
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
	// o vencedor antes do game over estara vazio
	var vencedor = "";
	// faz a comparação entre os espaços para saber se ha um ganhador ou não
	if (((c1 == c4 && c1 == c7) || (c1 == c2 && c1 == c3) || (c1 == c5 && c1 == c9)) && c1 != "") {
		vencedor = c1;
	} else if (((c5 == c4 && c5 == c6) || (c5 == c2 && c5 == c8) || (c5 == c3 && c5 == c7 || (c5 == c1 && c5 == c9))) && c5 != "") {
		vencedor = c5;

	} else if (((c9 == c8 && c9 == c7) || (c9 == c6 && c9 == c3)) && c9 != "") {

		vencedor = c9;
	}
	if (vencedor != "") {
		gameOver = true;
		// se o vencedor for diferente de vazio não poderá clicar em nenhum outro "espaço"
		//alert("o ganhador foi o: " + vencedor);
		document.getElementById("ganhador").innerHTML = "Ganhador: " + vencedor;
		} else {
		// aqui compara todas as casas pegando os "ids" e acrescentando caso não houver ganhador
		for (var x = 1; x <= 9; x++) {
			if (document.getElementById("c" + x).getAttribute("vez") == "") {
				aux += 1;
			}
		}
		// se a variavel aux estiver zerada não ouve ganhador
		if (aux == 0) {
			//alert("deu velha")
			document.getElementById("velha").innerHTML = "Deu Velha ";
		}
	}
}
function novojogo() {
	document.location.reload(true);
}


