import type { ComponentType } from 'react';

// could be any whilst still being strictly typed
export type AnswerValue = string | boolean | number | null;

export const QUIZ_KEY = 'quiz' as string;

export interface Answer {
	key: string;
	value: AnswerValue;
}

export type Answers = Answer[];

export interface QuestionComponentProps {
	onAnswer: (value: AnswerValue) => void;
	value?: AnswerValue;
}

export interface Question {
	key: string;
	next: string | null | ((answers: Answers) => string | null);
	component: ComponentType<QuestionComponentProps>;
	required?: boolean;
}

export interface Quiz {
	questions: Question[];
	byKey: Record<string, Question>;
}

export function getQuestion(quiz: Quiz, key: string): Question | undefined {
	return quiz.byKey[key];
}

export function getAnswer(answers: Answers, key: string): AnswerValue | undefined {
	return answers.find(answer => answer.key === key)?.value;
}

export function getNextKey(quiz: Quiz, key: string, answers: Answers): string | null {
	const question = quiz.byKey[key];
	return typeof question.next === 'function' ? question.next(answers) : question.next;
}

export function BuildQuiz(questions: Question[]): Quiz {
	const byKey: Record<string, Question> = {};
	questions.forEach(question => byKey[question.key] = question);
	return { questions, byKey };
}