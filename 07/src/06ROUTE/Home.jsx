import { Link } from "react-router-dom"


const Home = ()=>{

    return (
        <>
            <h1>Home PAGE</h1>
            <hr/>
            <ul>
                <li> <Link to="/">HOME</Link> </li>

                <li> <Link to="/about?name=katarina%age=27">ABOUT_1</Link> </li>
                <li> <Link to="/about?name=karina%age=27">ABOUT_2</Link> </li>

                <li> <Link to="/contact/seo/24">CONTACT</Link> </li>
            </ul>
        </>
    )
}

export default Home