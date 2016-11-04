import Person from './Person.js';
import { DomCreaterProxy } from "./DomCreate.js";
import SetTest from "./Set.js";

let p = new Person('张三', 20);
document.write(`<span>${p.say()}</span> <br/><br/>`);
const el = DomCreaterProxy.div({ class: "aaa" },
    'Hello, my name is ',
    DomCreaterProxy.a({ href: '//example.com' }, 'Mark'),
    '. I like:',
    DomCreaterProxy.ul({},
        DomCreaterProxy.li({}, 'The web'),
        DomCreaterProxy.li({}, 'Food'),
        DomCreaterProxy.li({}, '…actually that\'s it'),
        DomCreaterProxy.li({ style: "color:red;" }, "旅游"),
        DomCreaterProxy.li({ style: "color:blue;" }, "Movie")
    )
);

document.body.appendChild(el);
document.body.appendChild(SetTest);