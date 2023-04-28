

const CardHome=()=>{

    return(
        <div class="card" style={{ width: "100%", height: "auto", marginBottom: "10px", flexDirection: "row" }}>
                    <img src="https://via.placeholder.com/100x100/771796" style={{ borderRadius: '0px' }} class="card-img-top" alt="..." />
                    <div class="card-body" style={{textAlign:"start",fontSize:"14px",padding:"15px"}}>
                        <span class="card-title" style={{fontSize:"16px",fontWeight:"700"}}>Card title</span>
                        <p class="card-text" style={{display:"-webkit-box", overflow:"hidden",WebkitBoxOrient:"vertical"}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
        </div>
    )

}

export default CardHome;