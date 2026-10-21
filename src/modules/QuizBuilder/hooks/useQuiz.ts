/**
 * This hook is a smaller replica of the quiz system I helped build whilst at Manual.co
 * consultation.tsx shows how this hook is used to create quizes really quickly via simple objects and chaining keeping actual code abstracted.
 */

import { useEffect, useState } from 'react';

import {
	getNextKey,
	getQuestion,
	type Answer,
	type Answers,
	type AnswerValue,
	type Question,
	BuildQuiz,
	QUIZ_KEY,
} from '@/modules/QuizBuilder/helpers/quiz';

export function useQuiz(questions: Question[]) {
	const quiz = BuildQuiz(questions);

	const [index, setIndex] = useState(0);

	// For sake of temporary storage via state to keep within development timeline
	const [answers, setAnswers] = useState<Answers>([]);
	const [isComplete, setIsComplete] = useState(false);
	const [history, setHistory] = useState<string[]>(quiz.questions[0] ? [quiz.questions[0].key] : []);

	const currentKey = history[index];
	const currentQuestion = currentKey ? getQuestion(quiz, currentKey) : undefined;

	const answerCurrent = (value: AnswerValue) => {
		if (!currentKey) return;
		if (currentQuestion?.required && value === null) return; // required questions can't be skipped

		const answer: Answer = {
			key: currentKey,
			value,
		};

		// // Keep answers before the current question,
		// // replace the current answer, and remove later answers.

		// const updatedAnswers = [

		// 	...answers.slice(0, index),
		// 	answer,
		// ];

		const updatedAnswers = [...answers]
		updatedAnswers[index] = answer;

		setAnswers(updatedAnswers);

		const nextKey = getNextKey(quiz, currentKey, updatedAnswers);

		if (nextKey === null) {
			setIsComplete(true);
			return;
		}

		window.localStorage.setItem(QUIZ_KEY, JSON.stringify(updatedAnswers));


		const updatedHistory = [
			...history.slice(0, index + 1),
			nextKey,
		];

		setHistory(updatedHistory);

		setIndex(index + 1);
	}

	const goBack = () => {
		if (isComplete) {
			setIsComplete(false);
			return;
		}

		if ( index > 0 ) {
			setIndex(index - 1);
		}
	}

	const goForward = () => {
		if ( isComplete ) return;

		if ( index < history.length - 1) {
			setIndex(index + 1);
			return;
		}
	}

	const getPercentage = () => {
    if ( isComplete ) return 100;

		const total = quiz.questions.length;
		const position = index + 1;

    if ( total > 0 ) {
      return Math.round((position / total) * 100);
    }

    return 0;
  }

	return {
		currentKey,
		currentQuestion,
		answers,
		isComplete,
		answerCurrent,
		goBack,
		goForward,
		canGoBack: isComplete || index > 0,
		canGoForward: !isComplete && index < history.length - 1,
		position: index + 1,
		total: quiz.questions.length,
		progressPercentage: getPercentage()
	};
}