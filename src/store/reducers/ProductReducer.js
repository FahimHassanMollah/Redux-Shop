import one from '../../assets/images/1.jpg'
import two from '../../assets/images/2.jpg'
import three from '../../assets/images/3.jpg'
import four from '../../assets/images/4.jpg'
import five from '../../assets/images/5.jpg'
import six from '../../assets/images/6.jpg'
import seven from '../../assets/images/7.jpg'
import eight from '../../assets/images/8.jpg'
import nine from '../../assets/images/9.jpg'
import ten from '../../assets/images/10.jpg'
const initialState = {
    products: [
        { id: 1, name: 'man t-shirt summer season', image: one, price: 20, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 2, name: 'woman jacket for summer', image: two, price: 30, discount: 5, discountPrice: 30 - 5 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 3, name: 'man trouser for all seasons', image: three, price: 15, discount: 3, discountPrice: 15 - 3 / 100 * 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 4, name: 'shoes for all season', image: four, price: 50, discount: 4, discountPrice: 50 - 4 / 100 * 50, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 5, name: 'female soot for summer', image: five, price: 25, discount: 2, discountPrice: 25 - 2 / 100 * 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 6, name: 'male jeans', image: six, price: 60, discount: 6, discountPrice: 60 - 6 / 100 * 60, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 7, name: 'male trouser for all seasons', image: seven, price: 35, discount: 2, discountPrice: 35 - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 8, name: 'male jacket for winter', image: eight, price: 80, discount: 7, discountPrice: 80 - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 9, name: 'male jacket for all season', image: nine, price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
        { id: 10, name: 'male winter jacket', image: ten, price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
    ],
    product:{}
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "singleProduct":
            if (Number(payload) === -1) {
               let product={}
               return { ...state, product }
            }
            else{
                 let product = state.products.find((prod,index)=>prod.id === Number(payload) )
                 return { ...state, product }

            }
           break;
        default:
            return state
    }
}
export default productReducer
