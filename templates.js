
/**
 * @return {string}
 */
function Element(tag, attributes, content, closed){
    let isClosed = closed ? closed : true;
    let closing = isClosed ? `</${tag}>` : "";
    return `<${tag}>${content}${closing}`;
}

/**
 * @return {string}
 */
function Categories(menuData) {
    let categories = menuData["categories"];
    let length = categories.length;
    let output = [];
    for(let i = 0; i < length; i++)    {
        output.push(Category(menuData, categories[i]));
    }
    return `
            <div class="categories">
            <div class="menu-title">${menuData.title}</div>
            ${output.join("\n")}
            </div>
        `;
}

/**
 * @return {string}
 */
function Category(menuData, category){
    let products = category.products;
    let length = products ? products.length : 0;
    let output = [];
    for(let i = 0; i < length; i++)    {
        var product = products[i];
        if (category.choices) {
            if (product.choices ){
                for(let cc = 0; cc < length; cc++) {
                    product.choices.push(category.choices[cc])
                }
            }else{
                product.choices = category.choices
            }
        }
        output.push(Product(menuData, product));
    }
    return `
<div class="category-title">${category.title}</div>
<div class="category">
${output.join("\n")}
</div>
`;    }

/**
 * @return {string}
 */
function Product(menuData, product){
    let choiceSets = product.choices;
    let length = choiceSets ? choiceSets.length : 0;
    let output = [];
    for(let i = 0; i < length; i++)    {
        output.push(ChoiceSet(menuData, choiceSets[i]));
    }
    return `
<div class="product">
<div class="product-title">${product.title}</div>
<div class="product-description">${Description(product)}</div>
${output.length ? output.join("\n") : ""}
<div class="price">${Price(product)}</div>
</div>
`;
}

/**
 * @return {string}
 */
function ChoiceSet(menuData, choiceSet){
    let theSet = menuData["choice-sets"][choiceSet];
    let choices = theSet.choices;
    let length = choices ? choices.length : 0;
    let output = [];
    for(let i = 0; i < length; i++)    {
        output.push(Choice(menuData, choices[i]));
    }
    return `
        <div class="choice-set-title">${theSet.title}</div>
        <div class="choices">${output.join("<br>")}</div>
`;
}

/**
 * @return {string}
 */
function Description(item){
    return item.description ? `${item.description}<br>` : ""
}

/**
 * @return {string}
 */
function Price(item){
    return item.price ? `${item.price}<br>` : ""
}

/**
 * @return {string}
 */
function Choice(menuData, choice){
    return `&#8226;&nbsp;${choice.title}` + (choice.price ? `&nbsp;for&nbsp;+$${choice.price}` : "")
}