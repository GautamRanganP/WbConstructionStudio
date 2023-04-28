import { NavLink } from 'react-router-dom'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
const ServicePage = () => {
    return (
        <div className="content" style={{ textAlign: "start", height: "600px" }}>
            <div class="container wrap-portfolio" style={{margin: "0", maxWidth: "none", backgroundColor: "#eeeeee", fontFamily: "sans-serif" }}>
                <h1 style={{ fontSize: "32px", fontWeight: "bold" }} class="service-heading">Services</h1>
                <p style={{ marginTop: "10px", fontSize: "16px" }} class="service-text">What We Offer</p>
            </div>
            <nav aria-label="breadcrumb" className="custom-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                    <li class="breadcrumb-item"><NavLink to='/service'>Services</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
            <div className='d-flex justify-content-center align-items-center' style={{height:"200px"}}>
                <HourglassBottomIcon sx={{marginRight:"20px",fontSize:"34px"}} />
                <h3 style={{ textAlign: "center", fontWeight: "700" }}>Under Development</h3>
            </div>
        </div>
    )
}
export default ServicePage;