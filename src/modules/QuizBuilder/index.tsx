import Head from "next/head";
import { getAnswer, type Question } from '@/modules/QuizBuilder/helpers/quiz';
import { useQuiz } from '@/modules/QuizBuilder/hooks/useQuiz';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ThankYouGeneric from "@/components/ThankYouGeneric";

interface Props {
  title: string;
  questions: Question[];
}

export const CreateQuiz = ({ title, questions }: Props) => {

	const {
    currentKey,
    currentQuestion,
    answers,
    isComplete,
    answerCurrent,
    goBack,
    goForward,
    canGoBack,
    canGoForward,
    position,
    total,
    progressPercentage
  } = useQuiz(questions);

  console.log('current', currentQuestion);

	const QuestionComponent = currentQuestion?.component;

  if ( isComplete ) {
    // any completion processing can happen here
    // for now, logging
    console.log('Completed Answers', answers);
  }

	return (

		<div className="overflow-hidden">
			<Head>
        <title>{title}</title>
			</Head>

      <div className="flex min-h-screen flex-col">
        <Header percentage={progressPercentage} />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
          {isComplete && <ThankYouGeneric goBack={goBack} />}

          {QuestionComponent && !isComplete && (
            <div>
              <h1 className="font-bold mb-4">{title} {currentQuestion.required === false ? '(optional)' : ''}</h1>

              <p className="mb-4 text-sm text-gray-500">
                Question {position} of {total}
              </p>


              <QuestionComponent
                onAnswer={answerCurrent}
                value={currentKey ? getAnswer(answers, currentKey) : undefined}
              />

              <div className="mt-6 flex justify-between gap-6 text-sm">
                {(
                  <button
                    onClick={goBack}
                    className={`text-gray-500 hover:text-gray-700 ${!canGoBack ? 'invisible disabled' : ''}`}
                    disabled={!canGoBack}
                  >
                    ← Back
                  </button>
                )}

                {(canGoForward || !currentQuestion.required) && (
                  <button
                    onClick={goForward}
                    className="`text-gray-500 hover:text-gray-700`">
                    Next →
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>


		</div>
	)
}