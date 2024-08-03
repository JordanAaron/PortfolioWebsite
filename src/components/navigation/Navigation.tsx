import styles from './Navigation.module.scss'

import { View } from '@/types'

interface NavigationProps {
	view: View
	setView: (view: View) => void
}

export const Navigation = ({ view, setView }: NavigationProps): JSX.Element => {
	const handleClick = (button: string) => {
		const viewMap: Record<View, Record<string, View>> = {
			topMid: {
				right: 'topRight',
				left: 'topLeft',
				down: 'bottomMid',
			},
			topRight: {
				left: 'topMid',
				down: 'bottomRight',
			},
			topLeft: {
				right: 'topMid',
				down: 'bottomLeft',
			},
			bottomMid: {
				right: 'bottomRight',
				left: 'bottomLeft',
				up: 'topMid',
			},
			bottomRight: {
				left: 'bottomMid',
				up: 'topRight',
			},
			bottomLeft: {
				right: 'bottomMid',
				up: 'topLeft',
			},
		}

		const nextView = viewMap[view][button]
		if (nextView) {
			setView(nextView)
		}
	}

	return (
		<nav className={styles.container}>
			<div className={styles.yButtons}>
				<button className={styles.up} onClick={() => handleClick('up')}>
					Up
				</button>
				<button className={styles.down} onClick={() => handleClick('down')}>
					Down
				</button>
			</div>
			<div className={styles.xButtons}>
				<button className={styles.left} onClick={() => handleClick('left')}>
					Left
				</button>
				<button className={styles.right} onClick={() => handleClick('right')}>
					Right
				</button>
			</div>
		</nav>
	)
}
