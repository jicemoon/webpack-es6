import { DomCreaterProxy } from "./DomCreate.js";

import SetTest from "./Set.js";
import MapTest from "./Map.js";
import { loadImageAsync, getJSON } from "./Promise.js";

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
let loadImg = loadImageAsync("../content/images/timg.jpg");
let loadImg0 = loadImg.then(function(img) {
    img.style.width = "450px";
    document.body.appendChild(img);
});
console.log(loadImg == loadImg0);
getJSON("../content/test.json").then(function(post) {
    console.log("test.json ==> ", post);
    return getJSON(post.commentURL);
}).then(function funcA(comments) {
    console.log("Resolved: ", comments);
}, function funcB(err) {
    console.log("Rejected: ", err);
});
document.body.appendChild(el);
document.body.appendChild(SetTest);
document.body.appendChild(MapTest);