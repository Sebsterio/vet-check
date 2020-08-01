import React from "react";
import { AnswerButton, TextInput } from "./index";
import "./Question.scss";

export const Question = ({ data, handleAnswer }) => {
	const { route, label, type, answers } = data;

	const id = "Question";

	return (
		<div className="Question">
			<label htmlFor={id} className="Question__text">
				{label}
			</label>

			{type === "select-one" && (
				<div className="Question__answers" id={id}>
					{answers.map((a, i) => (
						<AnswerButton
							key={`${route}-${i}`}
							i={i}
							data={a}
							handler={handleAnswer}
						/>
					))}
				</div>
			)}
			{type === "text" && <TextInput id={id} />}
		</div>
	);
};
