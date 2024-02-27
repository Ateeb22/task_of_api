document.addEventListener('DOMContentLoaded', function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            // Use map to create an array of list item strings
            var listItems = json.map(user => {
                return `<li>${user.name} - ${user.email} - ${user.address.street} - ${user.address.city} - ${user.address.zipcode}</li>`;
            });

            // Create the user list by joining the list item strings
            var userListHTML = `<ul>${listItems.join('')}</ul>`;

            // Append the user list to the container3 label
            document.getElementById('userListContainer').innerHTML = userListHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});



// document.addEventListener('DOMContentLoaded', function () {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(json => {
            
//             var userList = document.createElement('ul');

//             json.forEach(user => {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = `${user.name} - ${user.email} - ${user.address.street} - ${user.address.city} - ${user.address.zipcode}`;
//                 userList.appendChild(listItem);
             
//             });
             
//             document.getElementById('userListContainer').appendChild(userList);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });




// fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())      // For fetching data and print on console
// .then(json => console.log(json))



// fetch("https://jsonplaceholder.typicode.com/users")      // fetching data and print on HTML main page but gui not showing
// .then(response => response.json())
// .then(json => {
    
//     document.write("<h2>User Data:</h2>");
//     document.write("<ul>");

//     json.forEach(user => {
//         document.write(`<li>${user.name} - ${user.email} - ${user.address.street} - ${user.address.city} - ${user.address.zipcode}</li>`);
//     });

//     document.write("</ul>");
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });