import logo from '../assets/OIP.jpeg'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
export function Options() {
    const navigate=useNavigate();
    const location=useLocation();
    return (
        <>
            <div className="options">
                            <img src={logo} className="logo"></img>
                            <p className="welcome">WELCOME</p>
                            <button className="Dash"
                                style={{ backgroundColor: location.pathname === '/' ? 'rgb(79, 144, 240)' : 'white',
                                        color: location.pathname === '/' ? 'white' : 'black' }}
                                onClick={() => {  navigate('/') }}>
                                Dashboard
                            </button>
                            <button className="Trans" style={{ backgroundColor: location.pathname === '/transactions' ? 'rgb(79, 144, 240)' : 'white',
                                        color: location.pathname === '/transactions' ? 'white' : 'black' }}
                                onClick={() => {  navigate('/transactions') }}>
                                Transactions
                            </button>
                            <button className="report" style={{ backgroundColor: location.pathname === '/reports' ? 'rgb(79, 144, 240)' : 'white',
                                        color: location.pathname === '/reports' ? 'white' : 'black' }}
                                onClick={() => {  navigate('/reports') }}>
                                Reports
                            </button>
            </div>
        </>
    )
}