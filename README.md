# One-armed-Bandit

A game that selects random configurations of different colors. A win when three identical or different colors are lined up in a row.

The player determines the amount of money he is playing with.
The higher the stake, the greater the winning multiplier.

## Description of the classes that have been created in the project

### GAME (Interfejs)

D - połączenie z DOM
M - startGame()
M - render()

### WALLET (stan środków)

D(p) - \_money'number'
M - changeWallet()
M - checkCanPay()
M - etWalletValue()

### STATISTICS (informacje o wszystkich grach)

D - gamesStats []
M - addGameToStats()
M - showGamesStats()

### DRAW (losowanie)

D - options []
D(p) - \_result []
M - getDrawResult()
M - drawResult()

### RESULT (określenie wyniku)

M - Static - checkWin()
M - Static - moneyWonInGame()
