// import CardPortfolio from "../components/cards/CardPortfolio";
import { NavLink } from 'react-router-dom';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const PortfolioPage=()=>{
    return(
        <div className="content" style={{textAlign:"start",height:"600px"}}>
            <div class="container wrap-portfolio" style={{margin:"0",maxWidth:"none",backgroundColor:"#eeeeee",fontFamily:"sans-serif"}}>
			        <h1 style={{fontSize:"32px",fontWeight:"bold"}} class="service-heading">Portfolio</h1>
				    <p style={{marginTop:"10px",fontSize:"16px"}} class="service-text">Our Projects</p>
			</div>
            <nav aria-label="breadcrumb" className="custom-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink href="/">Home</NavLink></li>
                    <li class="breadcrumb-item"><NavLink href="/portfolio">Portfolio</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>

            <div className='d-flex justify-content-center align-items-center' style={{height:"200px"}}>
                <HourglassBottomIcon sx={{marginRight:"20px",fontSize:"34px"}} />
                <h3 style={{ textAlign: "center", fontWeight: "700" }}>Under Development</h3>
            </div>
            {/* <div className="card-portfolio-grid">
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
            </div> */}
        </div>
    )
}
export default PortfolioPage;