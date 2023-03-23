function searchEnemy() {
	var name = $('#search-input').val();
	$.ajax({
		url: 'https://api.genshin.dev/enemies/' + name,
		method: 'GET',
		success: function(data) {
			const enemyCard = document.createElement('div');
			enemyCard.classList.add('card');

	

			const enemyName = document.createElement('h2');
			enemyName.textContent = data.name;

			const enemyDescription = document.createElement('p');
			enemyDescription.textContent = data.description;

	
			enemyCard.appendChild(enemyName);
			enemyCard.appendChild(enemyDescription);

			$('#search-results').html(enemyCard);
		},
		error: function() {
			$('#search-results').html('<p>Enemy not found.</p>');
		}
	});
}
