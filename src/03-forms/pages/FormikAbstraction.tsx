import { Formik, Form } from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Abstraction</h1>

			<Formik
				initialValues={{ firstName: "", lastName: "", email: "", terms: false, jobType: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Debe tener 15 caracteres o menos").required("Requerido"),
					lastName: Yup.string().max(15, "Debe tener 15 caracteres o menos").required("Requerido"),
					email: Yup.string().email("El correo no tiene un formato valido").required("Requerido"),
					terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
					jobType: Yup.string()
						.notOneOf(["", "it-jr"], "Debes seleccionar una opción valida")
						.required("Requerido"),
				})}>
				{(formik) => (
					<Form>
						<MyTextInput
							label="Nombre"
							name="firstName"
							placeholder="Nombre"
						/>

						<MyTextInput
							label="Apellido"
							name="lastName"
							placeholder="Apellido"
						/>

						<MyTextInput
							label="Correo"
							name="email"
							placeholder="Correo"
							type="email"
						/>

						<MySelect
							label="jobType"
							name="jobType">
							<option value="">Escoge una opción</option>
							<option value="developer">Escoge una Developer</option>
							<option value="designer">Escoge una Designer</option>
							<option value="it-senior">Escoge una It-Senior</option>
							<option value="it-jr">Escoge una It-Jr</option>
						</MySelect>

						<MyCheckbox
							label="Términos y condiciones"
							name="terms"
						/>

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
