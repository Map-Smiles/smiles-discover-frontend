import * as React from 'react'
import { Container, Heading, Image } from '@theme-ui/components'
import errorImg from '../../../assets/img/svg/warn.svg'

function ErrorPage() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Heading as="h1">
				We're sorry but this app is set for mobile devices. Please access it by
				your phone.
			</Heading>
			<Image src={errorImg} />
		</Container>
	)
}

export default ErrorPage
