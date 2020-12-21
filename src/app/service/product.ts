// export class Product {
//     constructor(public productId: number, public productName: string, public productCode: string,
//         public releaseDate: Date, public price: number,
//         public starRating: number, public imageUrl: string,public currentAvailibility?:boolean,public description?: Description) {
//     }
// }

export class Fruit {
    constructor(public fruitId: number, public fruitName: string, public fruitSize: string, public fruitColor: string) {
    }
}


export const fruitList: Fruit[] = [
    {
        "fruitId": 3,
        "fruitName": "Apple",
        "fruitSize": "Large",
        "fruitColor": "Red"
    },
    {
        "fruitId": 6,
        "fruitName": "Banana",
        "fruitSize": "small",
        "fruitColor": "Green"
    },
    {
        "fruitId": 2,
        "fruitName": "Pineapple",
        "fruitSize": "Large",
        "fruitColor": "Yellow"
    },
    {
        "fruitId": 1,
        "fruitName": "Mango",
        "fruitSize": "Too Large",
        "fruitColor": "Yellow"
    },
    {
        "fruitId": 3,
        "fruitName": "BerriesApple",
        "fruitSize": "Medium",
        "fruitColor": "Blue"
    }
];