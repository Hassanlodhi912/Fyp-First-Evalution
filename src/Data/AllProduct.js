//Rabbit
import rabbit1 from "../Image/rabbitimg1.jpg"
import rabbit2 from '../Image/rabbitimg2.jpg'
import rabbit3 from '../Image/rabbitimg3.jpg'
import rabbit4 from '../Image/rabbitimg4.jpg'

//Chicken
import chicken1 from '../Image/chickenimg1.jpg'
import chicken2 from '../Image/chickenimg2.jpg'
import chicken3 from '../Image/chickenimg3.jpg'
import chicken4 from '../Image/chickenimg4.jpg'

//Beef
import beef1 from '../Image/beefimg1.jpeg'
import beef2 from '../Image/beefimg2.jpg'
import beef3 from '../Image/beefimg3.jpg'
import beef4 from '../Image/beefimg4.jpg'

//camel
import camel1 from '../Image/camelimg1.jpg'
import camel2 from '../Image/camelimg2.png'
import camel3 from '../Image/camelimg3.jpg'
import camel4 from '../Image/camelimg4.jpg'

//mutton
import mutton1 from '../Image/muttonimg1.jpg'
import mutton2 from '../Image/muttonimg2.jpg'
import mutton3 from '../Image/muttonimg3.jpg'
import mutton4 from '../Image/muttonimg4.jpg'



const allProducts = [
    {
        id: "desi-aseel-meat",
        name: "Desi Aseel Meat",
        images: [chicken1, chicken2, chicken3, chicken4],
        meatType: [
            {
                type: "Live",
                price: 2000,
                img: ""
            },
            {
                type: "Meat",
                price: 1000,
                img: ""
            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Asil or Aseel Chicken is an ancient breed which is arrived from India.',
            'Used for cockfighting.',
            'Tamed all over the world especially in India and Pakistan.',
            'Used for making different types of Meat and produces less amount of eggs.',
            'Has the ability to survive in the cold temperature and can fight against any disease.',
            'Powerful breed of chicken.',
            'The breed has superiority over other breeds of chicken, because of its hardness and large fighting body.',
            'The delicious and intense taste of Meat, rich in nutrients and has low fat.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "chicken-meat",
        name: "Chicken Meat",
        images: [chicken1, chicken2, chicken3, chicken4],
        meatType: [
            {
                type: "Live",
                price: 2000,
                img: chicken1
            },
            {
                type: "Meat",
                price: 1000,
                img: chicken1
            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'The delicious and intense taste of Meat, rich in nutrients and has low fat.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "duck-Meat",
        name: "Duck Meat",
        images: [""],
        meatType: [
            // {
            //     type: "Live",
            //     price: 2000,
            //     img: ""
            // },
            {
                type: "Meat",
                price: 1000,
                img: ""
            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Per 100 grams, pure duck contains 23.5 grams of protein.',
            'Excellent source of selenium and zinc, which gives good cellular metabolism.',
            'Contains higher amounts of iron than other poultry.',
            'Niacin substances (Vitamin B3) helps to make a smooth human digestive. Every 100 mg of duck Meat contains 5.1 mg of niacin.',
            'Contains Vitamin B6 which helps in the metabolic system of the gastrointestinal tract.',
            'Duck Meat can prevent anemia as it contains iron.',
            'Healthy for your body which is full of nutrition.'
        ],
        additionalInformation: {
            weight: "1kg",
        }
    },
    {
        id: "rabbit-meat",
        name: "Rabbit Meat",
        images: [rabbit1, rabbit2, rabbit3, rabbit4],
        meatType: [
            {
                type: "Live",
                price: 2000,
                img: rabbit1
            },
            {
                type: "Meat",
                price: 1000,
                img: rabbit1
            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'One of the best white Meats available on the market today.',
            'Has a high percentage of easily digestible protein.',
            'Contains the least amount of fat among all the other available Meats.',
            'Cholesterol free Meat.',
            'Has a strong delicious flavor that almost resembles Chicken flavor.',
            'One of the most productive domestic Livestock animals.',
            'Rabbits can produce 6 pounds of Meat on the same feed.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "camel-meat",
        name: "Camel Meat",
        images: [camel4, camel1, camel2, camel3],
        meatType: [
            {
                type: "Prime Boneless (Cube zero fat)",
                price: 2000,
                img: camel1
            },
            {
                type: "Prime Boneless",
                price: 1000,
                img: camel1

            },
            {
                type: "BoneLess (Mix Boti)",
                price: 2000,
                img: camel1

            },
            {
                type: "Mince (Keema)",
                price: 1000,
                img: camel1

            },
            {
                type: "Pasanday",
                price: 2000,
                img: camel1

            },
            {
                type: "Nehari Cut Boneless",
                price: 1000,
                img: camel1

            },
            {
                type: "Nehar Cut With Boneless",
                price: 2000,
                img: camel1

            },
            {
                type: "Camel Paya",
                price: 1000,
                img: camel1

            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Camel Meat has a high proportion of Poly-unsaturated fatty acids.',
            'Provide great health benefits.',
            'Different from other red Meats.',
            'Contains high protein content, iron, zinc, vitamin A and B, and amino acid which is very good to repair body tissues and build new tissues.',
            'Camel Meat is receiving worldwide interest because of its unique taste and healthy features.',
            'Has other medical advantages in our body as it protects your body from various dangerous diseases.',
            'Very beneficial for our healthy body.'
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Prime Boneless (Cube zero fat), Prime Boneless, Boneless (Mix Boti), With Bone (Mix Boti), Mince (Keema), Pasanday, Nehari Cut Boneless, Nehar Cut With Bone (Nalli), Undercut, Camel Paya"
        }
    },
    {
        id: "mutton-meat",
        name: "Mutton",
        images: [mutton1, mutton2, mutton3, mutton4],
        meatType: [
            {
                type: "Mutton Chops",
                price: 2000,
                img: mutton1
            },
            {
                type: "Mutton Mince (Keema)",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Raan",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Dasti",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Mix Boti",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Back Chop",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Boneless",
                price: 1000,
                img: mutton1

            },
            {
                type: "Mutton Paya",
                price: 1000,
                img: mutton1

            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Mutton recommended by a dietitian, as the best choice for red Meat lovers.',
            'Improves brain function.',
            'Boosts the immune function.',
            'Prevent diabetes.',
            'Contains healthy fats.',
            'Good for your muscles.',
            'Good for the Skin, Hair, Teeth, and Eyes.   '
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Mutton Chops, Mutton Mince (keema), Mutton Raan, Mutton Dasti, Mutton Mix Boti, Mutton Back Chop, Mutton Boneless, Mutton Paya"
        }
    },
    {
        id: "sheep-lamb",
        name: "Sheep/Lamb",
        images: [""],
        meatType: [
            {
                type: "Sheep Chops",
                price: 2000
            },
            {
                type: "Sheep Mice (Keema)",
                price: 1000
            },
            {
                type: "Sheep Raan",
                price: 1000
            },
            {
                type: "Sheep Dasti",
                price: 1000
            },
            {
                type: "Sheep Mix Boti",
                price: 1000
            },
            {
                type: "Sheep Back Chop",
                price: 1000
            },
            {
                type: "Sheep Chakki (Tail Fat)",
                price: 1000
            },
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Lamb may have saturated fat, but choosing a lean cut means you get less of it. Look for tenderloin, loin chops, or legs.',
            'Lamb is a delicious and versatile red Meat. It’s common in Mediterranean. If you’re trying to watch your cholesterol levels, lamb can be safe to eat in moderation. That is, as long as you choose the right cut and prepare it in a healthy way.',
            'As a rich source of vitamins, minerals, and high-quality proteins, lamb can be an excellent component of a healthy diet.',
            'A 3.5-ounce (100-gram) serving of roasted lamb provides the following nutrients',
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Sheep Chops, Sheep Mince (keema), Sheep Raan, Sheep Dasti, Sheep Mix Boti, Sheep Back Chop, Sheep Chakki (Tail Fat)"
        }
    },
    {
        id: "beef-meat",
        name: "Beef",
        images: [beef1, beef2, beef3, beef4],
        meatType: [
            {
                type: "Undercut",
                price: 2000,
                img: beef1
            },
            {
                type: "Prime Boneless (Cube zero fat)",
                price: 1000,
                img: beef1
            },
            {
                type: "Prime Boneless",
                price: 1000,
                img: beef1
            },
            {
                type: "Prime With Bone (Mix Boti)",
                price: 1000,
                img: beef1
            },
            {
                type: "Mince (Keema)",
                price: 1000,
                img: beef1
            },
            {
                type: "Pasanday",
                price: 1000,
                img: beef1
            },
            {
                type: "Nehari Cut Boneless",
                price: 1000,
                img: beef1
            },
            {
                type: "Beef Nalli",
                price: 1000,
                img: beef1
            },
            {
                type: "Beef Soup bones",
                price: 1000,
                img: beef1
            },
            {
                type: "Cow Paya",
                price: 1000,
                img: beef1
            },
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Fresh and hygienic Cow Meat',
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Undercut, Prime Boneless (Cube zero fat), Prime Boneless, Boneless (Mix Boti), Prime With Bone (Mix Boti), Mince (Keema), Pasanday, Nehari Cut Boneless, Nehar Cut With Bone (Nalli), Beef Nalli, Beef Soup Bones, Cow Paya"
        }
    }
]

export {
    allProducts
}