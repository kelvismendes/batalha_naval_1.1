window.onload = function(){
	/*

		parte do codigo responsavel por fazer o
		jogador marca onde vai está os seus navios

	*/

	var minhas_posicoes_td = document.getElementsByClassName("td_marca_posicoes");
	var cont_minhas_posicoes = 0;//cont_temporario que vai ser usado pra percorrer todos os tds da tabela
    var array_posicoes_marcadas = []; //array que vai armazenar as posicoes onde o jogador colocou seu navio
    var cont_navios_faltando = 0;
    var cont_navios_faltando_seg_etapa = 0;
	while(cont_minhas_posicoes < minhas_posicoes_td.length){//estrutura de repetição usada pra percorrer os tds


		minhas_posicoes_td[cont_minhas_posicoes].onclick = function(){//adicionando uma função a todos os tds
			if(cont_navios_faltando < 20){//conta quantas posicoes o jogador ainda pode marcar que no maximo é 20
				this.style.background = '#ce1d24';//toda posicao marcada vai receber uma cor pra ser marcado
				var id_posicao_clicada  = this.getAttribute("id");
				array_posicoes_marcadas[id_posicao_clicada] = "marcado";
				document.getElementsByClassName("bloco")[cont_navios_faltando].style.borderColor = '#ce1d24';
				cont_navios_faltando++;
			}

		}

		cont_minhas_posicoes++;

	}//fim da primeira parte do codigo




	/* 

		parte do codigo responval por mudar a propriedade display do container, sumir com a primeira tabela
		que marca as posições do navio do jogador e mostra a nova tabela onde o jogador começa a jogar com a 
		maquina

	*/

	document.getElementById("but_Iniciar").onclick = function(){//quando o jogador clicar no botao iniciar
		document.getElementById("list_Navios").style.display = 'none';//esses container irão desaperecer
		document.getElementById("container").style.display = "none";
		escolher_funcao_de_preenchimento();

		document.getElementById("container_segunda_etapa").style.display = 'table';//esse container vai aparecer
		
		//quando as novas tabelas aparecerem a tabela do jogador sera preenchida com os valores marcados 
		//anteriormente.

		var posicoes_td_mostrar = document.getElementsByClassName("td_mostrar_posicoes");

		while(cont_navios_faltando_seg_etapa < posicoes_td_mostrar.length){//essa ESTRUTURA DE REPETICAO sera responsavel por fazer o preenchimento
												 //automatico da nova tabela
			
			if(array_posicoes_marcadas[cont_navios_faltando_seg_etapa] =="marcado"){//se no array o valor tiverr marcada
																					//na nova tabela o td que representa 
																					//aquele valor sera marcado
				posicoes_td_mostrar[cont_navios_faltando_seg_etapa].style.background = "red";
			}

			
			cont_navios_faltando_seg_etapa++;
		}

	}//fim da segunda parte do codigo













	/*
		
		Parte do codigo responsavel por gerar posiçõe aleatorias dos navios inimigos

	*/

	var tds_inimigo = document.getElementsByClassName("td_mostrar_posicoes_inimigo"); 
	var cor_marcacao = "#e67e22";
	var cont_temporario = 0; //apenas um cont_temporario pra ser usado nas funcoes
	var num_de_funcoes = 2; // o valor é dois pq só temos duas funcoes feitas até o momento
	
	function escolher_funcao_de_preenchimento(){	//essa funcao vai escolher aleatoriamente a função que vai escolher as posicoes
													//dos navios inimigos
		var num_de_funcoes = Math.floor((Math.random()*3));//gera um numero aleatorio entre 0 e 2
	
		if(num_de_funcoes==0){
			primeira_montagem();
			
		}else{
			segunda_montagem();
		}
	}



	function primeira_montagem(){

		while(cont_temporario < tds_inimigo.length){
			//navio de 5 possicoes
			if(cont_temporario<5){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 5 possicoes
			if(cont_temporario>18 && cont_temporario<24){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 4 possicoes
			if(cont_temporario > 30 && cont_temporario < 35){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 3 possicoes
			if(cont_temporario>37 && cont_temporario<41){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 2 possicoes
			if(cont_temporario>90 && cont_temporario<93){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 1 possicoes
			if(cont_temporario>83 && cont_temporario<85){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			cont_temporario++;
		}
		
	}


	function segunda_montagem(){
		
		while(cont_temporario < tds_inimigo.length){
			//navio de 5 possicoes
			if(cont_temporario<5){
				tds_inimigo[cont_temporario].style.background = "blue";
			}
			//navio de 5 possicoes
			if(cont_temporario>18 && cont_temporario<24){
				tds_inimigo[cont_temporario].style.background = "blue";
			}
			//navio de 4 possicoes
			if(cont_temporario > 30 && cont_temporario < 35){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 3 possicoes
			if(cont_temporario>37 && cont_temporario<41){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 2 possicoes
			if(cont_temporario>90 && cont_temporario<93){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			//navio de 1 possicoes
			if(cont_temporario>83 && cont_temporario<85){
				tds_inimigo[cont_temporario].style.background = cor_marcacao;
			}
			cont_temporario++;
		}
	}





}

