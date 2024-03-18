const cadenaTexto = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncriptar() {
  const textoIng = document.getElementById('ingresarTextoId').value;
  const textoEncriptado = encriptarTexto(textoIng, cadenaTexto);
  document.getElementById('mostrarTextoId').value = textoEncriptado;  
}

function encriptarTexto(textoIng, cadenaTexto) {
  let showTextEncript = "";
  for (let i = 0; i < textoIng.length; i++) {
    let CaracterEncriptado = textoIng[i]; 
    for (let j = 0; j < cadenaTexto.length; j++) {
            if (textoIng[i].toLowerCase() === cadenaTexto[j][0]) {
                CaracterEncriptado = cadenaTexto[j][1];
        break; 
      }
    }
    showTextEncript += CaracterEncriptado;
  }
  return showTextEncript;
}

function btnDesencriptar() {
  const textoIng = document.getElementById('ingresarTextoId').value;
  const textoDesencriptado = desencriptarTexto(textoIng, cadenaTexto);
  document.getElementById('mostrarTextoId').value = textoDesencriptado;
}

function desencriptarTexto(textoEncriptado, cadenaTexto) {
  let showTextDesencriptado = "";
  let i = 0;

  while (i < textoEncriptado.length) {
    let CaracterDesencriptado = textoEncriptado[i];

    for (let j = 0; j < cadenaTexto.length; j++) {
      const sustitucion = cadenaTexto[j][1].toLowerCase();

      if (
        textoEncriptado
          .substring(i, i + sustitucion.length)
          .toLowerCase() === sustitucion
      ) {
        CaracterDesencriptado = cadenaTexto[j][0];
        i += sustitucion.length - 1; 
        break;
      }
    }

    showTextDesencriptado += CaracterDesencriptado;
    i++;
  }

  return showTextDesencriptado;
}

function borrarTexto() {
  document.getElementById('mostrarTextoId').value = "";
}

function copiarTexto() {
  const textarea = document.getElementById("mostrarTextoId");
  textarea.select();
  try {
    const successful = document.execCommand('copy');
    const message = successful ? 'Texto copiado al portapapeles' : 'Error al copiar el texto';
    console.log(message);
  } catch (err) {
    console.error('Error al intentar copiar el texto:', err);
  }
}

