import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Navbar } from "./NavBar/navbar"
import { ApplicationViews } from "./Views/ApplicationViews"
import { Authorized } from "./Views/Authorized"


export const ParkTracker = () => {
  
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
			
					<Navbar />
					<ApplicationViews />
					         
			</Authorized>
		} />
	</Routes>
}
