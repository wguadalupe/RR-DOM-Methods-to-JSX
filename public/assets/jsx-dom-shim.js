let createElement = (tagName, attributes, ...children) => {
    children = children.flat(Infinity)
    let element = document.createElement(tagName)
    for (let attributeName in attributes) {
        element[attributeName] = attributes[attributeName]
    }
    element.append(...children)
    return element
}