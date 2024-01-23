import './LogInPage.css'
import InputForms from "../InputForms/index.jsx";

const LogInPage = () => {
    return (
        <>
            <p>LOG IN HERE MOTHER PLUM</p>
            <InputForms className="logInforms" placeholder={"username"}/>
            <InputForms className="logInforms" placeholder={"password"}/>
        </>
    )
}
export default LogInPage