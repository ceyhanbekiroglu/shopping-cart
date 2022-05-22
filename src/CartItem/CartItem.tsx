import Button from '@material-ui/core/Button'

import { CartItemType } from '../App'
import Item from '../Item/Item'

import { Wrapper } from './CartItem.style'

type Props = {
	item: CartItemType
	addToCart: (clickedItem: CartItemType) => void
	removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
	<Wrapper>
		<div>
			<h3> {item.title}</h3>
		</div>
	</Wrapper>
)

export default CartItem
