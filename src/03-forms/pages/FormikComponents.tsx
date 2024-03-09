import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor="firstName">First Name</label>
						<Field  
							name="firstName"
							type="text"
						/>
						<ErrorMessage
							component="span"
							name="firstName"
						/>

						<label htmlFor="lastName">Last Name</label>
						<Field
							name="lastName"
							type="text"
						/>
						<ErrorMessage
							component="span"
							name="lastName"
						/>

						<label htmlFor="email">Email Address</label>
						<Field
							name="email"
							type="email"
						/>
						<ErrorMessage
							component="span"
							name="email"
						/>

						<label htmlFor="jobType">Job Type</label>
						<Field
							name="jobType"
							as="select">
							<option value="">Escoge una opción</option>
							<option value="developer">Escoge una Developer</option>
							<option value="designer">Escoge una Designer</option>
							<option value="it-senior">Escoge una It-Senior</option>
							<option value="it-jr">Escoge una It-Jr</option>
						</Field>
						<ErrorMessage
							component="span"
							name="jobType"
						/>

						<label>
							<Field
								name="terms"
								type="checkbox"
							/>
							Términos y condiciones
						</label>
						<ErrorMessage
							component="span"
							name="terms"
						/>

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
