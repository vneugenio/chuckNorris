const jokeButton = document.querySelector('button.get-jokes');

jokeButton.addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();

    // get external api data
    xhr.open('GET', 
             `http://api.icndb.com/jokes/random/${number}`,
            true);	

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';

            // loop through each element in the response.value Array
            if(response.type === 'success') {
                response.value.forEach(function(joke) {
                    output +=
                    `<li>${joke.joke}</li>`;
                });    
            } else {
                output += '<li>Something went wrong...</li>';
            }

            // Append to <ul>
            const ul = document.querySelector('ul.jokes');
            ul.innerHTML = output;
        }
    }
    
    xhr.send();

    e.preventDefault();
}