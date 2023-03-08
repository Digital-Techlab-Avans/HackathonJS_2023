class ConveyerBox extends HTMLElement
{
    constructor(){
        super();
    
        this.nrOfCompleted = 0;
     
    }

    connectedCallback() {

        let symbolsString = this.getAttribute('symbols');
        this.symbols = symbolsString.split(',');
        this.nrOfSymbols = this.symbols.length;

        this.symbols.forEach((symbol) => {
            let symbolEl = document.createElement('div');
            let span = document.createElement('span');
            span.className = "fa fa-solid fa-" + symbol;
            span.id = symbol;
            symbolEl.appendChild(span);
            this.appendChild(symbolEl); 
        })

        this.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        this.addEventListener('drop', (e) => {
            e.preventDefault();
            let symbol = e.dataTransfer.getData('text');
            this.dropSymbol(symbol);
        });

    }

    dropSymbol(symbol){
        if(!this.symbols.includes(symbol))
            return;
        
        let symbolEl = this.querySelector('#' + symbol);
        symbolEl.parentElement.className = 'complete';
        this.nrOfCompleted++;
        
    }
}

customElements.define('conveyer-box', ConveyerBox);