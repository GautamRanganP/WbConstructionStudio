import CardPortfolio from "../components/cards/CardPortfolio";
import { NavLink } from 'react-router-dom'

const PortfolioPage=()=>{
    return(
        <div className="content" style={{textAlign:"start"}}>
            <div class="container" style={{padding:"60px 100px",margin:"0",maxWidth:"none",backgroundColor:"#eeeeee",fontFamily:"sans-serif"}}>
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
            <div className="card-portfolio-grid">
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
                <CardPortfolio></CardPortfolio>
            </div>
        </div>
    )
}
export default PortfolioPage;