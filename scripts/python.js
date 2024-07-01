let pyDoc = ``;
dataPy.forEach((data) => {
  pyDoc += `

  <div class="python-topics">
        
          <ul>
            <a href="../pagelinks/python.html"><li>Python Intro</li><a>
            <a href="#"><li>Python Get Started</li><a>
            <a href="#"><li>Python Syntax</li><a>
            <a href="#"><li>Python Comments</li><a>
            <a href="#"><li>Python Varriables</li><a>
            <a href="#"><li>Python DataTypes</li><a>
            <a href="#"><li>Python Numbers</li><a>
            <a href="#"><li>Python Casting</li><a>
            <a href="#"><li>Python String</li><a>
            <a href="#"><li>Python Boolean</li><a>
            <a href="#"><li>Python Operators</li><a>
            <a href="#"><li>Python Lists</li><a>
            <a href="#"><li>Python Tuples</li><a>
            <a href="#"><li>Python Sets</li><a>
            <a href="#"><li>Python Dictionaries</li><a>
            <a href="#"><li>if...Else</li><a>
            <a href="#"><li>Python While Loop</li><a>
            <a href="#"><li>Python For Loop</li><a>
            <a href="#"><li>Funtions</li><a>
            <a href="#"><li>Lamda</li><a>
            <a href="#"><li>Arrays</li><a>
            <a href="#"><li>Classes and Objects</li><a>
            <a href="#"><li>Inheritance</li><a>
            <a href="#"><li>Iterators</li><a>
            <a href="#"><li>Polymorphism</li><a>
            <a href="#"><li>Python Scope</li><a>
            <a href="#"><li>Python Modules</li><a>
            <a href="#"><li>Python Dates</li><a>
            <a href="#"><li>Python Math</li><a>
            <a href="#"><li>Python User-input</li><a>
          </ul>
        </a>
      </div>
  
    <div id="blog-post">
        <h1 class="blog-post-h1">${data.h1}</h1>
        <p class="blog-post-p">${data.p}</p>
        <p class="blog-post-p">${data.p2}</p>

        <div>
        <h3 class="blog-post-p"> ${data.h6} </h3>
        <span> Go to: </span>
        <a href="https://www.python.org/downloads/" target= "blank"> ${data.a}  <a>
        <span>Get it for whatever operating system you are using! </span>

<p class="blog-post-p">Secondly, installing visual studio code: search VS code from your browser.
If you already have the prefered one then it's just fine. <u> and make sure you have the python extension needed to run the code </u></p>
 
<h3> Your first hello world programme in Python. </h3>

<div class="python-code-example">
      <p> <span class="programme-color">print<span> <span class = "programme-statement">("Hello World!")<span></p>
   
    <img width='50%'  src='../img/output.png' />
      </div>

        </div>

     
      
      
      `;
});

document.querySelector(".js-py-data").innerHTML = pyDoc;
