import { Form, Formik } from "formik";
import { MyTextInput } from "../components/MyTextInput";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{ name: "", email: "", password1: "", password2: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.max(15, "Debe tener 15 caracteres o menos")
						.min(2, "El nombre debe tener un mínimo de 2 caracteres")
						.required("Requerido"),
					email: Yup.string().email("El correo no tiene un formato valido").required("Requerido"),
					password1: Yup.string()
						.min(6, "La contraseña debe tener mas de 6 caracteres")
						.required("Requerido"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas deben ser iguales")
						.required("Requerido"),
				})}>
					
				{({ handleReset }) => (
					<Form>
						<MyTextInput
							label="Nombre"
							name="name"
						/>

						<MyTextInput
							label="Correo"
							name="email"
						/>

						<MyTextInput
							label="Contraseña"
							name="password1"
							type="password"
						/>

						<MyTextInput
							label="Repetir Contraseña"
							name="password2"
							type="password"
						/>

						<button type="submit">Guardar</button>

						<button
							type="button"
							onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
