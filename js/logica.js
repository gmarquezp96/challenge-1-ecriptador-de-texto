/**
 * @author Gustavo Marquez Prieto
 * Challenge Encriptador de texto
 * */
function capturaValor() {
    const textarea = document.getElementById("textarea");
    const valor = textarea.value;
    return valor;
}

function accion(accionEjecutar) {
    let valor = capturaValor();
    if (valor == "") {
        alert("Por favor ingrese un texto");
        mostrarContenedorSinResultados();
        return;
    }
    valor = valor.toLowerCase();
    let texto = "";
    if (accionEjecutar === "encriptar") {
        texto = encriptarText(valor);
    } else {
        texto = desencriptarTexto(valor);
    }
    console.log("texto:", texto);
    mostrarContenedorResultados();
    const pTextResultado = document.getElementById("text-resultado");
    pTextResultado.innerHTML = texto;
}

function encriptarText(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}

function mostrarContenedorResultados() {
    const contenedorSinResultados = document.getElementById("contenedor-sin-resultados");
    contenedorSinResultados.classList.add("display-none");

    const contenedorConResultados = document.getElementById("contenedor-con-resultados");
    contenedorConResultados.classList.remove("display-none");
}

function mostrarContenedorSinResultados() {
    const contenedorSinResultados = document.getElementById("contenedor-sin-resultados");
    contenedorSinResultados.classList.remove("display-none");

    const contenedorConResultados = document.getElementById("contenedor-con-resultados");
    contenedorConResultados.classList.add("display-none");
}

function copiarTextoClipboard() {
    const textoResultado = document.getElementById("text-resultado");
    navigator.clipboard.writeText(textoResultado.innerHTML)
        .then(function () {
            alert("Texto copiado al portapapeles: " + textoResultado.innerHTML);
        })
        .catch(function (error) {
            console.error("Error al copiar el texto: ", error);
        });
}
