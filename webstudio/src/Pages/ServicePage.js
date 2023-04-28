import { NavLink } from 'react-router-dom'
const ServicePage = () => {
    return (
        <div className="content" style={{textAlign:"start",height:"1200px"}}>
            <div class="container" style={{padding:"60px 100px",margin:"0",maxWidth:"none",backgroundColor:"#eeeeee",fontFamily:"sans-serif"}}>
			        <h1 style={{fontSize:"32px",fontWeight:"bold"}} class="service-heading">Services</h1>
				    <p style={{marginTop:"10px",fontSize:"16px"}} class="service-text">What We Offer</p>
			</div>
            <nav aria-label="breadcrumb" className="custom-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                    <li class="breadcrumb-item"><NavLink to='/service'>Services</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </div>
    )
}
export default ServicePage;