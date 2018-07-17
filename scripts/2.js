const button1 = document.querySelector('.container button#button1');

const button2 = document.querySelector('.container button#button2');

button1.addEventListener('click', loadCustomer);
button2.addEventListener('click', loadCustomers);

function loadCustomer(e) {
    e.stopPropagation();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'scripts/customer.json', true );

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            // create customer object from json data
            const customer = JSON.parse(this.responseText);

            // display as list to html
            const output = 
                `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
            document.querySelector('div#customer').innerHTML = output;
        }
    }

    xhr.send();    
    
}


// Load Customers
function loadCustomers(e) {
    e.stopPropagation();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'scripts/customers.json', true );

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            // create customer object from json data
            const customers = JSON.parse(this.responseText);

            let output = '';

            // display as list to html, looping through each object element
            customers.forEach(function(customer) {
                output += 
                    `<ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>`;
            });
            
            document.querySelector('div#customers').innerHTML = output;
        }
    }

    xhr.send(); 
}