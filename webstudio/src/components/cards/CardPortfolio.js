


const CardPortfolio = () => {
    return (
        <div class="card" style={{ width: "300px", height: "300px",marginBottom:"40px"}}>
            <img src="https://via.placeholder.com/200x100/771796" style={{ borderRadius: '0px', borderBottomWidth: "5px", borderBottomColor: "black", borderBottomStyle: "solid" }} class="card-img-top" alt="..." />
            <div class="card-body" style={{position:"relative"}}>
                <div className="wrap-badge" style={{display:"flex",justifyContent:"center"}}>
                    <span style={{ color: "white", backgroundColor: "black",padding:"8px",borderRadius:"5px",position:"absolute",top:"-25px" }}>
                        Project Manager
                    </span>
                </div>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>

        </div>
    )

}
export default CardPortfolio;