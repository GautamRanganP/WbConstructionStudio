

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import "bootstrap/js/src/collapse.js";
import { Collapse } from '@material-ui/core'


const NavbarBootstrap = () => {
    const [showNav, setShowNav] = useState(false);
    const handleToggle = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width:"100%"}}>
                <div className="container-fluid d-md-flex d-lg-none">
                    <div className='brand-icon-header' style={{ display: "flex", alignItems: "center", flex: "1" }}>
                        <ViewInArIcon sx={{
                            marginLeft: '0px',
                            marginRight: '5px',
                        }}></ViewInArIcon>
                        <Link className="navbar-brand" style={{ padding: "0px",fontSize:"16px",fontWeight:"700"}} to="WbConstructionStudio/">Your Brand</Link>
                    </div>
                    <div style={{ flex: "1", justifyContent: "flex-end",display:"flex"}}>
                        <button className="navbar-toggler" style={{display:"flex",alignItems:"center",padding:"10px",borderRadius:"0px"}} onClick={handleToggle}>
                            <span className="navbar-toggler-icon"  style={{marginRight:"10px"}}></span>
                            <span style={{fontSize:"16px",fontWeight:"700"}}>Menu</span>
                        </button>
                    </div>
                </div>
                <div className='collaspe-dropdown d-md-flex d-lg-none' style={{margin:"10px 20px"}} >
                    <Collapse in={showNav}>
                        <div className="collaspe" >
                            <ul className="navbar-nav">
                                <li className="nav-item-mobile">
                                    <NavLink className="nav-line-mobile"  activeClassName="active" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/'>Home</NavLink>
                                </li>
                                <hr className='mobile-break-line' style={{margin:"0px"}}></hr>
                                <li className="nav-item-mobile">
                                    <NavLink className="nav-line-mobile"  activeClassName="active" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/service'>Services</NavLink>
                                </li>
                                <hr className='mobile-break-line' style={{margin:"0px"}}></hr>
                                <li className="nav-item-mobile">
                                    <NavLink className="nav-line-mobile" activeClassName="active" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/portfolio'>Portfolio</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
                <div className="container-fluid d-none d-lg-flex">
                    <div className='brand-icon-header' style={{ display: "flex", alignItems: "center", marginRight: "70px" }}>
                        <ViewInArIcon sx={{
                            marginLeft: '40px',
                            marginRight: '20px'
                        }}></ViewInArIcon>
                        <Link className="navbar-brand" style={{ padding: "0px", fontSize: "24px", fontWeight: "700" }} to="WbConstructionStudio/">Your Brand</Link>
                    </div>
                    <div className="collaspe"  >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/service'>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{ fontWeight: "700", padding: "15px" }} to='WbConstructionStudio/portfolio'>Portfolio</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    )
}
export default NavbarBootstrap;