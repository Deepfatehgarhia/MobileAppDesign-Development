/*
Ajax ("Asynchronous JavaScript And XML")
is a set of Web development techniques using many Web technologies
on the client side to create asynchronous Web applications.
With Ajax, Web applications can send and retrieve data from
a server asynchronously (in the background) without interfering
with the display and behavior of the existing page.
By decoupling the data interchange layer from the presentation layer,
Ajax allows Web pages, and by extension Web applications, to change
content dynamically without the need to reload the entire page.
In practice, modern implementations commonly utilize JSON instead
of XML due to the advantages of JSON being native to JavaScript.

Ajax is not a single technology, but rather a group of technologies.
HTML and CSS can be used in combination to mark up and style information.
The webpage can then be modified by JavaScript to dynamically display
– and allow the user to interact with — the new information.
The built-in XMLHttpRequest object within JavaScript is
commonly used to execute Ajax on webpages allowing websites
to load content onto the screen without refreshing the page.
Ajax is not a new technology, or different language,
just existing technologies used in new ways.
*/

var buttonAdd = document.querySelector("#search-patients");

buttonAdd.addEventListener("click", function() {
    /* Let's create an object to estabish a http request */
    var xhr = new XMLHttpRequest();
    /* Let's define what we want to do and where */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    /* Let's add a listener to show the result that come up from the server */
    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});
