import { memo } from "react";
import { ButtonPropsType } from "../../types";
import cn from "classnames";

const Button = memo(function ({
	className = "",
	disabled = false,
	label,
	onClick,
	...props
}: ButtonPropsType) {
	return (
		<button
			className={cn("btn", className, {
				"disabled": disabled
			})}
			onClick={onClick}
			{...props}
		>
			{label}
		</button>
	);
});

export default Button;
