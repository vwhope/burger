# burger

Click link to run deployed version: [burger](https://obscure-scrubland-98511.herokuapp.com/)

### a full-stack web application
using: jQuery, JavaScript, Node.js, Express, Express-Handlebars, MySQL, and a custom ORM, following MVC design pattern 

**Problems to Solve**
* dynamically serve content to user
* provide persistent data storage
* control user interaction with back-end database using front-end display
* allow for separation of concerns to improve maintainability and expandability of code
* deploy full-stack project for others to use

**Solution** 

* Apply handlebars templating to dynamically update user's display
* Use MySQL database for persistent data storage
* Combine MySQL, Express and AJAX for routing and CRUD operations
* Follow Model View Controller (MVC) design pattern to separate code into 
  data, presentation and control files.
* Deploy project using Heroku
 

**Technical Skills demonstrated in project:**
* Project design considerations
  * determine project architecture - MVC pattern
  * utilize RESTful design
  * determine database needs
  * consider interoperability of front-end and back-end components  
* Other technologies
    * JavaScript
    * jQuery
    
**Goals of program:**
* display a list of burgers to user 
* burgers waiting to be eaten on left side of display
* burgers eaten displayed on right side of display 
* allow user to add a burger to the list and see it appear in real-time
* allow user to click "Devour It!" button to "eat" burger and move to right side of screen
* all burgers entered in GUI persist in database

**Setup To run program on your own system:**
* Node.js and MySQL must be installed on your system 
* clone the burger repo into a dirctory on your system
* from command line while in that directory key: npm install
* naviagate to the directory "db", then from command line key:
   ```
   source schema.sql
   source seeds.sql
   ``` 
* navigate to project root directory on your system, key: 
 ```
 node server.js
  ```
* in browser, navigate to "http://localhost:8080", you should see the burger application

![Burger Application Page](/public/assets/img/index.jpg)

* click "Devour It!" button beside any burger on left side list
* clicking devour button will move burger to right side list
* may also enter a new burger name to list, 
   just enter name, then click "Add-Da-Burger!" button to add it to left side list

**Resource Contributors:**
* Burger Image from: [kisspng](https://kisspng.com/free/burgers.html)


**Future Enhancement Ideas:**
* improve user interface and design
* add Update option for changing burger name or devour status
* add favicon
* improve mobile responsive design
