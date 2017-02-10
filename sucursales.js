 var constitucion={lat: 17.996614, lng: -92.913604}
    var industrial={lat: 18.024125, lng:  -92.907580} 
    var periferico={lat: 17.966317, lng:-92.963161}
    var marker1;
    var marker2;
    var marker3;
    var prefixMX="+521"

    var arregloSuc=[
      {
        nombre:"Constitución",
        coordenadas: {lat: 17.996614, lng: -92.913604},
        direccion: "Av. Constitución #1303 <br> Col. Centro, Villahermosa, Tabasco.<br>CP 86000",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br>Sábados: 7:00 am - 6:00 pm<br>Domingos: 7:00 am - 3:00 pm",
        telefono1: "(993) 312 10 03",
        telefono2: "(993) 314 25 26",
        ref_tel1: prefixMX+"9933121003",
        ref_tel2: prefixMX+"9933142526",
        mail:"gerenciaconstitucion@santandreu.com.mx"      

      },
      {       
        nombre:"Industrial",
        coordenadas: {lat: 18.024125, lng:  -92.907580} ,        
        direccion: "Aluminio y Antimonio s/n<br> Ciudad Industrial, Villahermosa, Tabasco<br> CP 86000",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm<br> Sabados: 7:00 am - 5:00 pm<br> Domingos: 7:00 am - 2:00 pm",
        telefono1: "(993) 353 06 85" ,
        telefono2: "(993) 353 05 76",
        ref_tel1: prefixMX+"9933530685",
        ref_tel2: prefixMX+"9933530576",
        mail:"gerenciaindustrial@santandreu.com.mx"    
      },
      {       
        nombre:"Periférico",
        coordenadas: {lat: 17.966619, lng: -92.963194} ,        
        direccion: "Periférico #2020 <br />Col. Punta Brava, Villahermosa, Tabasco. <br />CP 86150",
        horario: "Lunes a Viernes: 7:00 am - 8:00 pm <br />Sábados: 7:00 am - 6:00 pm <br />Domingos: 8:00 am - 4:00 pm",
        telefono1: "(993) 350 21 21" ,
        telefono2: "(993) 350 19 10",
        ref_tel1: prefixMX+"9933502121",
        ref_tel2: prefixMX+"9933501910",
        mail:"gerenciaperiferico@santandreu.com.mx"    
      },
      {       
        nombre:"Méndez",
        coordenadas: {lat: 17.994088, lng: -92.921561} ,        
        direccion: "Av. Gregorio Méndez #830 <br /> Villahermosa, Tabasco. <br /> CP 86000",
        horario: "Lunes a Viernes: 8:00 am - 7:00 pm <br />Sábados: 8:00 am - 5:00 pm <br />",
        telefono1: "(993) 314 09 33" ,
        telefono2: "(993) 312 16 32",
        ref_tel1: prefixMX+"9933140933",
        ref_tel2: prefixMX+"9933121632",
        mail:"gerenciamendez@santandreu.com.mx"    
      },
      {       
        nombre:"Guayabal",
        coordenadas: {lat: 17.973444, lng: -92.926163} ,        
        direccion: "Paseo Usumacinta s/n  <br />Colonia Guayabal, Villahermosa, Tabasco. <br /> CP 86009",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sabados: 8:00 am - 4:00 pm <br />",
        telefono1: "(993) 352 58 35" ,
        telefono2: "",
        ref_tel1: prefixMX+"9933525835",
        ref_tel2: "",
        mail:"gerenciaguayabal@santandreu.com.mx"    
      } ,
      {       
        nombre:"Autoservicio Constitución",
        coordenadas: {lat: 17.996752, lng: -92.913488} ,        
        direccion: "Av. Constitución #1303  <br />Col. Centro, Villahermosa, Tabasco. <br />CP 86000",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 7:00 am - 5:00 pm <br /> Domingos: 7:00 am - 2:00 pm",
        telefono1: "(993) 314 08 37" ,
        telefono2: "",
        ref_tel1: prefixMX+"9933140837",
        ref_tel2: "",
        mail:"autoservicioconstitucion@santandreu.com.mx"    
      },
      {       
        nombre:"Cárdenas",
        coordenadas: {lat: 17.998989, lng: -93.378810} ,        
        direccion: "Carretera Circuito del Golfo esq. Revolución s/n <br />Cárdenas, Tabasco. <br />CP 86500",
        horario: "  Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 8:00 am - 5:00 pm <br /> Domingos: 8:00 am - 2:00 pm",
        telefono1: "(937) 372 10 75" ,
        telefono2: "(937) 372 19 75",
        ref_tel1: prefixMX+"9373721075",
        ref_tel2: prefixMX+"9373721975",
        mail:"gerenciacardenas@santandreu.com.mx"    
      },
      {       
        nombre:"Galeana",
        coordenadas: {lat: 17.990453, lng: -93.375371} ,        
        direccion: "Galeana esq. Moctezuma <br />Col. Centro, H. Cárdenas, Tabasco. <br />CP 86500",
        horario: "Lunes a Viernes: 8:00 am - 6:00 pm <br /> Sábados: 8:00 am - 5:00 pm <br />",
        telefono1: "(937) 372 24 43" ,
        telefono2: "",
        ref_tel1: prefixMX+"9373722443",
        ref_tel2: "",
        mail:"galeana@santandreu.com.mx"    
      },
       {       
        nombre:"Cárdenas Bandala",
        coordenadas: {lat: 17.989973, lng: -93.379913} ,        
        direccion: "Abraham Bandala #306  <br />Colonia Centro,Cárdenas, Tabasco.<br />CP 86500",
        horario: "Lunes a Viernes: 8:00 am - 6:00 pm<br />Sábados: 8:00 am - 5:00 pm<br />",
        telefono1: "(937) 372 14 61" ,
        telefono2: "",
        ref_tel1: prefixMX+"9373721461",
        ref_tel2: "",
        mail:"gerenciabandala@santandreu.com.mx"    
        },
      {       
        nombre:"Comalcalco",
        coordenadas: {lat: 18.269392, lng:-93.220483} ,        
        direccion: "Boulevard Adolfo López Mateos S/N <br /> Comalcalco, Tabasco. <br /> CP 86300",
        horario: "  Lunes a Viernes: 7:00 am - 8:00 pm <br /> Sábados: 7:00 am - 7:00 pm <br /> Domingos: 8:00 am - 5:00 pm",
        telefono1: "(933) 334 09 56" ,
        telefono2: "(933) 334 13 51",
        ref_tel1: prefixMX+"9333340956",
        ref_tel2: prefixMX+"9333341351",
        mail:"gerenciacomalcalco@santandreu.com.mx"    
       },
      {       
        nombre:"Cunduacán",
        coordenadas: {lat: 18.269392, lng:-93.220483} ,        
        direccion: "Periférico S/N esq. Doña Fidencia<br />Cunduacán, Tabasco. <br /> CP 86690",
        horario: "  Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 7:00 am - 5:00 pm <br /> Domingos: 8:00 am - 2:00 pm",
        telefono1: "(914) 336 08 77" ,
        telefono2: "(914) 336 09 66",
        ref_tel1: prefixMX+"9143360877",
        ref_tel2: prefixMX+"9143360966",
        mail:"gerenciacunduacan@santandreu.com.mx"    
      },
      {       
        nombre:"Jalpa de Méndez",
        coordenadas: {lat: 18.1783215, lng:-93.0734193} ,        
        direccion: "Periférico s/n desviación carretera Jalpa-Villahermosa<br />Jalpa de Méndez, Tabasco<br />",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 7:00 am - 5:00 pm <br /> Domingos: 8:00 am - 2:00 pm",
        telefono1: "(914) 337 21 18" ,
        telefono2: "",
        ref_tel1: prefixMX+"9143372118",
        ref_tel2: prefixMX+"",
        mail:"gerenciajalpa@santandreu.com.mx"    
      },
      {       
        nombre:"Paraíso Centro",
        coordenadas: {lat: 18.3998764, lng: -93.2124458} ,        
        direccion: "Calle Benito Juárez #608 Col. Centro<br />Paraíso, Tabasco<br /> CP 86600",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 7:00 am - 4:00 pm",
        telefono1: "(933) 333 4082" ,
        telefono2: "",
        ref_tel1: prefixMX+"9333334082",
        ref_tel2: prefixMX+"",
        mail:"gparaisocentro@santandreu.com.mx"    
      },
      {       
        nombre:"Paraíso Dos Bocas",
        coordenadas: {lat: 18.3941711, lng: -93.2233896} ,        
        direccion: "Carretera Estatal Paraiso-Comalcalco, R/A Moctezuma 1ra Sección<br />Paraíso, Tabasco<br /> CP 86600",
        horario: "Lunes a Viernes: 7:00 am - 7:00 pm <br /> Sábados: 7:00 am - 4:00 pm <br /> Domingos: 8:00 am - 2:00 pm",
        telefono1: "(933) 333 36 61" ,
        telefono2: "",
        ref_tel1: prefixMX+"9333333661",
        ref_tel2: prefixMX+"",
        mail:"gerenciaparaiso@santandreu.com.mx"    
      },
      {       
        nombre:"Carmen Matriz",
        coordenadas: {lat: 18.6520566, lng:-91.7967542} ,        
        direccion: "Carretera Carmen Puerto Real S/N, Colonia Luis Donaldo Colosio<br />Ciudad del Carmen, Campeche<br />",
        horario: "Lunes a Viernes: 7:00 am - 8:00 pm <br /> Sábados: 7:00 am - 5:00 pm <br /> Domingos: 7:00 am - 4:00 pm",
        telefono1: "(938) 383 11 65" ,
        telefono2: "(938) 383 11 66",
        ref_tel1: prefixMX+"9383831165",
        ref_tel2: prefixMX+"9383831166",
        mail:"gerenciacarmen@santandreu.com.mx"    
      },
      {       
        nombre:"Carmen Centro",
        coordenadas: {lat: 18.6414212, lng: -91.8319481} ,        
        direccion: "Calle 33 No. 23 Col. Centro<br />Ciudad del Carmen, Campeche<br />",
        horario: "Lunes a Viernes: 8:00 am - 7:00 pm <br /> Sábados: 8:00 am - 5:00 pm <br />",
        telefono1: "(938) 384 44 49" ,
        telefono2: "",
        ref_tel1: prefixMX+"9383844449",
        ref_tel2: prefixMX+"",
        mail:"carmencentro@santandreu.com.mx"    
      },
      {       
        nombre:"Campeche",
        coordenadas: {lat: 19.817444, lng: -90.5293997} ,        
        direccion: "Av. Patricio Trueba y Regil S/N Colonia Sascalum<br />Campeche, Campeche<br />",
        horario: "Lunes a Viernes: 8:00 am - 7:00 pm <br /> Sábados: 8:00 am - 4:00 pm <br />",
        telefono1: "(981) 813 94 50" ,
        telefono2: "(981) 813 94 51",
        ref_tel1: prefixMX+"9818139450",
        ref_tel2: prefixMX+"9818139451",
        mail:"gerenciacampeche@santandreu.com.mx"    
      },
       {       
        nombre:"Coatzacoalcos",
        coordenadas: {lat: 18.139232, lng: -94.4868442} ,        
        direccion: "Av. Universidad Veracruzana Km. 7+600, Col. Santa Cecilia<br />Coatzacoalcos, Veracruz<br />Frente a Plaza Forum",
        horario: "Lunes a Viernes: 8:00 am - 8:00 pm <br /> Sábados: 8:00 am - 6:00 pm <br />Domingos: 8:00 am - 2:00 pm",
        telefono1: "(921) 218 6100" ,
        telefono2: "",
        ref_tel1: prefixMX+"9212186100",
        ref_tel2: prefixMX+"",
        mail:"gerenciacoatzacoalcos@santandreu.com.mx"    
      },
      {       
        nombre:"Coatzacoalcos Centro",
        coordenadas: {lat: 18.146666, lng: -94.4184002} ,        
        direccion: "Calle Zaragoza #400 Esq. 16 de Septiembre, Col. Centro<br />Coatzacoalcos, Veracruz<br />",
        horario: "Lunes a Viernes: 8:00 am - 7:00 pm <br /> Sábados: 8:00 am - 5:00 pm <br />",
        telefono1: "(921) 213 09 94" ,
        telefono2: "",
        ref_tel1: prefixMX+"9212130994",
        ref_tel2: prefixMX+"",
        mail:"coatzacoalcoscentro@santandreu.com.mx"    
      },
      {       
        nombre:"Minatitlán",
        coordenadas: {lat: 17.989318, lng: -94.5619352} ,        
        direccion: "Av. Justo Sierra No. 156 entre Lisboa y París, Col. Nuevo Minatitlan Sur<br />Minatitlán, Veracruz<br />",
        horario: "Lunes a Viernes: 8:00 am - 7:00 pm <br /> Sábados: 7:00 am - 6:00 pm <br />Domingos: 8:00 am - 2:00 pm",
        telefono1: "(922) 225 76 08",
        telefono2: "(922) 225 7640",
        ref_tel1: prefixMX+"9222257608",
        ref_tel2: prefixMX+"9222257640",
        mail:"gerenciaminatitlan@santandreu.com.mx"    
      }                      
    ]
    var i = 0
    var j
    var nombreMapa="map-"
    var mapa
    var nombreTitulo="titulo-"
    var titulo
    var marker
    var nombreHorario="horario-"
    var horario
    var nombreDireccion="direccion-"
    var direccion
    var nombreTel1="tel1-"
    var tel1
    var nombreTel2="tel2-"
    var tel2
    var nombreMail="mail-"
    var mail
    var nombreRefMail="ref-mail-"
    var refMail

   function initMap() { 
      for (i=0; i<arregloSuc.length; i++){
        j=i+1

        titulo=document.getElementById(nombreTitulo+j);
        titulo.innerHTML=arregloSuc[i].nombre;

        horario=document.getElementById(nombreHorario+j);
        horario.innerHTML=arregloSuc[i].horario

        direccion=document.getElementById(nombreDireccion+j)
        direccion.innerHTML=arregloSuc[i].direccion

        tel1=document.getElementById(nombreTel1+j)
        tel1.innerHTML=arregloSuc[i].telefono1
        tel1.href="tel:"+arregloSuc[i].ref_tel1

        tel2=document.getElementById(nombreTel2+j)
        tel2.innerHTML=arregloSuc[i].telefono2
        tel2.href="tel:"+arregloSuc[i].ref_tel2

        mail=document.getElementById(nombreMail+j)
        mail.innerHTML='<i class="material-icons circle orange">mail</i><p>'+arregloSuc[i].mail+'</p>'
        mail.href="mailto:"+arregloSuc[i].mail

        mapa= new google.maps.Map(document.getElementById(nombreMapa+(i+1)),{
          center: arregloSuc[i].coordenadas,
          zoom: 16,
          scrollwheel:true,
          fullscreenControl:true
          });

        marker = new google.maps.Marker({
          position: arregloSuc[i].coordenadas,
          map:mapa,
          title: "Sucursal "+arregloSuc[i].nombre
          })
      }
  }
