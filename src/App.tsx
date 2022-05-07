import { useState } from 'react'
import { useQuery } from 'react-query'

import Drawer from '@material-ui/core/Drawer'
import LinererProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

import { Wrapper } from './App.styles'

export type CartItemType = {
	id: number
	category: string
	description: string
	image: string
	price: number
	title: string
	amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json()

function App() {
	const { data, isLoading, error } = useQuery<CartItemType[]>(
		'products',
		getProducts
	)
	return <div className='App'>Start</div>
}

export default App
