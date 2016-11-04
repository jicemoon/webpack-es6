function createDomCommon(tagName = "div", text = "", attrs = {}, ...children) {
    !tagName && (tagName = "div");
    var child;
    if (tagName instanceof HTMLElement) {
        child = tagName;
        tagName = "div";
    } else if (tagName.constructor.name == "Object") {
        attrs = tagName;
        tagName = "div";
    }
    var el = document.createElement(tagName);
    if (child) {
        el.appendChild(child);
    }
    if (text instanceof HTMLElement) {
        el.appendChild(text);
    } else if (text.constructor.name == "Object") {
        attrs = text;
    } else if (text) {
        el.appendChild(document.createTextNode(text.toString()));
    }
    if (attrs instanceof HTMLElement) {
        el.appendChild(attrs);
    } else if (attrs.constructor.name == "Object") {
        for (let prop of Object.keys(attrs)) {
            el.setAttribute(prop, attrs[prop]);
        }
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        el.appendChild(child);
    }
    return el;
}
const DomCreaterProxy = new Proxy({}, {
    get(target, property) {
        return function(attrs = {}, ...children) {
            const el = document.createElement(property);
            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop]);
            }
            if (children.length <= 0) {
                return el;
            }
            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});
export { DomCreaterProxy, createDomCommon };