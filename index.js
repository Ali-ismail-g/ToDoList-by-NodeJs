
const fs = require('fs');
const helpers = require('./helpers');
const yargs = require('yargs');
const argv = yargs.argv;
var command = argv._[0];
console.log('Running Command: ', command);

function main(){
    switch(command){
        case 'add':
            helpers.add(argv.title,argv.content);
        break;
        case 'edit':
            var edited = helpers.edit(argv.title,argv.content,argv.id)
            var messages = edited ?  "failed to edit":"edited successfully";
            console.log(messages);
        break;
        case 'remove':
            var removed = helpers.remove(argv.id);
            var message = removed ? "removed successfully" : "failed to remove";
            console.log(message);
        break;
        case 'list':
            var allTodos = helpers.list();
            allTodos.forEach((todo) => console.log(todo.title,todo.content,todo.id,todo.checked))
        break;
        case 'check':
            var checked = helpers.check(argv.id)
            var messages = checked ?  "failed to check":"checked successfully";
            console.log(messages);
        break;
        default:
            console.log('Invalid command.');
            break;
    }

}
main();