///adding the component(child)
let mydiv= document.querySelector('#mydiv');
// Create a new paragraph element
let paragraph = document.createElement('p');

//Add text Content to the new Paragraph
paragraph.textContent = "Hello is a paragraph";

// Append paragraph to the body of document element
document.body.appendChild(paragraph);

mydiv.insertAdjacentElement('beforebegin',paragraph);
// note: in place of beforebegin , we can write beforeend,afterend,afterbegin



////////////removal of child
let parent=document.querySelector('#mydiv');
let child=document.querySelector('#fpara');
parent.removeChild(child);


/////////////css changing
// Accessing an element
const element = document.getElementById("myElement");

// Setting a style property
element.style.property = "value";

// Getting a style property
const propertyValue = element.style.property;

////////////
// Select the element
const element = document.getElementById('exampleElement');

// Modify its CSS properties using cssText
element.style.cssText = 'color: blue; font-size: 18px; background-color: green;';

//setAttribute()
<!DOCTYPE html>
<html>
<head>
    <title>setAttribute() Example</title>
</head>
<body>

    <p id="demo">This is a paragraph.</p>

    <button onclick="addAttribute()">Add Attribute</button>

    <script>
        function addAttribute() {
            var para = document.getElementById("demo");
            para.setAttribute("style", "color: red; font-size: 20px;");
            para.setAttribute("class", "highlight");
        }
    </script>

</body>
</html>