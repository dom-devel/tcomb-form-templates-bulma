import React from "react";
import classnames from "classnames";

export default function FormGroup(props) {
	const className = {
		"form-group": true,
		"is-danger": props.hasError
	};
	if (props.className) {
		className[props.className] = true;
	}
	return <div className={classnames(className)}>{props.children}</div>;
}
