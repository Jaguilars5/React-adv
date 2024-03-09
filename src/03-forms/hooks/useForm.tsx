import { ChangeEvent, useState } from "react";

export function useForm<T>(initState: T) {
	const [formData, setFromData] = useState(initState);

	const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setFromData((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	const resetForm = () => {
		setFromData({ ...initState });
	};

	const isValidEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	return { ...formData, formData, onChange, resetForm, isValidEmail };
}
