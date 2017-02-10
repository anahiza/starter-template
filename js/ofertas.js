var ofertas = [
  {
    imagen: "img/ofertas/Oferta1.png",
    departamento: "Ferretería",
    productos : [
       "Bolsa de armella cerrada 22x100, 12 piezas",
        "Cincho plástico 50lb 300mm bolsa con 50 piezas",
        "Grapa blanca para cable plano 8mm, piezas",
        "Martillo de uña curva de 16oz granillado",
        "Escalera aluminio 4 escalones C2312-05 708-05N"
    ],
    codigos: ["A6537", "8416", "STRUPER48278", "8987", "8548"],
    precio: 629.99
  },
  {
    imagen: "img/ofertas/Oferta2.png",
    departamento: "Eléctrico",
    productos : [
      "Extensión eléctrica uso rudo, 8 metros, calibre 16 Voltech",
      "Multicontacto 6 entradas con interruptor 16AWG"
       
    ],
    codigos: ["5164", "5166"],
    precio: 164.99
  },
  {
    imagen: "img/ofertas/Oferta3.png",
    departamento: "Hogar",
    productos : [
      "Mesa Verona 1.80 portafolio",
      "Silla Brexia blanca 501 de plástico (4 piezas)"
       
    ],
    codigos: ["HOM40052", "8416"],
    precio: 1759.99
  },
  {
    imagen: "img/ofertas/Oferta4.png",
    departamento: "Aglomerados",
    productos : [
      "Marco Rossi Chocolate con bisagras",
      "Puerta Alpina 6 paneles chocolate 90x213",
      "Cerradura de pomo barrilete entrada recámara latón antiguo"
       
    ],
    codigos: ["AGMCH001", "AGPCH002", "4880"],
    precio: 1399.99
  },

]



var element = document.getElementById("ofertas");
var tarjeta = document.createElement("div")
tarjeta.setAttribute("class", "row")
var html = ""
for (i=0; i<ofertas.length; i++) {
  html+=`<div class="col s12 l6">
        <div class="card horizontal">
          <div class="card-image">
          <img src="${ofertas[i].imagen}" />
          </div>
        <div class="card-stacked">
          <div class="card-content"> 
          <h5>${ofertas[i].departamento}</h5>              
          <ul class="browser-default">`
  
  for (j=0; j<ofertas[i].productos.length; j++){
    html+=`<li>${ofertas[i].productos[j]}</li>`
  }
  html+=`</ul></div><div class="card-action"><span> Códigos: `
  
  for (j=0; j<ofertas[i].codigos.length; j++) {
    html += `${ofertas[i].codigos[j]} | `
  }
  
  html+="</span></div> </div></div></div>"  
}
  console.log(html)
  tarjeta.innerHTML=html
  element.appendChild(tarjeta);
