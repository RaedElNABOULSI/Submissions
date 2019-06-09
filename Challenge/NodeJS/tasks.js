
/**
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


  
tasks=['task1','task2','task3','task4']
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
console.log("All possible commands: \n - quit/exit\n - hello\n - hello+x\n - list\n - add\n - remove" )
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

else if(text==='edit new text\n')
{
  tasks[tasks.length-1]="new text"
}

else if(text==='edit 1 new text\n')
{
  tasks[0]="new text"
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
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Raed")
