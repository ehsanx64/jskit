function component() {
    const element = document.createElement('div');

    element.innerHTML = 'jskit';

    return element;
}

document.body.appendChild(component());