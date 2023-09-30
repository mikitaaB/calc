import { ReactNode, memo } from "react";

const Alert = memo(function ({ children }: { children: ReactNode }) {
	return (
		<div className="mt-3 alert alert-danger" role="alert">
			{children}
		</div>
	);
});

export default Alert;
