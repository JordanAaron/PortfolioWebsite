import { View } from '@/types'

import styles from './Navigation.module.scss'

interface NavigationProps {
	view: View
	setView: (view: View) => void
	setButtonClicked: (button: string) => void
}

export const Navigation = ({
	view,
	setView,
	setButtonClicked,
}: NavigationProps): JSX.Element => {
	const handleClick = (button: string) => {
		const viewMap: Record<View, Record<string, View>> = {
			home: {
				up: 'feed',
				down: 'projects',
				left: 'about',
				right: 'blog',
			},
			about: {
				right: 'home',
			},
			projects: {
				up: 'home',
			},
			feed: {
				down: 'home',
			},
			blog: {
				left: 'home',
			},
		}

		const nextView = viewMap[view][button]
		if (nextView) {
			setView(nextView)
		}
		setButtonClicked(button)
	}

	switch (view) {
		case 'feed':
			return (
				<button
					className={`${styles.down} ${styles.button}`}
					onClick={() => handleClick('down')}
				>
					Down
				</button>
			)

		case 'blog':
			return (
				<button
					className={`${styles.left} ${styles.button}`}
					onClick={() => handleClick('left')}
				>
					Left
				</button>
			)

		case 'projects':
			return (
				<button
					className={`${styles.up} ${styles.button}`}
					onClick={() => handleClick('up')}
				>
					Up
				</button>
			)

		case 'about':
			return (
				<button
					className={`${styles.right} ${styles.button}`}
					onClick={() => handleClick('right')}
				>
					Right
				</button>
			)
		default:
			return (
				<>
					<button
						className={`${styles.up} ${styles.button}`}
						onClick={() => handleClick('up')}
					>
						Up
					</button>
					<button
						className={`${styles.down} ${styles.button}`}
						onClick={() => handleClick('down')}
					>
						Down
					</button>
					<button
						className={`${styles.left} ${styles.button}`}
						onClick={() => handleClick('left')}
					>
						Left
					</button>
					<button
						className={`${styles.right} ${styles.button}`}
						onClick={() => handleClick('right')}
					>
						Right
					</button>
				</>
			)
	}
}
