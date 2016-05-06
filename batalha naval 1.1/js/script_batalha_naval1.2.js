/*
	 função responsavel por marcar os blocos da esquerda,
	 e dizer quantos navios ainda podem ser marcadaos
*/
//ao mesmo tempo ela marca na segunda etapa onde o jogador posicionou seus navios
var corMarcaJogador = "red";//cor que vai ser usada pra fazer a marcação
var contador = 0; //apenas um contador
function marcar_navios_faltando(valorId){// é passado um parametro pra ela que é o valor da id da posicao clicada (td clicado)
	 document.getElementById(valorId).style.background = corMarcaJogador;//marcando na primeira tabela
	 document.getElementById("but_mostrar_"+valorId).style.background = corMarcaJogador;//marcando na segunda tabela(ou segunda etapa)
	 document.getElementsByClassName("bloco")[contador].style.borderColor = "red";
	 contador++;
}
/*
	gera as posições que o inimigo vai escolher para o seu navio

*/
var array_posicoes_inimigo = [];
function gerar_posicoes_inimigos(){
	var corMarcacaoInimigo = "red";
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
	
	if(array_posicoes_inimigo[valor]=="marcado"){
		document.getElementsByClassName("td_mostrar_posicoes_inimigo")[valor].style.background = "blue";
	}else{
		document.getElementsByClassName("td_mostrar_posicoes_inimigo")[valor].style.background = "green";
	}
	jogada_inimigo();
}


function jogada_inimigo(){
	var posicaoGerada = (Math.floor(Math.random()*95))+1;
	document.getElementsByClassName('td_mostrar_posicoes')[posicaoGerada].style.background = "black";
}


function verificar_vitoria(){

}






