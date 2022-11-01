# secondProject-
JavaScript Quiz - It will be based on a single page application

# About the project 
This project will be a quiz assesing the basic knowledge of cars. It will showcase more JS skills and will be made of 20 questions in total. Users will actually be assessed on 5 random questions of the 20 and everytime the quiz is re-attempted the questions will be shuffled. The quiz will require users to answer the questions by selecting on one of the three options available. Once they have selected an answer and navigated through 5 questions, their results will be displayed on the score page. 

# quiz instructions 

The quiz required users to answer a set of 5 random car questions 

Once the quiz has started you cannot navigate back to the previous page

Once the quiz has been completed, your score will be displayed

If you chose to retake the quiz you can click on the restart button and you will be navigated back to the questions screen, where a new set of 5 questions will be displayed

To end the quiz simply click on the end quiz button and you will be navigated back to the home screen 

The quiz will promt you to insert your name before starting

# Modules to use 

- Vanilla JavaScript
- HTML
- CSS
- Bootsrap  


# Project structure 
- JS folder 
- CSS folder 
- Index.html

# Deployment 
This websquizite was created using visual studio which us an integrated development environment from Microsoft. It is used to develop computer programs, as well as websites, web apps, web services and mobile apps. I have made it live using Git pages. To do this I initiated the git repository with 'git innit', then used 'git status' to see which of my un-tracked files had not been added to the new repository. I used 'git commit -m "added in a specific message" to commit my changed files to the repository. Once my files were committed I used 'git push' to push all my new and changed files to GitHub before making it live with Git pages. I did this every time I made major changes to any part of my site.

# Acknowledgements 
- W3schools - Bootsrap links 
<!-- https://www.w3schools.com/bootstrap5/bootstrap_get_started.php for bootstrap links "latests complied and minified CSS + Latest complied Javascript"-->
    <!-- Latest compiled and minified CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./css/index.css" />      

- Stack overflow - Code to disable inspect so users cannot see quiz answer
<!-- code to disable inspect so users cannot see quiz answer 
    https://stackoverflow.com/questions/28690564/is-it-possible-to-remove-inspect-element-->
    <script>
      document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      document.onkeydown = function (e) {
        if (event.keyCode == 123) {
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
          return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
          return false;
        }
        if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
          return false;
        }
      };
    </script>

- Bootstrap button styles 
https://getbootstrap.com/docs/4.0/components/buttons/

- Bootstrap library 
https://getbootstrap.com/

- Shuffle Quiz and Slice the amount we want
/* https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array */

<script>
const shuffle = (quiz, number) =>
  quiz
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, number);
    >
</script>
#  Testing procedures and findings.
<h1> HTML file </h1>
<p> Consider adding a lang attribute to the html start tag to declare the language of this document - added lan tag</p>
<p> Bad value fullName for attribute type on element input. —> change type to text </p>
<p> No syntax errors! </p>

<h1> CSS file </h1>
https://jigsaw.w3.org/css-validator/
<p> No syntax errors! </p>

<h1>JS file  </h1>
https://beautifytools.com/javascript-validator.php
<p> 'e' is defined but never used - removed (e) from (storeUserNameBtn.addEventListener("click", function (e) )</p>
<p> 2 unused varibles (listOfQuestion and resultsContainer ) - removed these variables  </p>
<p> 'letter' is not defined - defined letter using const </p>
<p> The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype. - wrapped in an if statement 
<script>
if (letter > 0) {
				// ...add an HTML radio button 
				options.push(
					`<label class="form-check-label">
            <input type="radio" class="form-check-input"  name="question${
              questionNumber + 1
            }" value="${letter}" required>
            ${letter} :
            ${currentQuestion.options[letter]}
          </label>`
				);

			}
</script>
</p>
<p> Enabled new JavaScript features ES6 to fix the use 'esversion: 6' warnings.</p>

<p> No syntax errors! </p>


 