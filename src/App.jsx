import { useState,  useEffect } from 'react'
import Description from './components/deskription/Description.jsx';
import Feedback from './components/feedback/Feedback.jsx';
import  Options from './components/options/Options.jsx'
import  Notification from './components/notification/Notification.jsx'

const App = () => {
	const [feedback, setFeedback] = useState(() => {
		const savedFeedback = window.localStorage.getItem("feedback");

		if (savedFeedback) {
			return JSON.parse(savedFeedback);
		}

		return {
			good: 0,
			neutral: 0,
			bad: 0,
		};
	});

	useEffect(() => {
		window.localStorage.setItem("feedback", JSON.stringify(feedback));
	}, [feedback]);


	
	const total = feedback.good + feedback.neutral + feedback.bad;
	const positivePercentage = Math.round((feedback.good / total) * 100);

	const updateFeedback = (feedbackType) => {
		if (feedbackType === "reset") {
			setFeedback({
				good: 0,
				neutral: 0,
				bad: 0,
			});
			return;
		}
		return setFeedback({
			...feedback,
			[feedbackType]: feedback[feedbackType] + 1,
		});
	};

	return (
		<main>
			<section>
				<Description />
				<Options
					onUpdate={updateFeedback}
					totalFeedback={total}
				/>
				{total ? (
					<Feedback
						good={feedback.good}
						neutral={feedback.neutral}
						bad={feedback.bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				) : (
					<Notification message="No feedback yet!" />
				)}
			</section>
		</main>
	);
};

export default App;