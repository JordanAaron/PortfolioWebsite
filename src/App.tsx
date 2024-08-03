import { useState } from 'react'
import { Navigation } from '@/components'
import { View } from '@/types'

import styles from './App.module.scss'

function App() {
	const [view, setView] = useState<View>('topMid')

	console.log(view)

	return (
		<div className={styles.app}>
			<Navigation view={view} setView={setView} />
			<main className={styles.container}>
				<section className={styles.home}>Home</section>
				<section className={styles.about}>About</section>
				<section className={styles.projects}>Projects</section>
				<section className={styles.socialFeed}>Social Feed</section>
			</main>
		</div>
	)
}

export default App

/**
 * Home, About, Projects, Social Feed
 * Github, LinkedIn, Email, Resume
 */
