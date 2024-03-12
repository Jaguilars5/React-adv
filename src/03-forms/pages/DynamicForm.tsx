import { Form, Formik } from "formik";
import fromJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of fromJson) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === "required") {
			schema = schema.required("Este campo es requerido");
		}

		if (rule.type === "minLength") {
			schema = schema.min(
				(rule as any).value || 2,
				`Se necesita un mínimo de ${(rule as any).value || 2} caracteres`
			);
		}

		if (rule.type === "email") {
			schema = schema.email("El correo no tiene un formato valido");
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({
	...requiredFields,
});

export const DynamicForm = () => {
	return (
		<div>
			<h1>DynamicForm</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}>
				{(formik) => (
					<Form noValidate>
						{fromJson.map(({ label, name, placeholder, type, options }) => {
							if (type === "input" || type === "password" || type === "email") {
								return (
									<MyTextInput
										label={label}
										name={name}
										placeholder={placeholder}
										type={type as any}
										key={name}
									/>
								);
							} else if (type === "select") {
								return (
									<MySelect
										key={name}
										label={label}
										name={name}>
										<option value="">Selecciona una opción</option>

										{options?.map((opt) => (
											<option
												value={opt.id}
												key={opt.id}>
												{opt.label}
											</option>
										))}
									</MySelect>
								);
							}
							throw new Error(`El type: ${type} no es soportado`);
						})}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
