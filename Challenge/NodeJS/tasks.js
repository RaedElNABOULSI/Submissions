
/**✓
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} x data typed by the user
 * @returns {void}
 */




 

// And then, to read it...
var fs = require("fs");

fs.readFile("database.json", function(err, buf) {
  console.log(buf.toString());
});
  

fs.readFile("database.json", function(err, buf) {
  console.log(buf);
});

fs.readFile("database.json", "utf-8", (err, data) => {
  if (err) { console.log(err) }
  console.log(data);
})



/* process */ 
process.argv[2]='blah.json'

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

tasks=['eat','sleep','code','play']

tasks2={task1:'run',task2:'listen',task3:'music',task4:'sports'}
tasks3={task1:'walk',task2:'read',task3:'watch',task4:'relax'}

fs.writeFile('blah.json',JSON.stringify(tasks2), function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 



var task1check={name:'eat',check1:'False'}
var task2check={name:'sleep',check1:'False'}
var task3check={name:'code',check1:'False'}
var task4check={name:'play',check1:'False'}

taskscheck=['[]'+task1check.name,'[✓]'+task2check.name,'[]'+task3check.name,'[✓]'+task4check.name]

function onDataReceived(text) {

  var words=text.split(" ")

  if (text === 'quit\n' || text==="exit\n") {
    quit()
  }
  else if(text === 'hello\n' || text.indexOf("hello")==0){
   
    hello(text);
  }
  
  /*
when typing 'help', all possible commands are listed
  */
  else if (text==='help\n')
  {
console.log("All possible commands: \n - quit/exit\n - hello\n - hello+x\n - list\n - add\n - remove\n - check 1\n - uncheck (number of task)\n" )
  }
  else if(text==='list\n')
  {
    for(var i = 0; i < tasks.length; i++){
      console.log('Task ' + (i + 1) + ' of ' + tasks.length + ": " +tasks[i]); 
    }
    
  }
  else if(text==='add\n')
  {
console.log("error")
  }
  else if(text.indexOf("add")==0)
  {
    var taskarray=text.trim().split(" ")
   tasks.push(taskarray[1])

    for(var i = 0; i < tasks.length; i++){
      console.log('Task ' + (i + 1) + ' of ' + tasks.length + ": " +tasks[i]); 
    }
  }
  else if (text==='remove\n')
  {
    tasks.pop()
    /*remove last element of tasks
  */
  }

  else if(text=='remove 1\n' && words[1]<=tasks.length && words[1]>0)
  {
tasks.shift()
/*remove first element of tasks
  */
  }

  else if(text=='remove 2\n' && words[1]<=tasks.length && words[1]>0)
  {
tasks.splice(1,1)
/*remove 2nd element of tasks
  */
  }

 
else if(words[1]>tasks.length || words[1]<1)
{

console.log("number doesn't exist")

}

else if(text==='edit\n')
{
  console.log("error")
}

else if(text.length>5 && text.indexOf('edit\n')===0 )
{
  tasks[tasks.length-1]=text.trim().substring(5,text.length)

}

else if(text.length>5 && text.indexOf('edit')===0 && text.indexOf('1')===5)
{
  tasks[0]=text.trim().substring(7,text.length)
  
}

/*  check/uncheck commands  */ 

else if (text=="check 1\n")
{
  taskscheck[0]='[✓]'+task1check.name
console.log(taskscheck.join("\n"))

  /* check task 1 */
}
else if(text==='check\n')
{
  console.log("error")
}

else if(text==='uncheck\n')
{
  console.log("error")
}

else if(text==='uncheck 1\n')
{taskscheck[0]='[ ]'+task1check.name
console.log(taskscheck.join("\n"))
 
}
else if(text==='uncheck 2\n')
{
  taskscheck[1]='[ ]'+task2check.name
console.log(taskscheck.join("\n"))
}
else if(text==='uncheck 3\n')
{
  taskscheck[2]='[ ]'+task3check.name
console.log(taskscheck.join("\n"))
}
else if(text==='uncheck 4\n')
{
  taskscheck[3]='[ ]'+task3check.name
console.log(taskscheck.join("\n"))
}

  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(kk){
  
  console.log(`${kk}`.trim().split("|") + "!")

}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){

/*writing*/


fs.writeFileSync('database.json',JSON.stringify(tasks3), function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 

  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Raed")
