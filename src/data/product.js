import gold from '../assets/gold.jpg'
import goldBangle from '../assets/goldBangle.jpg'
import goldHaram from '../assets/goldHaram.jpg'
import goldNecklace from '../assets/goldNecklace.jpg'
import diamond from '../assets/diamond.jpg'
import diamondDailyWear from '../assets/diamondDailyWear.jpg'
import diamondNeckpiece from '../assets/diamondNeckpiece.jpg'
import diamondSet from '../assets/diamondSet.jpg'
import silver from '../assets/silver1.jpg'
import silverBracelet from '../assets/silverBracelet.jpg'
import silverNecklace from '../assets/silverNecklace.jpg'
import silverRing from '../assets/silverRing.jpg'
import silverTempleHaram from '../assets/silverTempleHaram.jpg'

export const products =
    [
        {
            id: 1,
            name: "Gold",
            products: [
                {
                    id: 101,
                    name: "Gold NeckSet",
                    price: 540000,
                    category: "Gold",
                    image: gold
                },
                {
                    id: 102,
                    name: "Gold Bangle",
                    price: 140000,
                    category: "Gold",
                    image: goldBangle
                },
                {
                    id: 103,
                    name: "Gold Haram",
                    price: 400000,
                    category: "Gold",
                    image: goldHaram
                },
                {
                    id: 104,
                    name: "Gold Necklace",
                    price: 442000,
                    category: "Gold",
                    image: goldNecklace
                }
            ]
        },
        {
            id: 2,
            name: "Diamond",
            products: [
                {
                    id: 201,
                    name: "Diamond Ring",
                    price: 34000,
                    category: "Diamond",
                    image: diamond
                },
                {
                    id: 202,
                    name: "Diamond DailyWear",
                    price: 48000,
                    category: "Diamond",
                    image: diamondDailyWear
                },
                {
                    id: 203,
                    name: "Diamond Neckpiece",
                    price: 100000,
                    category: "Diamond",
                    image: diamondNeckpiece
                },
                {
                    id: 204,
                    name: "Diamond Set",
                    price: 230000,
                    category: "Diamond",
                    image: diamondSet
                }
            ]
        },
        {
            id: 3,
            name: "Silver Anklet",
            products: [
                {
                    id: 301,
                    name: "Silver Anklet",
                    price: 34000,
                    category: "Silver",
                    image: silver
                },
                {
                    id: 302,
                    name: "Silver Bracelet",
                    price: 14000,
                    category: "Silver",
                    image: silverBracelet
                },
                {
                    id: 303,
                    name: "Silver Necklace",
                    price: 50000,
                    category: "Silver",
                    image: silverNecklace
                },
                {
                    id: 304,
                    name: "Silver Ring",
                    price: 8000,
                    category: "Silver",
                    image: silverRing
                },
                {
                    id: 305,
                    name: "Silver Temple Haram",
                    price: 200000,
                    category: "Silver",
                    image: silverTempleHaram
                }

            ]
        }
    ];