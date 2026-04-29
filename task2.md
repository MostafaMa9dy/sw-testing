# 🧪 Unit Testing Course – Hands-on Exercises



## 1️⃣ Lifecycle Hooks — before / after

### 🧩 Exercise: Fix Flaky Tests

You are given:

```ts
// cart.ts
let items: string[] = [];
export const addItem = (item: string) => items.push(item);
export const getItems = () => items;

❌ Problem

Tests may fail because state is shared between tests.

🎯 Tasks

* Write tests:
    * Add 1 item → expect length = 1
    * Add 2 items → expect length = 2
* Fix the issue using:
    * beforeEach
    * (bonus) afterEach
⸻

2️⃣ Mocking Functions Inside Functions

🧩 Exercise: Control Internal Behavior

// pricing.ts
export const getDiscount = () => 0.1;
// order.ts
import { getDiscount } from "./pricing";
export const calculatePrice = (price: number) => {
  const discount = getDiscount();
  return price - price * discount;
};

🎯 Tasks

* Mock getDiscount
* Test:
    * when discount = 0.5 → price is reduced correctly
* Assert:
    * function was called

⸻

3️⃣ Mocking a Database

🧩 Exercise: Fake the DB

// product.service.ts
export class ProductService {
  constructor(private db) {}
  async getProduct(id: string) {
    return this.db.find(id);
  }
  async createProduct(product) {
    return this.db.insert(product);
  }
}

🎯 Tasks

* Mock db
* Test:
    * getProduct calls db with correct id
    * createProduct calls insert
* Simulate:
    * success case
    * failure case (reject)

⸻





4️⃣ Testing Async Functions

🧩 Exercise: Cache + API Logic

// headlines.service.ts
export class HeadlinesService {
  constructor(private db, private api) {}
  async getHeadlines() {
    const cached = await this.db.get("headlines");
    if (cached) return cached;
    const data = await this.api.fetch();
    await this.db.set("headlines", data);
    return data;
  }
}

🎯 Tasks

Case 1: Cache exists

* DB returns data
* API should NOT be called

Case 2: Cache missing

* DB returns null
* API is called
* DB.set is called

Case 3 (Bonus): API fails

* Throw error
* Ensure DB.set is NOT called

⸻
```

