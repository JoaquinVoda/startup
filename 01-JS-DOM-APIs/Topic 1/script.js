
$(document).ready(function(){	
	traerRepos();
	$('.oculto').fadeIn(2000);
	$('.boton').click(joke);
	$('.buscar').click(buscarRepos);
	/*showMatrix(tabla);*/
});

function joke(){
	var url="http://api.icndb.com/jokes/random";
	
	$.getJSON(url, function(joke){
		$(".oculto").text(joke.value.joke);	
	});
	$.fail(function(){
  		$(".oculto").css('color', 'red');
 	});
};

function traerRepos(){
	var repos = $('ul#repos');
	var url = 'https://api.github.com/search/repositories';
	var data = { q : 'JavaScript'};

	$.getJSON(url, data, function(items){
		$.each(items.items, function(i, item){
			$('<li>' + item.full_name + '</li>').appendTo(repos);
			//repos.append('<li>' + item.full_name + '</li>');
		});
	});
};


function buscarRepos(){
	var repos = $('ul#repos');
	var url = 'https://api.github.com/search/repositories';
	var busqueda = $('#buscar').val();
	var data = { q : busqueda };

	$.getJSON(url, data, function(items){
		repos.empty();
		$.each(items.items, function (i, item){
			$('<li>' + item.full_name + '</li>').appendTo(repos);
		});

	});
};

/*function showMatrix(clase){

	var datos = [{"Nombre" : "Joaquin" , "Apellido" : "Voda" , "Edad" : "20"},
				{"Nombre" : "Santiago" , "Apellido" : "Grecco" , "Edad" : "20"} ];

	var columnas = ["Nombre", "Apellido", "Edad"];

	var seccion = $("#matrix");
	$("<table id=>" + clase + "</table>").append(seccion);

	$.each(datos, function(i, dato){
		var tr = $("<tr>");

		$.each(columnas, function(i , columna){
			$("<th>").html(dato[columna]).appendTo(tr);
		});
	});

};*/