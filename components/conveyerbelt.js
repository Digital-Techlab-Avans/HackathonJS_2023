class ConveyerBelt extends HTMLElement
{
    constructor(){
        super();
    
        this.start = document.createElement('div');
        this.start.className = "start";

        this.belt = document.createElement('div');
        this.belt.className = "belt";
        this.belt.style.width = this.getAttribute('width');

        this.end = document.createElement('div');
        this.end.className = "end";

    }

    connectedCallback() {
        this.appendChild(this.start);
        this.appendChild(this.belt);
        this.appendChild(this.end);
    }

    addBox(symbols){
        let speed = this.getAttribute('speed');
        let box = document.createElement('conveyer-box');
        box.setAttribute('symbols', symbols);
        box.style.animation = "move " + speed + "s linear";
        box.addEventListener('animationend', () => {
            this.boxReachedEnd(box);
        });
        this.belt.appendChild(box);
    }
}

customElements.define('conveyer-belt', ConveyerBelt);