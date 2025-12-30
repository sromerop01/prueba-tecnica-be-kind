import {LoginCard} from "../../components/LoginCard"
import bg from '../../assets/background.png'

const LoginPage = () => {

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <LoginCard />
        </div>
    )
}

export default LoginPage