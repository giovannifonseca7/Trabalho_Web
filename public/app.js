function mudaCor(){

	document.getElementById('div1').style.background = "#F1ECEC";
}

function voltaCor(){

	document.getElementById('div1').style.background = "none";
}

function mudaCor2(){

	document.getElementById('div2').style.background = "#F1ECEC";
}

function voltaCor2(){

	document.getElementById('div2').style.background = "none";
}

function mudaCor3(){

	document.getElementById('div3').style.background = "#F1ECEC";
}

function voltaCor3(){

	document.getElementById('div3').style.background = "none";
}

function mudaCor4(){

	document.getElementById('div4').style.background = "#F1ECEC";
}

function voltaCor4(){

	document.getElementById('div4').style.background = "none";
}

function mudaCor5(){

	document.getElementById('div5').style.background = "#F1ECEC";
}

function voltaCor5(){

	document.getElementById('div5').style.background = "none";
}

function mudaCor6(){

	document.getElementById('div6').style.background = "#F1ECEC";
}

function voltaCor6(){

	document.getElementById('div6').style.background = "none";
}

function mudaCor7(){

	document.getElementById('div7').style.background = "#F1ECEC";
}

function voltaCor7(){

	document.getElementById('div7').style.background = "none";
}

function mudaCor8(){

	document.getElementById('div8').style.background = "#F1ECEC";
}

function voltaCor8(){

	document.getElementById('div8').style.background = "none";
}

function mudaCor9(){

	document.getElementById('div9').style.background = "#F1ECEC";
}

function voltaCor9(){

	document.getElementById('div9').style.background = "none";
}

function mudaCor10(){

	document.getElementById('div10').style.background = "#F1ECEC";
}

function voltaCor10(){

	document.getElementById('div10').style.background = "none";
}

function contarRespostas(){

	let cont = 0;

	if(document.getElementById('criador').value == "Tim Berners-Lee" || (document.getElementById('criador').value == "Tim Berners") || (document.getElementById('criador').value == "Tim Berners Lee")){

		cont++;
	}

	if (document.formulario.responsivo.checked){

		cont++;
	}

	if(document.getElementById('idade').value == '27'){

		cont++;
	}

	if(document.getElementById('tagFormulario').value == "Form"){

		cont++;
	}

	if((document.getElementById('tagRealce').value == "span") || (document.getElementById('tagRealce').value == "Span") || (document.getElementById('tagRealce').value == "SPAN")){

		cont++;
	}

	if(document.getElementById('tagEstilo').value == "style" || (document.getElementById('tagEstilo').value == "Style") || (document.getElementById('tagEstilo').value == "STYLE")){

		cont++;
	}

	if(document.formulario.seletor.checked){

		cont++;
	}

	if(document.getElementById('tagAgrupar').value == "Classe"){

		cont++;
	}

	if((document.formulario.fontSize.checked)  && (document.formulario.background.checked) && (document.formulario.width.checked) && (document.formulario.heigth.checked)){

		cont++;
	}

	if((document.formulario.bootstrap.checked)  && (document.formulario.springboot.checked) && (document.formulario.angular.checked) && (document.formulario.cordova.checked)){

		cont++;
	}


	if(document.getElementById("criador").value != ''){

		if((document.formulario.responsivo.checked) || (document.formulario.naoResponsivo.checked)){

				if(document.getElementById('idade').value != ''){


					if(document.getElementById('tagRealce').value != ''){

						if(document.getElementById('tagEstilo').value != ''){

							if((document.formulario.seletor.checked) || (document.formulario.modificador.checked)){

								alert("Respostas certas: " + cont);
							}

								
						}

							
						
					}


					

				}

				
	

		}

		
	}


	
}
