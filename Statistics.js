class Statistics {
    constructor() {
        this.gameStats = [];
    }

    addGameToStats(win, bid) {
        let gameStat = {
            win,
            bid,
        }

        this.gameStats.push(gameStat);
    }

    showGameStats() {
        const games = this.gameStats.length;
        const wins = this.gameStats.filter(game => game.win).length;
        const losses = games - wins;
        return [games, wins, losses]
    }
}

// const stats = new Statistics();