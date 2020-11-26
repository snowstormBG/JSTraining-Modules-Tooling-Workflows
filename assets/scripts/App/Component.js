/**
 * no idea
 * @returns {number} Gives zero;
 */
export function doNothing() {
    const zero = 0;

    return zero;
}

export default class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) {
            this.element.remove();
            // this.element.parentElement.removeChild(this.element);
        }
    }

    attach() {
        this.hostElement.insertAdjacentElement(
            this.insertBefore
                ? 'afterbegin'
                : 'beforeend',
            this.element
        );
    }
}
