const encriptado = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat","A":"Ai-3","E":"Enter-3","I":"Imes-3","O":"Ober-3","U":"Ufat-3"};
alert(9);
function RecuperarDatosEntrada(){
    let TextArea = document.querySelector("textarea");
    let texto = TextArea.value;
    return texto;
}

function BotonEncriptar(){
    let texto = RecuperarDatosEntrada();
    let CuadroDeSalida = document.getElementsByClassName("CuadroDeSalida");
    let imagen = document.getElementsByClassName("ImgMuneco");
    
    if (texto != ""){
        imagen[0].style.display="none";
        CuadroDeSalida[0].style.display="block";
        document.querySelector(".Salida h1").style.display="none";
        document.querySelector(".Salida p").style.opacity=0;
        document.querySelector("#BotonCopiar").style.display="block";
        var TextoEncriptado = "";
        for(let i=0;i<texto.length;i++){
            if(encriptado.hasOwnProperty(texto[i])){
                TextoEncriptado=TextoEncriptado + encriptado[texto[i]];

            }else{
                TextoEncriptado=TextoEncriptado+texto[i];
            }           
        }

        CuadroDeSalida[0].innerHTML= TextoEncriptado;

    }else{
        CuadroVacio();
    }    
}
function CuadroVacio(){

    let CuadroDeSalida = document.getElementsByClassName("CuadroDeSalida");
    if (window.innerHeight > 500){
        let imagen = document.getElementsByClassName("ImgMuneco");
        imagen[0].style.display="block";
    }
    document.querySelector(".Salida h1").style.display="block";
    CuadroDeSalida[0].style.display="none";
    document.querySelector(".Salida p").style.color= "#343A40";
    document.querySelector(".Salida p").style.opacity = 1;
    document.querySelector(".Salida p").innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
    document.querySelector("#BotonCopiar").style.display="none";
    document.querySelector(".Salida p").style.display="block";
}

function BotonDesencriptar(){

    let texto = RecuperarDatosEntrada();
    let CuadroDeSalida = document.getElementsByClassName("CuadroDeSalida");
    let imagen = document.getElementsByClassName("ImgMuneco");
    
    if (texto != ""){
        imagen[0].style.display="none";
        CuadroDeSalida[0].style.display="block";
        document.querySelector(".Salida h1").style.display="none";
        document.querySelector("#BotonCopiar").style.display="block";
        var TextoDesencriptado = "";
        for(let i=0;i<texto.length;i++){
            if(encriptado.hasOwnProperty(texto[i])){
                TextoDesencriptado=TextoDesencriptado + texto[i];
                i= i + encriptado[texto[i]].length-1;
            }else{
                TextoDesencriptado=TextoDesencriptado+texto[i];
            }           
        }

        CuadroDeSalida[0].innerHTML= TextoDesencriptado;

    }else{
        CuadroVacio();
    }
}

function BotonCopiar(){
    let CuadroDeSalida = document.getElementsByClassName("CuadroDeSalida");
    CuadroDeSalida[0].select();
    document.execCommand("copy");    
    let p = document.querySelector(".Salida p");
    p.innerHTML = "Texto copiado correctamente";
    p.style.opacity=0;
    let contador = 0;
    let decremento = 1;
    
    let animacion = setInterval(() => {
        contador+=1;
        p.style.opacity = 0.01*contador;
        if (contador >= 100){
            decremento -= 0.01            
            p.style.opacity = decremento;
            if(contador==200){
                clearInterval(animacion);
            }
        } 
    }, 10);
}
