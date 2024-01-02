import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	console.log('czxczxc')
	const jump = useNavigate()
	const onJump = () => {
		jump('/user')
	}
	return <h1 onClick={onJump}>Dashboard</h1>
}

export default Dashboard
