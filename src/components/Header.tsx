import { ProgressBar } from "./ProgressBar";

interface HeaderProps {
	percentage: number;
}

export const Header = ({ percentage }: HeaderProps) => {
	return (
		<header className="border-b border-gray-200 bg-white">
			<div className="mx-auto flex max-w-3xl items-center gap-2 px-6 py-4 relative">
			<ProgressBar percentage={percentage} />
				<span className="text-sm text-gray-400">Quiz</span>
			</div>
		</header>
	)
}
