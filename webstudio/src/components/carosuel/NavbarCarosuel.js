import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import './CarosuelBootstrap.css';

//  "https://via.placeholder.com/1500x300/771796" 
//  "https://via.placeholder.com/1500x300/24f355" 
const NavbarCarosuel = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        console.log("true")
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="content-carosuel">
            <div className='d-md-block d-lg-none'>
                <div class="icon-wrap-mobile">
                    <PhoneIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                    <div>
                        <p className='info-label'>Phone Number:</p>
                        <span className='info-ans'>1-800-506-266</span>
                    </div>
                </div>
                <hr className='bottom-line'></hr>
                <div class="icon-wrap-mobile">
                    <AccessTimeIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                    <div>
                        <p className='info-label'>Opening times:</p>
                        <span className='info-ans'>Mon - Sat: 7.00 - 18:00</span>
                    </div>
                </div>
                <hr className='bottom-line'></hr>
                <div class="icon-wrap-mobile">
                    <EmailIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                    <div>
                        <p className='info-label' style={{ textAlign: "start" }}>E-mail address:</p>
                        <span className='info-ans'>info[at]structure.com</span>
                    </div>
                </div>
                <hr className='bottom-line'></hr>
                <div className='icon-wrap-mobile'>
                    <FacebookIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                    <TwitterIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                    <YouTubeIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://via.placeholder.com/1500x500/771796" class="d-block w-100" alt="..." />

                        <div className='d-none d-lg-flex'>
                            <div className='carosuel-discription'>
                                <h3>Dreaming of A New Unique Kitchen?</h3>
                                <p>StructurePress made over 200 kitchens worldwide. We offer free 3D modeling and 3 year warranty.</p>
                            </div>
                            <div className='carosuel-btn'>
                                <button className='btn-over' onClick={handleClickOpen}>Enquire Now</button>
                                <button className='btn-over'>Read More</button>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="https://via.placeholder.com/1500x500/771796" class="d-block w-100" alt="..." />

                        <div className='d-none d-lg-flex'>

                            <div className='carosuel-discription'>
                                <h3>Dreaming of A New Unique Kitchen?</h3>
                                <p>StructurePress made over 200 kitchens worldwide. We offer free 3D modeling and 3 year warranty.</p>
                            </div>
                            <div className='carosuel-btn'>
                                <button className='btn-over' onClick={handleClickOpen}>Enquire Now</button>
                                <button className='btn-over'>Read More</button>
                            </div>

                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src="https://via.placeholder.com/1500x500/771796" class="d-block w-100" alt="..." />

                        <div className='d-none d-lg-flex'>

                            <div className='carosuel-discription'>
                                <h3>Dreaming of A New Unique Kitchen?</h3>
                                <p>StructurePress made over 200 kitchens worldwide. We offer free 3D modeling and 3 year warranty.</p>
                            </div>
                            <div className='carosuel-btn'>
                                <button className='btn-over' onClick={handleClickOpen}>Enquire Now</button>
                                <button className='btn-over'>Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev d-md-block d-lg-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-md-block d-lg-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div className='wrap d-none d-lg-flex'>
                    {/* <div className='carosuel-btn'>
                    <button className='btn-over'>Buy Theme</button>
                    <button className='btn-over'>Read More</button>
                </div> */}
                    <div class="button-wrap">
                        <button class="carousel-control-prev prev-override" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next next-override" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="carosuel-content">
                        <div className='content-item1'>
                            <div class="icon-wrap">
                                <PhoneIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                                <div>
                                    <p className='info-label'>Phone Number:</p>
                                    <span className='info-ans'>1-800-506-266</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carosuel-content">
                        <div className='content-item2'>
                            <div class="icon-wrap">
                                <AccessTimeIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                                <div>
                                    <p className='info-label'>Opening times:</p>
                                    <span className='info-ans'>Mon - Sat: 7.00 - 18:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carosuel-content">
                        <div className='content-item3'>
                            <div class="icon-wrap">
                                <EmailIcon sx={{ marginRight: "10px", fontSize: "40px" }} />
                                <div>
                                    <p className='info-label'>E-mail address:</p>
                                    <span className='info-ans'>info[at]structure.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone Numver"
                        type="number"
                        fullWidth
                        variant="standard"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}
export default NavbarCarosuel;


