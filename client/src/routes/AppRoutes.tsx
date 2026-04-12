import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/Input/FloatingLabelInput";
import { useState } from "react";

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birhtDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>
            <h1 className="text-red-600">Hello World</h1>
            <div className="mb-4">
                <FloatingLabelInput 
                label="First Name"
                type="text" 
                name="first_name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                autoFocus/>
                <p className="front-medium">First Name: {firstName} </p>
            </div>

            <div className="mb-4">
                <FloatingLabelInput 
                label="Last Name"
                type="text" 
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e. target.value)}
                required
                />
                <p className="front-medium">Last Name: {lastName}</p>
            </div>

            <div className="mb-4">
                <FloatingLabelInput label="Birth Date"
                type="date" name="birth_date" 
                value={birhtDate}
                onChange={(e) => setBirthDate(e.target.value)}/>
                <p className="front-medium">Birth Date: {birhtDate} </p>
            </div>

            <div className="mb-4">
                <FloatingLabelInput
                label="Password" type="password" name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value) }/>
                <p className="front-medium">Password: {password} </p>
            </div>


        </>
    );
};

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<SampleComponent />} />
                </Route>
            </Routes>

        </>

    );

};


export default AppRoutes;