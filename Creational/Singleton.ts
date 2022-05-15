/*
 * Class Logger is Main Component Of Singleton Design Pattern
 */
class Logger {
  logs: any[];
  constructor() {
    this.logs = [];
  }

  count() {
    return this.logs.length;
  }

  log(message: string) {
    const TimeStamp = new Date().toISOString();
    this.logs.push({
      message,
      timestamp: TimeStamp,
    });
    console.log(`${TimeStamp} | ${message}`);
  }
}

/*
 * Using the Singleton Component on Another Class
 */
const StoreLogger = new Logger();
class Store {
  name: string;
  inventory: any[];
  constructor(name: string, inventory: any[] = []) {
    this.name = name;
    this.inventory = inventory;
    StoreLogger.log(
      `New Store '${name}' has ${inventory.length} items in Stock.`
    );
  }
}

const ShopperLogger = new Logger();
class Shopper {
  name: string;
  money: number;
  constructor(name: string, money: number = 0) {
    this.name = name;
    this.money = money;
    ShopperLogger.log(`New Shopper: ${name} has ${money} in their Account`);
  }
}

/*
 * Index the File
 */
const Log = new Logger();
const Alex = new Shopper(`Alex`, 1000);
const ComputerShop = new Store(`ComputerShop`, [
  {
    item: "RAM 8GB",
    qty: 100,
    price: 100,
  },
  {
    item: "SSD 120GB",
    qty: 100,
    price: 200,
  },
]);

Log.log(`Finished Config . . .`);
console.log(`${Log.count()} logs total`);
Log.logs.map((l) => console.log(`${l.message}`));
