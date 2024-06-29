import logo from '../assets/quiz-logo.png'
const Header = ({children}) => {
    return (
        <header>
            <img src={logo}/>
           <h1>{children}</h1>
        </header>
    );
};

export default Header;