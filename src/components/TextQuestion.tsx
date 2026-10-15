import type { QuestionComponentProps, AnswerValue } from '@/modules/QuizBuilder/helpers/quiz';

import { useState } from 'react';

interface Props extends QuestionComponentProps {
	question: string;
	value: AnswerValue | undefined
}

export default function TextQuestion({ question, value, onAnswer }: Props) {
	const [answer, setAnswer] = useState<string>(typeof value === 'string' ? value : '');

	return (
		<div>
			<h2 className="text-xl font-medium text-gray-900">{question}</h2>

			<textarea
				value={answer}
				onChange={e => setAnswer(e.target.value)}
				className="border min-h-16 p-4 w-full mt-2"
			></textarea>

			<div className="mt-6 flex gap-4 flex-col">
				<button
					onClick={() => onAnswer(answer)}
					className={`flex-1 rounded-md border py-3 font-medium hover:bg-blue-200`}
				>
					Continue
				</button>
			</div>
		</div>
	);
}