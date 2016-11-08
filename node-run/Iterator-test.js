{
    class RangeIterator {
        constructor(start, stop) {
            this.value = start
            this.stop = stop
        }

        [Symbol.iterator]() { return this; }

        next() {
            var value = this.value
            if (value < this.stop) {
                this.value++
                    return { done: false, value: value }
            } else {
                return { done: true, value: undefined }
            }
        }
    }

    function range(start, stop) {
        return new RangeIterator(start, stop)
    }

    for (let value of range(0, 3)) {
        console.log(value)
    }
}
console.log('')
console.log('/////////////////////////////////////')
console.log('')
    // /变量作用域隔离
    {
        function Obj(value) {
            this.value = value
            this.next = null
        }

        Obj.prototype[Symbol.iterator] = function() {
            var iterator = {
                next: next
            }

            var current = this

            function next() {
                if (current) {
                    var value = current.value
                    current = current.next
                    return {
                        done: false,
                        value: value
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
            return iterator
        }

        var one = new Obj(1)
        var two = new Obj(2)
        var three = new Obj(3)

        one.next = two
        two.next = three

        for (var i of one) {
            console.log(i)
        }
        console.log('===============')
        for (var i of two) {
            console.log(i)
        }
        console.log('===============')
        console.log([...one])
    }
    //////////////////
    {

        console.log('')
        console.log('/////////////////////////////////////')
        console.log('//========字符串遍历器==========//')
        var str = new String('hi')

        console.log([...str]); // ["h", "i"]

        str[Symbol.iterator] = function() {
            return {
                next: function() {
                    if (this._first) {
                        this._first = false
                        return { value: 'bye', done: false }
                    } else {
                        return { done: true }
                    }
                },
                _first: true
            }
        }

        console.log([...str]) // ["bye"]
        console.log(str) // "hi"
        var str1 = "jice";
        console.log([...str1]);
    }
    //////////////////
    {

        console.log('')
        console.log('/////////////////////////////////////')
        console.log('//========Iterator接口与Generator函数==========//')
        var myIterable = {};

        myIterable[Symbol.iterator] = function*() {
            yield 1;
            yield 2;
            yield 3;
        };
        console.log([...myIterable]) // [1, 2, 3]

        // 或者采用下面的简洁写法

        let obj = {
            *[Symbol.iterator]() {
                yield 'hello';
                yield 'world';
            }
        };

        for (let x of obj) {
            console.log(x);
        }
    }