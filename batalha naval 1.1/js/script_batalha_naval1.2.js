/*
	 função responsavel por marcar os blocos da esquerda,
	 e dizer quantos navios ainda podem ser marcadaos
*/
//ao mesmo tempo ela marca na segunda etapa onde o jogador posicionou seus navios
var corMarcaJogador = "#DB4B49";//cor que vai ser usada pra fazer a marcação
var contador = 0; //apenas um contador
function marcar_navios_faltando(valorId){// é passado um parametro pra ela que é o valor da id da posicao clicada (td clicado)
	 document.getElementById(valorId).style.background = corMarcaJogador;//marcando na primeira tabela
	 document.getElementById("but_mostrar_"+valorId).style.background = corMarcaJogador;//marcando na segunda tabela(ou segunda etapa)
	 document.getElementsByClassName("bloco")[contador].style.borderColor = corMarcaJogador;
	 contador++;
}
/*
	gera as posições que o inimigo vai escolher para o seu navio
*/
var array_posicoes_inimigo = [];
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

function afundar_navio(valor){
	var cor_acerto = "#DB4B49";
	var cor_erro = "#00948A";
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






