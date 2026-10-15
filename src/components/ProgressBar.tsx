interface ProgressBarProps {
	percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
	const clamped = Math.min(100, Math.max(0, percentage));

	return (
		<div className="h-1 bg-blue-gray absolute bottom-0 inset-x-0 px-6">
			<div
				className="h-full bg-brand-500 bg-blue-700 opacity-80 transition-all duration-300"
				style={{ width: `${clamped}%`}}
			/>
		</div>
	)
}
