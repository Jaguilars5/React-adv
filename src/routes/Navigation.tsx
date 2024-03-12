import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import {
	DynamicForm,
	FormikAbstraction,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterFormikPage,
	RegisterPage,
} from "../03-forms/pages";
import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img
						src={logo}
						alt="react-logo"
					/>
					<ul>
						<li>
							<NavLink
								to="/register"
								end
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Register Page
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/formik-basic"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Formik Basic
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/formik-yup"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Formik Yup
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/formik-components"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Formik Components
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/formik-abstraction"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Formik Abstraction
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/register-formik-page"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Register Formik Page
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/dynamic-form"
								className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Dynamic Form
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path="/register"
						element={<RegisterPage />}
					/>

					<Route
						path="/formik-basic"
						element={<FormikBasicPage />}
					/>

					<Route
						path="/formik-yup"
						element={<FormikYupPage />}
					/>

					<Route
						path="/formik-components"
						element={<FormikComponents />}
					/>

					<Route
						path="/formik-abstraction"
						element={<FormikAbstraction />}
					/>

					<Route
						path="/register-formik-page"
						element={<RegisterFormikPage />}
					/>

					<Route
						path="/dynamic-form"
						element={<DynamicForm />}
					/>

					<Route
						path="/"
						element={<h1>Home Page</h1>}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};
