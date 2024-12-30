access elements:getElementsById ( let element = document.getElementById("codehelp1");)
                getElementByClass(  let element = document.getElementsByClassName('code1');
                                    element[0].style.backgroundColor = "red";)
                Getelementbytag(let element = document.getElementsByTagName("p");)
                querySelector (let element = document.querySelector(".welcome");)
                                let element = document.querySelectorAll(".welcome");

update:(innerHTML,outerHTML, text-content,innerText)
    ->  innerHTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript</title>
    </head>
    <body>
        <p id="myPara">
            This element     has <span>spacing</span>
        </p>
    
    
        <script>
          //Selecting the element with id "myPara"
              let myElement = document.getElementById("myPara");
          
              //Now retrieving innerHTML of the selected element
              let content = myElement.innerHTML;
          
              console.log(content);
          
              /* Output:
              This element     has <span>spacing</span>
              */
          
          //Let's try to change the content of selected element
              let newPara = "Hello Dosto";
              myElement.innerHTML = newPara;
          </script>
    </body>
    </html>

    ->   outerHTML
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <p id="myPara">
        This element     has <span>spacing</span>
    </p>



    <script>
      //Selecting the element with id "myPara"
          let myElement = document.getElementById("myPara");
      
          //Now retrieving outerHTML of the selected element
          let content = myElement.outerHTML;
      
          console.log(content);
      
          /* Output:
          <p id="myPara">
              This element     has <span>spacing</span>
          </p>
          */
      
      //Let's try to change the content of selected element
      // Setting outerHTML content (replaces the entire element)
          let newPara = '<div>Hiii</div>';
          myElement.outerHTML = newPara;
    </script>
</body>
</html>
    ->   text-content 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <div id="myPara">
        This element     has <span>spacing</span>

        <p style="display: none">This has a property Hidden</p>
    </div>



    <script>
      //Selecting the element with id "myPara"
          let myElement = document.getElementById("myPara");
      
          //Now retrieving textContent of the selected element
          let content = myElement.textContent;
      
          console.log(content);
      
          /* Output:
              This element     has spacing
      
              This has a property Hidden
          */
      
      //Let's try to change the content of selected element
          let newPara = 'Hiii';
          myElement.textContent = newPara;
      </script>
</body>
</html>
     ->   innerText

     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    <div id="myPara">
        This element     has <span>spacing</span>

        <p style="display: none">This has a property Hidden</p>
    </div>



    <script>
      //Selecting the element with id "myPara"
          let myElement = document.getElementById("myPara");
      
          //Now retrieving innerText of the selected element
          let content = myElement.innerText;
      
          console.log(content);
      
          /* Output:
          This element has spacing
          */
      
      //Let's try to change the content of selected element
          let newPara = 'Hiii';
          myElement.innerText = newPara;
      </script>
</body>
</html>
