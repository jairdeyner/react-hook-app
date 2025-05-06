import { Navigate, Route, Routes } from "react-router"
import { UserProvider } from "./context/UserProvider"

import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="/*" element={<LoginPage />} /> */}
          <Route path="/*" element={<Navigate to="/about" />} />
        </Routes>
      </main>
    </UserProvider>
  )
}