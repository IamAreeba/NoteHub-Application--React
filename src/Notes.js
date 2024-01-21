  

// ========================== 01 ============================= //
/*
. In Frontend we use React. In Backend we will make backend API's and we make it using Express.JS
. We will make frontend and backend individual
. For Express we have to just install the package
    Express.JS: $ npm install express --save 
. Does node module of frontend and backend diff or same? They will be diff cuz we make backend as a separate entity. 
  It will be like external API 
. When we deploy our apps we install mongoDB on server but we are installing it on windows cuz i am doing development in this machine

*/


// ========================== 02 ============================= //
/*
. WebApp: We have use External API. We connected with React and how to make http request we have seen that inside React
. Now we will make our own API we'll not dependent on anyone and well use MERN Stack for this
. We can open terminal from any folder
. We our making project on Notebook. This Notebook is basically Notebook on the cloud. We can take notes on cloud.
    e.g. We are studying book we can make notes from it and save it on cloud. And if i am working on my computer i can login and retrive that 
         notes and other user can similarly retrive its notes. He cant see mine notes and i cant see his notes. Nobody can see anyones notes
         and application will be one means aik hi rahe gi.
. I can login from anywhere and retrive data from DB. And i can only update mine data
. So for all of this work we have to make our own API using Express Server
. Our API and React portion will be different
. Currently we are making React Application and later we make API. That will be our Node.JS project. 
. This React project and API project will be independent. Their Node Modules will be different why we our not merging cuz :
   Suppose our API is hitted alot of times so our React app is static app it will directly download from server and go to client browser.
   After coming to browser most hitted thing will be our API. So we want our API to be in the strong server and frontend to be on the weaker
   server. Cuz our frontend is only downloaded once and API is hitted alot. 
. Why our React is built on HTML, CSS, JS once gone to client and that all work will done on client. Maybe we download some static assests
  from React app but in most of cases our backend is hitted alot.
. This project is basically NoteBook on the cloud. We have login, signup, security, backend, hosting.
. We can make this app to the next level and make social media app and add web socket
. Inside this project we make folder of Backend in React. But acc to production pov u have to make backend and frontend individually

. Now we are setting up backend using: npm init
. We have to give name to our backend and we have initialized repo. And our package.json is made
. Now we download packages
  Downloading packages:
    . write => npm i express: for express server
    . Write => npm i mongoose 
        Mongoose is basically abstraction layer on top of MongoDB. It help to connect to our Node.JS app. We can make models using this package

Made index.js for entry point of our app
So we have made Node.JS backend it has no connection with React app. We'll connect react app with this. But this is a separate entity.
ThunderClient: To test the API We test our localhost in this
We have to push backend nodemodules folder in .gitnore file


*/

// ========================== 03 ============================= //
/*
. Previously we have made backend
. Since we have made backend in this NoteHub means with React App so the gitignore file of React also included the 
  node module folder of it.
. We are not pushing nodemodule folder in it
. Now we are working with backend for this we have install 2 packages express and mongooes
. Mongoose: Mongoose is made on top of MongoDB cuz we face MongoDB validation, casting, business logics problems etc
. In MongoDB we are using local DB. Means data will be on our computer. So when we fill the things manually it will give me local connection 
  string and we have to use it or parse it in our project to connect to Mongooes 
. So our main work is to connect to Mongooes. We have get the local connection string from MongoDB Compass
. First we connect to our DB for this we make db.js


. To connect to MongoDB server we have to get mongooes. Here we are not using esx modules we are using common.js modules cuz we are in
  Node.JS  ==> 1 line

. URI => We have basically pasted the connection string from MongoDB Compass  ==> 2 line

. To connect to Mongo we are making func. We can deal with promises cuz Mongo return promises but we are using async
  await here how we have to make the func async and we will be doing some waiting inside these func it will keep us waiting means we wait 
  for the promise to be resolve.
. mongoose.connect take 2 param . second param will be a call back func we can make async await func as well . So we are using call back func
  it will return you something so we are returning console. ==> 3 Line whole func
  Now how to use this func we are basically importing this db.js module in index.js

. We have to export the func. ==> 4 line

. And we have run the index.js after writing code. In console we have to write npm i -D nodemon. Why use -D cuz i want that to be as
  devDependencies in my app. I dont want it to be a part of my application

. Then write nodemon .\index.js. After running this we get what inside that db.js func. So our connection is running 
. But this index.js will be our Express server. So goto express.js website and take boiler plate code and write in index.js. After writing
  this our console automatically restart.
  First index.js code will run then db.js code will run although it is written at the top cuz mongo take time to connect.
. Understand async nature of JS. JS work on non blocking nature. Our main thread doesnt block. When func are ready callBack fire automatically
  Now testthat URL in the Thunder Client and it will give you what ever you have written in your endPoint means in app.get() 
  e.g. Hello Areeba
. nodemon benefit is that we dont have to start or run the app it will do it autimatically

So we are done with db.js. We have just simply written the func by which we have connected with DB. If i have to deploy any other place i 
will just change the connection string 

. We have made only one end point with app.get() which is returning Hello Areeba. But our NoteHub need more end point to write in MongoDB, end 
  points to authenticate user, which user is connected when, and how many notes of which user to fetch
. What ever the notes we have written we have to fetch that and show in our React UI

. Our nodemon version has changed so we have used different func


*/

// ========================== 04 ============================= //
/*
  . We are talking about app structure
  . I can write all my routes in index.js. Like Login, SignUp etc. And when i navigate to that URI i will get what i have written inside it
  . But we make all that routes in individual files like login, signup etc
          app.get('/api/v1/login', (req, res) => {
            res.send('Hello Login!')
          })
          URI: http://localhost:3000/api/v1/Login

          app.get('/api/v1/signup', (req, res) => {
            res.send('Hello SignUp!')
          })
          URI: http://localhost:3000/api/v1/SignUp

  . What will be inside our app ?  All Mongoose models
  . Maintain good folder structure
  . DB ==> Collections or Multiple Collections ==> Documents(JSON)
    e.g
  . Family ==> Areeba / Areeba Aiman ==> id, name, email etc.
  
  . MongoDB has pros and corns:
    Pros: Can write data in any way
    Corns: our app management will be disturb with this
  . So the main Advanatage of Mongoos is that he says you run your app i'll manage all your DB work

  . So we only make models in our app.
  . User.JS: User who always do login

  . module.exports = mongoose.model("user", UserSchema)   ==> Making schema through models 
  . 28 Line => Model name and schema name 
  . We are making the schemas and later we use them in routes
  . tag: college work, To Do item etc
  . ./ : Current folder
 
  . We have made 2 schemas: User.js and Notes.js and put it inside models. Cuz we have made the models using schema
  . We use app.use to link to routes
  . require: making individual route file
  . Inside auth and notes.js we use router 
  . previosuly we were using app.get() but now we are using router.get()
  . so after writing /api/auth we can get remaining path from routes/auth.js
  . All Authentication endpoint we'll write on auth.js
  . All notes endpoint we'll write on notes.js
  . We have made schema from notes model and user.js se model banaya
  . Schema: Logical connection of DB object
  . By using mongoose we get free validations
  . Later we make those end points which our React app uses
  e.g. 
      Login endpoint, signup endpoint, notes fetch delete, whole notes crud

*/

// ========================== 05 ============================= //
/*
  . In auth.js inside router.get we are only sending response we are not sending request thats why we get undefined in console and when we  tested the URI in ThunderClient we have seen hello Areeba
      router.get('/', (req, res) => {
        console.log("Request" , req.body)
    })

  . How to send any thing in Request body ? 
  . Why undefined cuz we havent added anything in request body (In thunder client)
  . To see the request in console write something in request body through  (Thunder Client)  and also we have to use middle-ware in index.js
    and also set the header
  . Now i can deal in Json. Make request in Json

  . Now we are working on endpoints auth.js
    . First thing we have to do in our api is to "create a user"

  . It doesnt require authentication cuz i can see it clearly that " If this endpoint require logged in or not "
  . Now to create user i have send user data. To send user data like name, gender see the User model. 
  . Never send password in plain text 
  . So in the above i have basically made end point to create User. But i havent use the User. So taking User model in Routes.
        const User = require('../models/User')
  . Now how to create new user how ? 
        const user = User(req.body)
        user.save()
  . And also import schema from mongoose : const { Schema } = mongoose; in User 
  . Now see does your user entered in DB Yes. But How using user.save() in index.js
  . If i hit the URI again it will populate the same data means new obj is created but with different ID 
  . If i dont pass name and write phone in place of email my app will crash. So i must have some kind of system to check that the work is 
     correct or not. So i have to use some kind of validation. Good validation is Identity of application
  . Cuz you dont want anything bad happen with your end point
  . Replace Router.get with Router.post. Cuz i dont want all the data in the URL
  . Use POST cuz we are sending the data like password. If we send data using Get maybe inside your log file your password will appear. cuz
    your password URL ke saat hi jaie ga if we are using Get. Or if data is alot so use POST 
  . For validation we use Express Validator


*/

// ========================== 06 ============================= //
/*
  . Previously we have seen how to insert data if our mongoose model is built

  . Now we are doing validation to do validation we use express validator and package is: 
    npm install --save express-validator.

    We have take array destructuring syntax from express website and write it on auth.js. 
  . We make an array in router.post
  . Errors : POST, ValidationResult
  . We can write our own custom message cuz the message we are getting before is a object which is returned by Express 
  We must write this validation layer
  And also we have to write promise. So it will be save in DB and user will be send to me through res
  So we have saved the data but i have marked email as unique. But still he is saving data in DB with same email
  So first create new DB and make indexes in User.js. Now you cant enter user with same email

*/

// ========================== 07 ============================= //
/* OBJECT: How to make collections in Thunder Client
  . Since we have made the index corresponding to email cuz we want that to be unique. And we dont want that index so we had to write the 
    logic in auth.js for unique email
  . We'll not use .then and .catch cuz we are using async await
  . Maybe we get different error rather then 'Please enter a unique value for email' so we dont use this response we have to fix this
  . We have basically applied the methods on our User model
  . findOne: This is a method provided by Mongoose that allows you to find a single document in the specified collection that matches the given  criteria. It takes an object as an argument, where the keys and values define the conditions the document must meet.
  . { email: req.body.email }: This is the criteria for the query. In this example, it's searching for a document in the "users" collection where the value of the "email" field matches the value provided in the req.body.email variable. This is commonly used in authentication scenarios, where you're checking if a user with a specific email address already exists.
  . Also we are changing the port
  . Made a notehub collection in Thunder Client => Then Folder of Authentication => Made a request and wrote an endpoint in the URL
  . Collection: making collection of end point which has link with application or particular thing in app
  . We usually write errors in Logger and SQS but here wr are handling it with try catch
  . We can export this endpoint as json and use any where
  . We'll increase collection and endpoints later
  . We have to do a work in whic user can login in our backend api for this we use JWT authentication then our notes model we have to use enter 
    notes and we had to make sure that user can only enter his/her notes and do CRUD operations

*/

// ========================== 07 ============================= //
/*
. We use bicrypt.js to do hashing and do salting
. We'll make User route secure

*/

// ========================== 09 ============================= //
/*
bicrypt.js help to generate password hash, salt, pepper.
We have install the package of bcryptjs: npm install bcryptjs

And also we have used array destructuring: const bcrypt = require('bcryptjs')
We use bicrypt.js hash func whic return promise
Whenever there is await means we are waiting for ans and then move to next line
So now we have created hash of password.
Whenever someone login what will i give him in return: Token
Lots of token we have mechanism for authentication:
    . Session Token
    . JWT(Json Web Token) 
Install package: npm i jsonwebtoken
What is JWT? A way to verify the user cuz user he will not give me id and password every time.
            Suppose the user has authenticated to my website i will give him token 

JWT provides authentication for client and server discussion 
Now i want to send user in return ID cuz in my DB i have index on ID and i can verify that token when request comes on server
In res we have send auth token. If some body give me this auth token i can conver it in user:{ id: user.id } this data and i can slos find that
  using my JWT secret that does anyone have did any thing with this or not,


*/


// ========================== 10 ============================= //
/*
  Making new endpoint in auth.js which is authenticate a user means no login required
  We use destructuring method to get the email password from DB

*/

// ========================== 11 ============================= //
/*
  We have to send JWT Token. We have to get auth token and fetch all details
  I can select every field from select except password
  Jo request ye mangti hain ke user authenticate hona chaiye so i will send header of name authentication token. And whatever data i have in header i will fetch that 
  I have to decode authToken and fetch ID . We do this using middleWare. So whenever we have any request in login routes we call middleware func

*/

// ========================== 12 ============================= //
/*
  This route will fetch user notes who are already logged in
  This is going to be Get request and we have to take token from header
  This is a Get Request so we dont have to write Query Parameters
  I have to associate notes with user so that other user cant see anyone notes. So we have to add user field in Notes model

*/


// ========================== 13 ============================= //
/*
  If we are updating something then we must required login
  We use PUT request for updation
  You can update the notes only when you are the owner/user for that note and aslo they must be loggedin for this purpose we do validation

*/

// ========================== 14 ============================= //
/*
  Deleting the note by changing the update method

*/

// ========================== 15 ============================= //
/*
  Installing Package: npm i react-router-dom concurrently
  Concrruently: If u have to run alot of server u can do this by using concrruently

*/

// ========================== 17 ============================= //
/*
  React App made up of state and components
  Make all the states in App.js in JS object. But this appraoch also has problem. If we need login in Offers state then we have 
  to pass it through prop drilling like below:
  <Offers login={ login } />
  But O2 needs login so we have to pass login in O2 through offers. Although Offers doesnt need login

*/

// ========================== 19 ============================= //
/*
  useLocation hook is in react router. If u run the func useEffect yo'll get this:
  {pathname: '/about', search: '', hash: '', state: null, key: 'qkjvcv7w'}

*/

// ========================== 20 ============================= //
/*

*/


// ========================== 21 ============================= //
/*
  Made Notes component and whatever related to notes we have written we have to write it on Notes component 

*/

// ========================== 22 ============================= //
/*
  Used diff icons. Reused the Alert component
  From submit we can create note, from Your Notes heading we can view the notes and for update and delete 
  we write logic and we have icons fro that. An dalso we have to show in alert as well that note is deleted etc
  

*/


// ========================== 23 ============================= //
/*
  Now we have to make the icons functional. We will do it in NotesState. We dont use setNotes rather we use func to 
  do work
  In Header we will give token which from which we'll find what user he is
  concat returns an array whereas push updates an array

*/


// ========================== 24 ============================= //
/*
  Now we have to make the icons functional. We will do it in NotesState.
  

*/

// ========================== 25 ============================= //
/*
  First we have to make Edit functionality then we have to do Fetch API calls. We will edit by using for loop
  We have made the edit function now to do API calls we have to use Fetch API. And for this we have to make function 
  but we are making the function work in the Edit function.
  We have made the global var host for which we can change the host and copying the url of UpdateNotes.
  So whatever we have did in the backend like all work of API we are doing that i client side
  But we have error of CORS Policy. He say that browser se API request hum nahi kar sakte. So we are installing a package
  in backend 'npm install cors'. 
  Cuz it has no relation with frontend and also adding some lines in index.js
  But still we are getting errors of key. So now all notes has to be fetch from Fetch API
  So notesInitial we update using Fetch API. So we are making Get All Notes function


*/

// ========================== 26 ============================= //
/*
  Note is not deleting on UI cuz i havent made any call of API
  We are passing UpdateNote as prop in Notes.js
  Here we'll use useRef hook
  useRef: We can give reference to anyone element


*/

// ========================== 27 ============================= //
/*
  When we click on Modal update it has to beclose after clicking and Notes has to be updated
  Button is not the part of form on which we are actually calling the func 
  To close modal we have to use close btn using useRef
  Before closing the btn i have to write the logic for updating the note
  We have to use try catch so when our API is down so our UI has to be sensible to show alerts to tell that backend is not working
  We cant change states in React directly
  With Json.parse we can make deep copy. We have did it in editNotes


*/

// ========================== 28 ============================= //
/*
  If we dont have anything in else so we use '&&'
  minLength={5} required is not working cuz we are using onClick() on btn and not onSubmit() on form

*/


// ========================== 29 ============================= //
/*
    Developer: Toggle Screen cast mode. This is for telling u which key u have pressed
    use .envlocal to save the URL of API
    If u use get request so your email and password will be shown on URL
    Use success: false for every end point


*/

