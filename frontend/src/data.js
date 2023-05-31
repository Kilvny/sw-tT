const products = [
    {
        "id": 1,
        "SKU": "DVD001",
        "name": "DVD Disc",
        "price": 9.99,
        "type": "Size",
        "Size_MB": 700,
        "unit": "MB"
    },
    {
        "id": 2,
        "SKU": "BOOK002",
        "name": "The Great Gatsby",
        "price": 12.99,
        "type": "Weight",
        "Weight_Kg": 0.5,
        "unit": "Kg"
    },
    {
        "id": 3,
        "SKU": "FURN003",
        "name": "Sofa",
        "price": 499.99,
        "type": "Dimension",
        "Dimensions": [80,200,100],
        // "Dimensions": {
        //     "Height": 80,
        //     "Width": 200,
        //     "Length": 100
        // }
        "unit": "HxWxL"
    },
    {
        "id": 4,
        "SKU": "DVD004",
        "name": "Blu-ray Disc",
        "price": 14.99,
        "type": "Size",
        "Size_MB": 4000,
        "unit": "MB"
    },
    {
        "id": 5,
        "SKU": "BOOK005",
        "name": "To Kill a Mockingbird",
        "price": 9.99,
        "type": "Weight",
        "Weight_Kg": 0.7,
        "unit": "Kg"
    }
];

export default function getTestProducts() {
    return products;
}

