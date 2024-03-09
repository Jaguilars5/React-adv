import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
	const { formData, name, email, password1, password2, onChange, resetForm, isValidEmail } =
		useForm({
			name: "",
			email: "",
			password1: "",
			password2: "",
		});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form
				noValidate
				onSubmit={onSubmit}>
				<input
					onChange={onChange}
					placeholder="name"
					type="text"
					value={name}
					name="name"
					className={`${name.trim().length <= 0 && "has-error"}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es necesario</span>}

				<input
					onChange={onChange}
					placeholder="email"
					type="email"
					value={email}
					name="email"
					className={`${!isValidEmail(email) && "has-error"}`}
				/>
				{!isValidEmail(email) && <span>Email no es valido</span>}

				<input
					onChange={onChange}
					placeholder="password"
					type="password"
					value={password1}
					name="password1"
				/>
				{password1.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>La contraseña tiene que tener mínimo 6 letras</span>
				)}

				<input
					onChange={onChange}
					placeholder="Repeat password"
					type="password"
					value={password2}
					name="password2"
				/>
				{password2.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password2.trim().length > 0 && password1 !== password2 && (
					<span>Las contraseñas deben de ser iguales</span>
				)}

				<button type="submit">Create</button>

				<button
					type="button"
					onClick={resetForm}>
					Reset
				</button>
			</form>
		</div>
	);
};
