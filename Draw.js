class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResult();

        this.getDrawResult = () => _result;
    }

    drawResult() {
        let colors = [];
        const numberColors = this.options.length
        // uzupełnianie poprzez losowanie kolorów
        for (let i = 0; i < numberColors; i++) {
            const color = this.options[Math.floor(Math.random() * numberColors)];
            colors.push(color)
        }
        return colors;
    }
}

// const draw = new Draw();