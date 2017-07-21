
export function isValidParallax(element){
    if (!element) return false;

    return element.hasAttribute('data-parallax-img');
}