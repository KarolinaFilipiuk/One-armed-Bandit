class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));

        this.boards = document.querySelectorAll("div.color");
        this.inputBid = document.getElementById("bid");
        this.spanWallet = document.querySelector(".panel span.wallet");
        this.spanResult = document.querySelector(".score span.result");
        this.spanGames = document.querySelector(".score span.number");
        this.spanWins = document.querySelector(".score span.win");
        this.spanLosses = document.querySelector(".score span.loss");
        this.render();
    }

    render(colors = ["gray", "gray", "gray"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, i) => board.style.backgroundColor = colors[i]);
        this.spanWallet.textContent = money;

        if (result) {
            result = `Wygrałeś ${wonMoney}$!`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$`
        }

        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = "";
    }

    startGame() {
        if (this.inputBid.value < 1) {
            return alert("Kwota, którą chcesz grać jest za mała :(");
        }

        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPay(bid)) {
            return alert("Masz za mało środków lub została podana nieprawidłowa wartość :(")
        }

        this.wallet.changeWallet(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWin(colors);
        const wonMoney = Result.moneyWonInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStats(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStats(), bid, wonMoney);
    }
}