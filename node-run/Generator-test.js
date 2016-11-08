{
    let pub = 0;

    function* g1() {
        while (true) {
            pub++;
            yield pub;
        }
    }

    function* g2() {
        while (true) {
            pub++;
            yield pub;
        }
    }
    let gp1 = g1();
    let gp2 = g2();
    console.log(gp1.next());
    console.log(gp2.next());
    console.log(gp1.next());
    console.log(gp2.next());
    console.log(gp1.next());
    console.log(gp2.next());
    console.log(gp1.next());
    console.log(gp2.next());
    //return;
}
////////
{
    console.log("///////////===========嵌套数组遍历==========///////////////");

    function iterTree1(tree) {
        if (Array.isArray(tree)) {
            for (let i = 0; i < tree.length; i++) {
                iterTree1(tree[i]);
            }
        } else {
            console.log(tree);
        }
    }

    function* iterTree(tree) {
        if (Array.isArray(tree)) {
            for (let i = 0; i < tree.length; i++) {
                yield* iterTree(tree[i]);
            }
        } else {
            yield tree;
        }
    }

    const tree = ['a', ['b', 'c'],
        ['d', 'e']
    ];
    iterTree1(tree);
    for (let x of iterTree(tree)) {
        console.log(x);
    }
    return;
}
///////
{
    function* foo() {
        console.log("a");
        yield 'a';
        console.log("b");
        yield 'b';
        console.log("c");
    }
    let f = foo();
    f.next();
    f.next();
    f.next();
    console.log("==========")
    f.next();
    //return;
}
/////////////
{
    console.log("////============yield*语句，用来在一个Generator函数里面执行另一个Generator函数====////");

    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        yield 'x';
        yield* foo();
        yield 'y';
    }

    // 等同于
    // function* bar() {
    //     yield 'x';
    //     yield 'a';
    //     yield 'b';
    //     yield 'y';
    // }

    // // 等同于
    // function* bar() {
    //     yield 'x';
    //     for (let v of foo()) {
    //         yield v;
    //     }
    //     yield 'y';
    // }

    for (let v of bar()) {
        console.log(v);
    }
    //return;
}
////////////////
{
    console.log("////=======为Object添加Symbol.iterator======////");

    function* objectEntries() {
        let propKeys = Object.keys(this);

        for (let propKey of propKeys) {
            yield [propKey, this[propKey]];
        }
    }
    let jane = { first: 'Jane', last: 'Doe' };

    jane[Symbol.iterator] = objectEntries;

    for (let [key, value] of jane) {
        console.log(`${key}: ${value}`);
    }
    console.log([...jane]);
    //return;

}
//////////////////
{
    console.log("/////======斐波那契数列=========/////");

    function* fibonacci() {
        let [prev, curr] = [0, 1];
        for (;;) {
            [prev, curr] = [curr, prev + curr];
            yield curr;
        }
    }

    for (let n of fibonacci()) {
        if (n > 1000) break;
        console.log(n);
    }

    //return;
}
/////////////
{
    function* foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for (let v of foo()) {
        console.log(v);
    }
    let fff = foo();
    let next = fff.next();
    while (!next.done) {
        console.log(next);
        next = fff.next();
    }
    console.log(next);
    console.log(fff.next());
    //return;
}
///
{
    function* f() {
        console.log('执行了！')
    }

    let generator = f();

    setTimeout(function() {
        generator.next()
    }, 2000);
}
///////
{
    let arr = [1, [
            [2, 3], 4
        ],
        [5, 6]
    ];

    let flat = function*(a) {
        var length = a.length;
        for (var i = 0; i < length; i++) {
            var item = a[i];
            if (typeof item !== 'number') {
                yield* flat(item);
            } else {
                yield item;
            }
        }
    };

    for (let f of flat(arr)) {
        console.log(f);
    }
}
//////////
{
    function* dataConsumer() {
        console.log('Started');
        console.log(`1. ${yield}`);
        console.log(`2. ${yield}`);
        return 'result';
    }

    let genObj = dataConsumer();
    genObj.next();
    // Started
    genObj.next('a')
        // 1. a
    genObj.next('b')
}