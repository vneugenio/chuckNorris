const button = document.querySelector('button#button');

button.addEventListener('click', loadData);

function loadData() {
    // Create XHR Object -- instance of XHR
    const xhr = new XMLHttpRequest();
    
    // OPEN
    // object of XMLHTTPRequest
    // 1st parameter is "Request type", 2nd is file to open/access
    // 3rd parameter, specify if asynchronous by true or false
    // xhr.open('GET', 'data.txt', true)
    // GET - just read the url or file
    // .responseText -- data in the file read
    xhr.open('GET', 'dummy_data/data.txt', true);


    // Optional - Commonly used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', this.readyState);
    }

    

    //Error
    xhr.onerror = function() {
        console.log('Request Error...');
    }




    // console.log('READYSTATE', xhr.readyState);

    // .onload is trigerred only when readyState value is 4
    xhr.onload = function() {
        console.log('READYSTATE', this.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            const div = document.querySelector('div#output');
            div.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onreadystatechange = function() {
        console.log('READYSTATE', this.readyState);
        if(this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }


   
    // xhr.addEventListener('readystatechange', function(){
    //     console.log(this.readyState);
    // })

    // send data
    xhr.send();
}

/*
    readyState Values:
    0 - request not initialized
    1 - server connection established
    2 - request received
    3 - processing request
    4 - request finished and response is ready 
*/

/*
    COMMON HTTP STATUS:

    200 - "OK"
    403 - "Forbidden"
    404 - "Not found"
*/