import { FaReact } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-img"><img className="headshot-thumb" src="./img/HKDL Hotel landscape headshot.jpeg" alt="headshot of Nathan L. Freeman" /></div>
                <div>
                    <h3>&copy; 2022 Nathan L. Freeman</h3>
                    <h5 className="dev-credit">Nathan is also a web developer and built this site using React <FaReact />. <a href="http://www.nathanfreeman.com" target="_blank" rel="noreferrer">View his online portfolio.</a> </h5>
                </div>
            </footer>
        </>
    )
}

export default Footer