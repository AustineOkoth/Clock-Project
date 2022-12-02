*******Pre requirements ******

1. The user should have a good IDE (My preference Visual Studio Code) 
2. The user should have node install to their Computer


****** Installations *********

After receiving the ziped file,

1.Open it via the visual studio code or any other IDE of your choice.
2.In the terminal type npm install (This will initialize a package-lock-json in your folder ) 
3. Again in the terminal type " npm init -y "  (It will initialize the package.json file )

4. Install the following dependances(If installed they will be displaced in the package.json file)

Type  "npm install express"   (This will install express)
Type   "npm install ejs"   (This will install ejs)

(Optional) Type  "npm install nodemon"   (This will install nodemon)
Incase you install nodemon ensure that in your package.json you add this code
 "devStart": "nodemon user.js"  immediately after  ("test": "echo \"Error: no test specified\" && exit 1")

 To run nodemon type "npm run devStart" in your termianl....

NB : ENSURE YOU HAVE A FOLDER CALLED "views"  AND INSIDE THAT FOLDER IS WHERE THE "index.ejs" FILE IS LOCATED.

****** End of Installation ******************

********** How the code works *******************
In my implementation I have decided to use node.js  and express to successfully run my code.
The nodejs server will be running on my localhost port 4000
I have rendered my index.ejs file using the "ejs view engine" thus enabling it to be rendered to the client side.
The index.ejs file is located in the views folder because ejs rendered fileds only found in the views folder.


Inside the script tag in the index.ejs file of mine,
1.The program initially starts by getting t1 which is the client browsertimestamp
2. The program theN sends a request to the server with the url "http://127.0.0.1:4000/time/measure"
3. The if the server is available, it prepares the t2 and t3 times and saves them in a jsonencoded formart ready to be send back to the client.
4. Otherwise if the server is down  or the url entered is invalid, you receive an error message.
5. Once t2 and t3 are sent back to the client, they are written to the index.ejs file through the innterHTML property.
6 Finally... Relevant calculations ( clientDelta, serverDelta, RTT, Offest) are done as again written doen to the innerHTML RESPECTIVE SECTIONS



************* SUCESSFULL PROGRAM *****************************








