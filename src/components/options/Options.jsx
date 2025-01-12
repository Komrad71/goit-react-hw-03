import css from "./Options.module.css";

const Options = ({ onUpdate, totalFeedback }) => {
	return (
		<>
			<ul className={css.optionsList}>
				<li className={css.optionsListItem}>
					<button
						className={css.optionsBtn}
						type="button"
						onClick={() => onUpdate("good")}
					>
						Good
					</button>
				</li>
				<li className={css.optionsListItem}>
					<button
						className={css.optionsBtn}
						type="button"
						onClick={() => onUpdate("neutral")}
					>
						Neutral
					</button>
				</li>
				<li className={css.optionsListItem}>
					<button
						className={css.optionsBtn}
						type="button"
						onClick={() => onUpdate("bad")}
					>
						Bad
					</button>
				</li>
				{totalFeedback > 0 && (
					<li className={css.optionsListItem}>
						<button
							className={css.optionsBtn}
							type="button"
							onClick={() => onUpdate("reset")}
						>
							Reset
						</button>
					</li>
				)}
			</ul>
		</>
	);
};

export default Options;