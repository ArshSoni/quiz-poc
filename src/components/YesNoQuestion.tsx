import type { QuestionComponentProps } from '@/modules/QuizBuilder/helpers/quiz';

interface Props extends QuestionComponentProps {
	question: string;
}

export default function YesNoQuestion({ question, value, onAnswer }: Props) {
	return (
		<div>
			<h2 className="text-xl font-medium text-gray-900">{question}</h2>
			<div className="mt-6 flex gap-4 flex-col sm:flex-row">
				<button
					onClick={() => onAnswer(true)}
					className={`flex-1 rounded-md border py-3 font-medium hover:bg-blue-200 ${value === true ? 'bg-blue-200' : ''}`}
				>
					Yes
				</button>

				<button
					onClick={() => onAnswer(false)}
					className={`flex-1 rounded-md border py-3 font-medium hover:bg-blue-200 ${value === false ? 'bg-blue-200' : ''}`}
				>
					No
				</button>
			</div>
		</div>
	);
}