import Button from "./ui/Buttom";
import Link from 'next/link'

export default function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo01" 
                    aria-controls="navbarTogglerDemo01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link 
                            className="nav-link active" 
                            aria-current="page" 
                            href="#"
                            >
                            <h5>Usafihub</h5>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item mt-2">
                        <Link 
                            className="nav-link" 
                            aria-current="page" 
                            href="#"
                        >Login
                        </Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link 
                            className="nav-link" 
                            aria-current="page" 
                            href="#"
                            >
                        Help
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            aria-current="page" 
                            href="#"
                            >
                            <Button name={"Book Now"}/>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}