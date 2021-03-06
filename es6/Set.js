import { createDomCommon } from "./DomCreate.js";
var root = createDomCommon("fieldset", createDomCommon("legend", "数据结构 - Set"));


root.appendChild(createDomCommon("h1", "基本用法"));
var s = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
var ul = createDomCommon("ul");
//ul.appendChild(DomCreate.li({}, DomCreate.span({ style: "display:inline-block; width: 50px; text-align: left;" }, "Key"), DomCreate.span({}, "Value")));
for (let v of s) {
    //ul.appendChild(DomCreate.li({}, DomCreate.span({ style: "display:inline-block; width: 50px; text-align: left;" }, k), DomCreate.span({}, v)));
    ul.appendChild(createDomCommon("li", '' + v));
}
root.appendChild(ul);
// 例一
var set = new Set([1, 2, 3, 4, 4]);
root.appendChild(createDomCommon("p", "例一 ==> ", createDomCommon("span", JSON.stringify([...set]), { style: "color: blue" })));

// 例二
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5, 8, 12]);
root.appendChild(createDomCommon("p", "例二 ==> ", createDomCommon("span", '' + items.size, { style: "color: blue" })));
//root.appendChild(DomCreate.p({}, "例二 ==> ", DomCreate.span({ style: "color: blue" }, items.size))); // 5

// 例三
function divs() {
    return [...document.querySelectorAll('div')];
}

var set = new Set(divs());
root.appendChild(createDomCommon("p", "例三 ==> ", createDomCommon("span", '' + set.size, { style: "color: blue" })));

// 类似于
divs().forEach(div => set.add(div));
root.appendChild(createDomCommon("p", "例三 ==> ", createDomCommon("span", '' + set.size, { style: "color: blue" })));

//去除数组的重复成员
var hasRepeatArr = [2, 3, 5, 4, 5, 2, 2];
var noRepeatArr = [...new Set(hasRepeatArr)];
root.appendChild(
    createDomCommon("fieldset",
        createDomCommon("legend", "去除数组的重复成员"),
        createDomCommon("p", "去重前 ==> ", createDomCommon("span", hasRepeatArr.join(","), { style: "color: blue" })),
        createDomCommon("p", "去重后 ==> ", createDomCommon("span", noRepeatArr.join(","), { style: "color: blue" }))
    )
);


////////////////////////////////////
root.appendChild(createDomCommon("h1", "实例属性和方法"));
root.appendChild(
    createDomCommon("fieldset",
        createDomCommon("legend", "属性", { style: "color: red" }),
        createDomCommon("ul",
            createDomCommon("li",
                createDomCommon("code", "Set.prototype.constructor", { class: "title" }),
                createDomCommon("span", "构造函数，默认就是Set函数")
            ),
            createDomCommon("li",
                createDomCommon("code", "Set.prototype.size", { class: "title" }),
                createDomCommon("span", "返回Set实例的成员总数")
            )
        )
    )
);
root.appendChild(
    createDomCommon("fieldset", { style: "margin-top: 15px;" },
        createDomCommon("legend", "方法", { style: "color: red" }),
        createDomCommon("ul",
            createDomCommon("li",
                createDomCommon("code", "add(value)", { class: "title" }),
                createDomCommon("span", "添加某个值，返回Set结构本身")
            ),
            createDomCommon("li",
                createDomCommon("code", "delete(value)", { class: "title" }),
                createDomCommon("span", "删除某个值, 返回一个布尔值, 表示删除是否成功")
            ),
            createDomCommon("li",
                createDomCommon("code", "has(value)", { class: "title" }),
                createDomCommon("span", "返回一个布尔值, 表示该值是否为Set的成员")
            ),
            createDomCommon("li",
                createDomCommon("code", "clear()", { class: "title" }),
                createDomCommon("span", "清除所有成员, 没有返回值")
            )
        )
    )
);

root.appendChild(createDomCommon("h1", "遍历keys(), values(), entries(), forEach"));
let eSet = new Set(['red', 'green', 'blue']);
for (let item of eSet.entries()) {
    let tSpan = createDomCommon("span", "" + item, {style:"margin-right: 20px; "});
  root.appendChild(tSpan);
}
export default root;