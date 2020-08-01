export const surveyData = {
	main: [
		{
			route: "p1",
			title: "Page 1",
			questions: [
				{
					route: "q1",
					label: "Question 1",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3",
						},
					],
				},
				{
					route: "q2",
					label: "Question 2",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3 (-> addl. questions)",
							redirect: "px1",
						},
					],
				},
			],
		},
		{
			route: "p2",
			title: "Page 2",
			questions: [
				{
					route: "q1",
					label: "Question 1",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3",
						},
					],
				},
				{
					route: "q2",
					label: "Question 2",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3",
						},
					],
				},
			],
		},
	],

	// ------------------------- Bonus sections -------------------------

	optional: [
		{
			route: "px1",
			title: "Bonus Page 1",
			questions: [
				{
					route: "q1",
					label: "Question 1",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3",
						},
					],
				},
				{
					route: "q2",
					label: "Question 2",
					type: "select-one",
					answers: [
						{
							text: "Answer 1",
						},
						{
							text: "Answer 2",
						},
						{
							text: "Answer 3",
						},
					],
				},
			],
		},
	],
};
