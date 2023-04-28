import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './FooterCss.css';

const FooterBootStrap = () => {
    return (
        <div className="footer">
            <div className='brand-icon'>
                <ViewInArIcon sx={{
                    fontSize: "40px",
                    marginLeft: '0px',
                    marginRight: '20px'
                }}></ViewInArIcon>
                <Link className="navbar-brand" style={{ padding: "0px", fontSize: "34px", fontWeight: "700" }} to="/">Your Brand</Link>
            </div>
            <div className='service-info'>
                <h3>Our services</h3>
                <p>Metal Roofing</p>
                <p>Construction Consultant</p>
                <p>Green Building</p>
                <p>Laminate Flooring</p>
                <p>House Renovation</p>
            </div>
            <div className='contact-info'>
                <h3>Contact us</h3>
                <div className='wrapper'>
                    <LocationOnIcon/>
                    <p>227 Marion Street Avenue, UK</p>
                </div>
                <div className='wrapper'>
                    <PhoneIcon/>
                    <p>1-888-123-4567</p>
                </div >
                <div className='wrapper'>
                    <EmailIcon/>
                    <p>info@structurepress.com</p>
                </div>
                <div className='wrapper'>
                    <PublicIcon/>
                    <p>www.structurepress.com</p>
                </div>
            </div>

        </div>
    )
}
export default FooterBootStrap;