<?php 
    $nombre = $_POST['nombre'];
    if (isset($_POST["sucursal"])){
      $sucursal =$_POST["sucursal"];
    }
    else
      $sucursal="0";
    
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $ciudad = $_POST['ciudad'];
    $email_to="";

    switch ($sucursal) {
      case '1':
        $email_to="gerenciaconstitucion@santandreu.com.mx";
        break;
      case '2':
          $email_to="gerenciaindustrial@santandreu.com.mx";
        break;
      case '3':
          $email_to="gerenciaperiferico@santandreu.com.mx";
          break;
      case '4':
          $email_to="galeana@santandreu.com.mx";
          break;
      case '5':
          $email_to="gerenciacardenas@santandreu.com.mx";
          break;
      case '6':
          $email_to="gerenciacomalcalco@santandreu.com.mx";
          break;
      case '7':
          $email_to="gerenciacunduacan@santandreu.com.mx";
          break;
      case '8':
          $email_to="gerenciamendez@santandreu.com.mx";
          break;
      case '9':
          $email_to="gerenciacarmen@santandreu.com.mx";
          break;
      case '10':
          $email_to="gerenciacoatzacoalcos@santandreu.com.mx";
          break;
      case '12':
          $email_to="carmencentro@santandreu.com.mx";
          break;
      case '14':
          $email_to="gerenciaminatitlan@santandreu.com.mx";
          break;
      case '16':
          $email_to="coatzacoalcoscentro@santandreu.com.mx";
          break;
      case '18':
          $email_to="gerenciaguayabal@santandreu.com.mx";
          break;
      case '21':
          $email_to="gerenciabandala@santandreu.com.mx";
          break;
      case '23':
          $email_to="gerenciajalpa@santandreu.com.mx";
          break;      
      case '32':
          $email_to="anahizentella@santandreu.com.mx";
          break;     
      case '34':
          $email_to="gparaisocentro@santandreu.com.mx";
          break;
      case '35':
          $email_to="gerenciaparaiso@santandreu.com.mx";
          break;      
      default:
          $email_to="webmaster@santandreu.com.mx";
        break;
    }

    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $cabeceras = "From: $email\n" //La persona que envia el correo
    . "Reply-To: $email\n"
    ."Fecha: date('m/d/Y g:ia')";
    $asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
    $contenido = "$nombre ha enviado un mensaje desde la web www.santandreu.com.mx\n"

.     "\n"
.     "sucursal: $sucursal\n"
.     "Nombre: $nombre\n"
.     "Email:  $email\n"
.     "Ciudad:  $ciudad\n"
.     "Mensaje: $mensaje\n"
.     "\n";
 
//Enviamos el mensaje y comprobamos el resultado
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
 
//Si el mensaje se envía muestra una confirmación

    die("Gracias, su mensaje se envio correctamente.");
      header("Location: ../contacto.html");

    }else{
 
//Si el mensaje no se envía muestra el mensaje de error
    die("Error: Su información no pudo ser enviada, intente más tarde");
    }


?>