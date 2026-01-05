function getElementWidth(content, padding, border){
    const contentN = Number.parseFloat(content);
    const paddingN = Number.parseFloat(padding);
    const borderN = Number.parseFloat(border);

    const elementWidth = contentN + paddingN * 2 + borderN * 2;
    return elementWidth;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
