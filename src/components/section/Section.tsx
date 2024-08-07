import styles from './Section.module.scss'

interface SectionProps {
	children: React.ReactNode
	xPos: number
	yPos: number
	moveX: number
	moveY: number
}

export const Section = ({
	children,
	xPos,
	yPos,
	moveX,
	moveY,
}: SectionProps): JSX.Element => {
	return (
		<section
			className={styles.section}
			style={{
				top: `${yPos}%`,
				left: `${xPos}%`,
				transform: `translate(${moveX}%, ${moveY}%)`,
			}}
		>
			{children}
		</section>
	)
}
