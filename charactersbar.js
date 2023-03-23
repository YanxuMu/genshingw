function searchCharacter() {
	var name = $('#search-input').val();
	$.ajax({
		url: 'https://api.genshin.dev/characters/' + name,
		method: 'GET',
		success: function(data) {
			$('#search-results').html(`<h2>${data.name}</h2><p>${data.description}</p>`);
		},
		error: function() {
			$('#search-results').html('<p>Character not found.</p>');
		}
	});
}



