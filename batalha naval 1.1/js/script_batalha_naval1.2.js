/*
	 função responsavel por marcar os blocos da esquerda,
	 e dizer quantos navios ainda podem ser marcadaos

	 ao mesmo tempo marca na segunda tabela onde mostra as posições marcadas pelo jogador
*/
var corMarcaJogador = "#DB4B49"; //cor que vais er usada para marca as posições na tabela
var contador = 0; 
function marcar_navios_faltando(valorId){ // a função recebe um parâmetro que é a id da posição clicada pelo usuario
	 document.getElementById(valorId).style.background = corMarcaJogador; //agora o td que possui a id que veio do parametro vai ser marcado com a cor determinada
	 document.getElementById("but_mostrar_"+valorId).style.background = corMarcaJogador;// ao mesmo tempo marca na segunda tabela os valores que o jogador escolheu pra posicionar os navios
	 document.getElementsByClassName("bloco")[contador].style.borderColor = corMarcaJogador;//ao mesmo tempo marca quantos navios ainda faltam aplicando css na borda
	 contador++;

	 /*
		document.getELementByClassName("NOmeDaCLasse") retorna um array de elementos com a classe detarminada ex:
		existe  4 elementos com a class ".bloco" se eu usar 
		
		var elementos  =  document.getElementByClassName("bloco");

		vou retornar eles dentro de um array

		elementos[0] = esse representa o primeiro elemento
		elementos[1] = esse representa o segundo elemento
		elementos[2] ...
		elementos[3] ...
		elementos[4] ... 


		se não criar uma variavel para armazenar o array vc pode simplesmente acessar os elementos desta forma

		document.getElementsByClassName("bloco")[0] = esse representa o primeiro elemento
		document.getElementsByClassName("bloco")[1] = esse representa o segundo elemento
		document.getElementsByClassName("bloco")[3] =   ..... e etc

		nessa função no lugar de terminar um elemento eu coloquei dentro um contador [contador]
		ou seja, sempre que a função for chamada o contador vai ser acrescentado logo vai ser modificado um outro elemento
		ex:
		var contador = 0;

		 document.getElementsByClassName("bloco")[contador].style.backround = "red"; aplicou css no primeiro elemento

		 contador++; agora contador é 1;

	 	document.getElementsByClassName("bloco")[contador].style.backround = "red"; aplicou css no segundo elemento


		contador++; agora contador é 2;

		e etc......
	 */




}

var array_posicoes_inimigo = [];//um array javascript que vai armazenar onde vai ficar as posiçõe do inimigo
function gerar_posicoes_inimigos(){
	//navio de cinco posições
	array_posicoes_inimigo[0] = "marcado"; 
	array_posicoes_inimigo[1] = "marcado";
	array_posicoes_inimigo[2] = "marcado";
	array_posicoes_inimigo[3] = "marcado";
	array_posicoes_inimigo[4] = "marcado";
	//navio de cinco posições
	array_posicoes_inimigo[25] = "marcado";
	array_posicoes_inimigo[26] = "marcado";
	array_posicoes_inimigo[27] = "marcado";
	array_posicoes_inimigo[28] = "marcado";
	array_posicoes_inimigo[29] = "marcado";
	//navio 4 posições
	array_posicoes_inimigo[66] = "marcado";
	array_posicoes_inimigo[67] = "marcado";
	array_posicoes_inimigo[68] = "marcado";
	array_posicoes_inimigo[69] = "marcado";
	//navio 3 posições
	array_posicoes_inimigo[84] = "marcado";
	array_posicoes_inimigo[85] = "marcado";
	array_posicoes_inimigo[86] = "marcado";
	//navio 2 posições
	array_posicoes_inimigo[94] = "marcado";
	array_posicoes_inimigo[95] = "marcado";	
	//navio de 1 posição
	array_posicoes_inimigo[11] = "marcado";
}

function afundar_navio(valor){// no onclick no html está sendo passado um parâmetro em forma de numero 
	var cor_acerto = "#DB4B49"; //cor usado caso o jogador acerte um navio inimigo
	var cor_erro = "#00948A"; //cor usado caso o jogador erre o tiro no navio inimigo

	

	if(array_posicoes_inimigo[valor]=="marcado"){ 
		document.getElementsByClassName("td_mostrar_posicoes_inimigo")[valor].style.background = cor_acerto;
	}else{
		document.getElementsByClassName("td_mostrar_posicoes_inimigo")[valor].style.background = cor_erro;
	}
	jogada_inimigo();
	verificar_vitoria();

}


function jogada_inimigo(){
	var cor_erro = "#00948A";
	var posicaoGerada = Math.floor(Math.random()*95);
	var cor = document.getElementsByClassName('td_mostrar_posicoes')[posicaoGerada].style.background;
	if(cor=="rgb(219, 75, 73)"){
		document.getElementsByClassName('td_mostrar_posicoes')[posicaoGerada].style.background = "#510f24";	
	}else if(cor!="rgb(219, 75, 73)" && cor!= "rgb(81, 15, 36)"){//se a cor for diferente de cor marcada pelo jogador e pela cor de que ele acertou vai marcar com a cor que mostra que o inimigo errou
		document.getElementsByClassName('td_mostrar_posicoes')[posicaoGerada].style.background = cor_erro;
	}

}



function verificar_vitoria(){
	var tds_jogador = document.getElementsByClassName("td_mostrar_posicoes");
	var tds_inimigo = document.getElementsByClassName("td_mostrar_posicoes_inimigo");
	var contador_vitoria_inimigo = 0;
	var contador_vitoria_jogador = 0;

	for(var i =0; i < tds_jogador.length ; i++){
		if(tds_jogador[i].style.background =="rgb(81, 15, 36)"){
			contador_vitoria_inimigo++;
		}
	}

	if(contador_vitoria_inimigo >=20){
		alert("o inimigo ganhou");
	}

	for(var j = 0; j < tds_inimigo.length;j++){
		if(tds_inimigo[j].style.background =="rgb(219, 75, 73)"){
			contador_vitoria_jogador++;
		}
	}

	if(contador_vitoria_jogador >= 20){
		alert("o jogador ganhou")
	}
}






