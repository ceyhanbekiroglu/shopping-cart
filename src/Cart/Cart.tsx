import CartItem from '../CartItem/CartItem'

import { Wrapper } from './Cart.styles'

import { CartItemType } from '../App'

type Props = {
	cartItems: CartItemType[]
	addToCart: (ClickedItem: CartItemType) => void
	removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {}
