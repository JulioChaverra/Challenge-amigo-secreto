let listado = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo');
  let nombreAmigoText = nombreAmigo.value
  nombreAmigo.value = '';
  listado.push(nombreAmigoText);
  let listadoAmigos = document.getElementById('listaAmigos');
  listadoAmigos.innerHTML = '';
  for(let i = 0; i < listado.length; i++) {
    listadoAmigos.innerHTML += '<li>' + listado[i] + '</li>';
  }
  if (nombreAmigoText === '') {
    alert('El campo de texto no puede estar vacío.');
    return false
  } 
}