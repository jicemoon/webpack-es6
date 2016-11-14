let fs = require("fs");
///////////async
{

}
/////////基于Promise对象的自动执行
{
    let readFile = function(fileName) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, function(error, data) {
                if (error) return reject(error);
                resolve(data);
            });
        });
    };
    let gen = function*() {
        var f1 = yield readFile('./content/test.json');
        var f2 = yield readFile('./content/testB.json');
        console.log(f1.toString());
        console.log(f2.toString());
    };

    function run(gen) {
        var g = gen();

        function next(data) {
            var result = g.next(data);
            if (result.done) return result.value;
            result.value.then(function(data) {
                next(data);
            });
        }
        next();
    }

    let test = run(gen);
    return;
}

/////基于co模块的自动执行
{
    let thunkify = require("thunkify");
    let co = require('co');
    let readFile = thunkify(fs.readFile);

    let gen = function*() {
        var f1 = yield readFile('./content/test.json');
        var f2 = yield readFile('./content/testB.json');
        console.log(f1.toString());
        console.log(f2.toString());
    };
    co(gen).then(function() {
        console.log('Generator 函数执行完成');
    });
}