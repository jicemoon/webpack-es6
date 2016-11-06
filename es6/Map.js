import { createDomCommon } from "./DomCreate.js";

var root = createDomCommon(
    "fieldset",
    createDomCommon("legend", "数据结构 - Map")
);
root.appendChild(
    createDomCommon(
        "fieldset",
        createDomCommon(
            "legend",
            "Map属性和方法", { style: "color: red" }
        ),
        createDomCommon(
            "ul",
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.size", { class: "title" }),
                createDomCommon("span", "Map结构的成员总数")
            ),
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.set(key, value)", { class: "title" }),
                createDomCommon("span", "设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键")
            ),
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.get(key)", { class: "title" }),
                createDomCommon("span", "读取key对应的键值，如果找不到key，返回undefined")
            ),
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.has(key)", { class: "title" }),
                createDomCommon("span", "返回一个布尔值，表示某个键是否在Map数据结构中")
            ),
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.delete(key)", { class: "title" }),
                createDomCommon("span", "删除某个键，返回true。如果删除失败，返回false")
            ),
            createDomCommon(
                "li",
                createDomCommon("code", "Map.prototype.clear()", { class: "title" }),
                createDomCommon("span", "清除所有成员，没有返回值")
            )
        )
    )
)

export default root;