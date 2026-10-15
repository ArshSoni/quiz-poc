interface Props {
	goBack: () => void;
}

export const ThankYouGeneric = ({ goBack }: Props) => {
	return (
		<div className="mt-4">
			<h1 className="font-bold">Thank You - that&apos;s everything we need.</h1>
			<p className="mt-2 text-gray-600">
				A doctor will review your answers today and get in touch if they need anything else before prescribing.
			</p>
			<button
				onClick={goBack}
				className="mt-6 text-sm text-gray-500 underline hover:text-gray-700">
				← Back to my answers
			</button>
		</div>
	)
}

export default ThankYouGeneric;