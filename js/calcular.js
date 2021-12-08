function calcular(){
  let aqui = document.querySelector("#aqui");
  aqui.innerHTML = "";
  let comprimento = parseFloat(document.querySelector("#comprimento").value);
  let altura = parseFloat(document.querySelector("#altura").value);
  let preco = parseFloat(document.querySelector("#valor").value);
  if(!comprimento || !altura || !preco){
    aqui.append(document.createAttribute("h3").innerHTML="Informe todos os valores!")
  }
  else{
    comprimento+=3;
    altura+=2;
    let area = comprimento*altura;
    let valorTotal = area/10000*preco;
    aqui.innerHTML=`<h3 style="margin:0;padding:0">Área Total da Pedra</h3>
                    <p>${comprimento}cm x ${altura}cm = ${area}cm² ou ${area/10000}m²</p>
                    <h3 style="margin:0;padding:0">Valor Total</h3>
                    <p>${area/10000}m² x R$${preco} = R$${valorTotal}</p>`
  }
}