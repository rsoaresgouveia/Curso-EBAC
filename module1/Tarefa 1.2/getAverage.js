function obterMedia(){
	const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  const number3 = parseInt(document.getElementById("number3").value);
  
  var media = (number1 + number2 + number3) / 3;
  
  document.getElementById("resultado").innerHTML = "Resultado: " + media;
  
}