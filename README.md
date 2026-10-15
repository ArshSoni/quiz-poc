## Helios Quiz System

Quiz System POC is a Next.js quiz application. This version is a smaller replica of the quiz system I helped lead and build at Manual.co.

Built using React, NextJS, TypeScript and Taiwlind.

The quiz system uses object-based question definitions and chaining through unique question keys. Each question declares its own key and the key of the next question, or calculates the next key from the answers. This keeps navigation between question pages separate from the individual question components.

Question components are fully customisable. A question can render any UI it needs, as long as it accepts the shared question props and calls `onAnswer` with the selected value.


## Requirements

- Node.js `>=20.9.0`
- npm

## Quiz Structure

Quiz definitions are created in page files such as `src/pages/consultation.tsx` and passed to `CreateQuiz`:

```tsx
{
	key: "diagnosed",
	next: (answers) =>
		getAnswer(answers, "diagnosed") ? "pregnancy" : "reaction",
	component: (props) => (
		<YesNoQuestion {...props} question="Have you been diagnosed?" />
	),
}
```

The main quiz code lives in `src/modules/QuizBuilder`:

- `helpers/quiz.ts` defines question, answer, and quiz types and lookup helpers.
- `hooks/useQuiz.ts` manages the current question, answers, navigation history, and completion state.
- `index.tsx` renders the current question component and navigation controls.

Answers are stored as an ordered array of key-value entries:

```ts
[
	{ key: "diagnosed", value: true },
	{ key: "medication", value: false },
]
```

Use `getAnswer(answers, key)` to read an answer by key. When a question is answered again, its existing entry is updated without changing the order of the other answers.

## Custom Question Components

Question components receive:

```ts
interface QuestionComponentProps {
	onAnswer: (value: string | boolean | number) => void;
	value?: string | boolean | number;
}
```

For example, a yes/no component can use strict boolean checks for selected styling:

```tsx
const yesSelected = value === true;
const noSelected = value === false;
```

This allows the quiz system to support different answer types while each component remains responsible for interpreting its own value.
