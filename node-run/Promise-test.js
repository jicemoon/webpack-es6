{

}
////////
{
    let promise = new Promise(function(resolve, reject) {
        console.log('Promise');
        resolve();
    });
    console.log("aaaaaaaaaaa");
    promise.then(function() {
        console.log('Resolved.');
    });

    console.log('Hi!');
    //return;
}
////////
{
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

    timeout(100).then((value) => {
        console.log(value);
    });
}