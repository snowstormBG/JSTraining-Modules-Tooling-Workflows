/* eslint-disable no-invalid-this,no-magic-numbers */
// eslint-disable-next-line no-unused-vars
import Cmpnt, { doNothing } from './Component.js';

export class Tooltip extends Cmpnt {
    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    };

    // eslint-disable-next-line max-statements
    create() {
        const tooltipElement = document.createElement('div');

        tooltipElement.className = 'card';
        const tooltipTemplate = document.getElementById('tooltip');
        const tooltipBody = document.importNode(tooltipTemplate.content,
true);

        tooltipBody.querySelector('p').textContent = this.text;
        tooltipElement.append(tooltipBody);

        const hostElPosLeft = this.hostElement.offsetLeft;
        const hostElPosTop = this.hostElement.offsetTop;
        const hostElHeight = this.hostElement.clientHeight;
        const parentElementScrolling = this.hostElement.parentElement.scrollTop;

        const xPos = hostElPosLeft + 20;
        const yPos = hostElPosTop + hostElHeight - parentElementScrolling - 10;

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = `${xPos}px`;
        tooltipElement.style.top = `${yPos}px`;

        tooltipElement.addEventListener('click',
this.closeTooltip);
        this.element = tooltipElement;
    }
}
