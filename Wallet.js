// D(p) - \_money'number'
// M - changeWallet()
// M - checkCanPay()
// M - getWalletValue()

class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        // sprawdzanie, czy użytkownik ma odpowiednią ilość środków w portfelu
        this.checkCanPay = value => _money >= value ? true : false;

        // uaktualnienie zawartości portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                switch (type) {
                    case "+":
                        return _money += value;
                    case "-":
                        return _money -= value;
                    default:
                        throw new Error("nieprawidłowy typ działania!");
                }
            } else {
                console.log(typeof value);

                throw new Error("nieprawidłowa liczba!");
            }
        }
    }
}

// const wallet = new Wallet(200);