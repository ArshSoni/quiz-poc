export const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-2">
				<div>
					<h2 className="text-sm font-semibold text-gray-900">Manual Quiz</h2>
					<p className="mt-1 text-sm text-gray-500">
						Consultations are reviewed by licensed doctors
					</p>
				</div>
				<div>
					<h2 className="text-sm font-semibold text-gray-900">Contact</h2>
					<p className="mt-1 text-sm text-gray-500">care@manual.co</p>
					<p className="text-sm text-gray-500">+382 (0) 123 4567</p>
				</div>
			</div>
		</footer>
	)
}