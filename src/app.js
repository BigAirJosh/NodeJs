////////////////////////////////////////////////////////////////////////////////
// 
//
//
////////////////////////////////////////////////////////////////////////////////
var pkg = require(process.env.PWD + '/package.json');
var program = require('commander');
var TIME_LABEL = 'Time taken';

program
    .version(pkg.version)
    .option('-p, --process', 'output process info')
    .option('-t, --time', 'output time takes in ms')
    .parse(process.argv);

//console.dir(program);

if(program.time)
    console.time(TIME_LABEL);

if(program.process) {
    console.dir(process);
}

if(program.time)
    console.timeEnd(TIME_LABEL);
