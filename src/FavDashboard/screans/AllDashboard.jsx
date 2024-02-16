import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductTitle from '../components/ProductTitle';
import { addAllData } from '../redux/store';

const products = [
    {
        "id": 1,
        "name": "Laptop",
        "brand": "TechMaster",
        "price": 999.99,
        "category": "Electronics",
        "stock": 50,
        "rating": 4.5,
        "colors": ["Silver", "Black"],
        "specifications": {
            "processor": "Intel i7",
            "RAM": "16GB",
            "storage": "512GB SSD"
        }
    },
    {
        "id": 2,
        "name": "Smartphone",
        "brand": "TechGadget",
        "price": 599.99,
        "category": "Electronics",
        "stock": 100,
        "rating": 4.2,
        "colors": ["White", "Black"],
        "specifications": {
            "display": "6.2 inches",
            "camera": "20MP",
            "storage": "128GB"
        }
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "brand": "FitStride",
        "price": 79.99,
        "category": "Fashion",
        "stock": 200,
        "rating": 4.8,
        "colors": ["Blue", "Red", "Black"],
        "sizes": ["US 7", "US 8", "US 9"]
    },
    {
        "id": 4,
        "name": "Coffee Maker",
        "brand": "BrewMaster",
        "price": 49.99,
        "category": "Appliances",
        "stock": 30,
        "rating": 4.0,
        "colors": ["Silver", "Black"],
        "features": ["Programmable", "Auto Shut-off"]
    },
    {
        "id": 5,
        "name": "Headphones",
        "brand": "SoundWave",
        "price": 129.99,
        "category": "Electronics",
        "stock": 80,
        "rating": 4.6,
        "colors": ["Black", "Rose Gold"],
        "wireless": true,
        "specifications": {
            "driverSize": "40mm",
            "batteryLife": "20 hours"
        }
    },
    {
        "id": 6,
        "name": "Backpack",
        "brand": "UrbanPack",
        "price": 39.99,
        "category": "Fashion",
        "stock": 150,
        "rating": 4.3,
        "colors": ["Gray", "Brown"],
        "features": ["Laptop Compartment", "Water-Resistant"]
    },
    {
        "id": 7,
        "name": "Smart TV",
        "brand": "TechVision",
        "price": 799.99,
        "category": "Electronics",
        "stock": 25,
        "rating": 4.7,
        "colors": ["Black"],
        "specifications": {
            "screenSize": "55 inches",
            "resolution": "4K UHD"
        }
    },
    {
        "id": 8,
        "name": "Dress Shirt",
        "brand": "FashionBlend",
        "price": 49.99,
        "category": "Fashion",
        "stock": 120,
        "rating": 4.4,
        "colors": ["White", "Blue", "Pink"],
        "sizes": ["M", "L", "XL"]
    },
    {
        "id": 9,
        "name": "Blender",
        "brand": "BlendMaster",
        "price": 29.99,
        "category": "Appliances",
        "stock": 50,
        "rating": 3.8,
        "colors": ["Red", "Green"],
        "features": ["Smoothie Mode", "Dishwasher Safe"]
    },
    {
        "id": 10,
        "name": "Gaming Mouse",
        "brand": "GameTech",
        "price": 59.99,
        "category": "Electronics",
        "stock": 60,
        "rating": 4.5,
        "colors": ["RGB", "Black"],
        "specifications": {
            "dpi": 12000,
            "programmableButtons": 6
        }
    },
    {
        "id": 11,
        "name": "Casual Sneakers",
        "brand": "UrbanStep",
        "price": 44.99,
        "category": "Fashion",
        "stock": 90,
        "rating": 4.6,
        "colors": ["Gray", "White", "Black"],
        "sizes": ["US 6", "US 7", "US 8"]
    },
    {
        "id": 12,
        "name": "Toaster Oven",
        "brand": "HeatBake",
        "price": 69.99,
        "category": "Appliances",
        "stock": 40,
        "rating": 4.2,
        "colors": ["Silver", "Black"],
        "features": ["Convection", "Timer"]
    },
    {
        "id": 13,
        "name": "Wireless Earbuds",
        "brand": "AudioSync",
        "price": 89.99,
        "category": "Electronics",
        "stock": 70,
        "rating": 4.4,
        "colors": ["White", "Black"],
        "wireless": true,
        "specifications": {
            "batteryLife": "15 hours",
            "waterResistance": "IPX5"
        }
    },
    {
        "id": 14,
        "name": "Denim Jeans",
        "brand": "FashionDenim",
        "price": 59.99,
        "category": "Fashion",
        "stock": 100,
        "rating": 4.3,
        "colors": ["Blue", "Black", "Gray"],
        "sizes": ["30Wx32L", "32Wx32L", "34Wx32L"]
    },
    {
        "id": 15,
        "name": "Microwave Oven",
        "brand": "HeatWave",
        "price": 129.99,
        "category": "Appliances",
        "stock": 20,
        "rating": 4.1,
        "colors": ["White", "Stainless Steel"],
        "features": ["Sensor Cooking", "Turntable"]
    },
    {
        "id": 16,
        "name": "Fitness Tracker",
        "brand": "FitSync",
        "price": 39.99,
        "category": "Wearables",
        "stock": 120,
        "rating": 4.0,
        "colors": ["Black", "Blue"],
        "features": ["Heart Rate Monitor", "Step Counter"]
    },
    {
        "id": 17,
        "name": "Hiking Boots",
        "brand": "TrailBlaze",
        "price": 89.99,
        "category": "Fashion",
        "stock": 50,
        "rating": 4.7,
        "colors": ["Brown", "Black"],
        "sizes": ["US 8", "US 9", "US 10"]
    },
    {
        "id": 18,
        "name": "Digital Camera",
        "brand": "PhotoPro",
        "price": 499.99,
        "category": "Electronics",
        "stock": 15,
        "rating": 4.8,
        "colors": ["Black"],
        "specifications": {
            "megapixels": 24,
            "zoom": "10x"
        }
    },
    {
        "id": 19,
        "name": "Yoga Mat",
        "brand": "FlexMat",
        "price": 24.99,
        "category": "Fitness",
        "stock": 80,
        "rating": 4.5,
        "colors": ["Purple", "Green", "Blue"]
    },
    {
        "id": 20,
        "name": "Air Purifier",
        "brand": "PureAir",
        "price": 149.99,
        "category": "Home",
        "stock": 25,
        "rating": 4.3,
        "colors": ["White", "Silver"],
        "features": ["HEPA Filter", "Quiet Operation"]
    }
]



function AllDashboard() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);

    useEffect(() => {
        dispatch(addAllData(products))
    }, [])
    return (
        <div>{
            data.map(x => <ProductTitle key={x.id} title={x.name} id={x.id} />)
        }</div>
    )
}

export default AllDashboard