import { CreateQuiz } from '@/modules/QuizBuilder';
import YesNoQuestion from '@/components/YesNoQuestion';
import TextQuestion from '@/components/TextQuestion';

const ConsultationQuiz = () => {
	return CreateQuiz({
		title: 'Consultation Quiz',
		questions: [
			{
				key: "pregnancy",
				required: true,
				next: "reaction",
				component: (props) => (
					<YesNoQuestion
						{...props}
						question="Are you currently pregnant or trying to become pregnant?"
					/>
				),
			},
			{
				key: "diagnosed",
				required: false,
				next: 'medication',
				component: (props) => (
					<YesNoQuestion
						{...props}
						question="Have you been formally diagnosed with Pear allergy by a doctor?"
					/>
				),
			},
			{
				key: "reaction",
				required: true,
				next: "diagnosed",
				component: (props) => (
					<YesNoQuestion
						{...props}
						question="In the last 12 months, have you had a reaction after eating Pears?"
					/>
				)
			},
			{
				key: "medication",
				required: true,
				next: "otherInfo",
				component: (props) => (
					<YesNoQuestion
						{...props}
						question="Are you currently taking any other prescription medication"
					/>
				),
			},
			{
				key: "otherInfo",
				required: true,
				next: "allergy",
				component: (props) => (
					<TextQuestion
						{...props}
						value={props.value ?? undefined}
						question="Do you want to tell the doctor anything else?"
					/>
				),
			},
			{
				key: "allergy",
				required: true,
				next: null,
				component: (props) => (
					<YesNoQuestion
						{...props}
						question="Do you have any allergic reactions to any medication?"
					/>
				)
			}
		]
	})
}

export default ConsultationQuiz;