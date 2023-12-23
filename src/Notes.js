

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
Downloading packages:
. write => npm i express: for express server
. Write => npm i mongoose:
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
. Mongoose: Mongoose is made on top of MongoDB cuz we face MongoDB validation, casting, business logics etc
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
  devDependencies in my app. I dont it to be a part of my application

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
  Maintain good folder structure
  DB ==> Collections or Multiple Collections ==> Documents(JSON)
  e.g
  Family ==> Areeba / Areeba Aiman ==> id, name, email etc.

  MongoDB has pros and corns:
    Pros: Can write data in anyways
    Corns: our app management will be disturb with this
  So the main Advanatage of Mongoos is that he says you run your app i'll manage all your DB work

  So we only make models in our app.
  User.JS: User who always do login

  module.exports = mongoose.model("user", UserSchema)   ==> Making schema through models 
  28 Line => Model name and schema name 
  We are making the schemas and later we use them in routes
  tag: college work, To Do item etc
  ./ : Current folder

  We have made 2 schemas: User.js and Notes.js and put it inside models. Cuz we have made the models using schema
  We use app.use to link to routes
  require: making individual route file
  Inside auth and notes.js we use router 
  previosuly we were using app.get() but now we are using router.get()
  so after writing /api/auth we can get remaining path from routes/auth.js
  All Authentication endpoint we'll write on auth.js
  All notes endpoint we'll write on notes.js
  We have made schema from notes model and user.js se model banaya
  Schema: Logical connection of DB object
  By using mongoose we get free validations
  Later we make those end points which our React app uses
  e.g. 
      Login endpoint, signup endpoint, notes fetch delete, whole notes crud





*/