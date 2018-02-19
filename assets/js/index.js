//agregando evento al boton de buscar
$('#button').click(function(){
  const pokeName = $('#search-bar').val();
  const pokeNormal = pokeName.toLowerCase();
  $.ajax({
    url: `https://swapi.co/api/people/`,
    type: 'GET',
    datatype: 'json',
    success: function(results){
      console.log(results);
    }
  })
  .done(response)
  .fail(error);
  function response(data) {
    $('#swinfo').empty();
    const swPicture = ""
    const swName = data.name;
    const swHeight = data.height;
    const swGender = data.gender;
    const swmass = data.mass;
    const swbirthYear = data.birth_year;
    $('#modalswInfo').empty();
    $('#swnfo').append(`<img class="poke-imagen poke-img-modal" src="${swPicture}" data-toggle="modal" data-target="#modalPokeInfo"><h4><strong>${data.name}</strong></h4>`);
    $('#modalswInfo').append(`<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h3 class="modal-title">Información </h3></div><div class="modal-body"><p>Número de Pokedex: ${swHeight}</p><p>Tipo: ${swGender}</p><p>Peso: ${swmass}</p><p>Altura: ${swPicture}</p><p>Experiencia base: ${swGender}</p><p>Habilidades: ${swName}</p></div></div></div>`)
  }

  function error(){
    alert('Ha ocurrido un error')
  }
})
