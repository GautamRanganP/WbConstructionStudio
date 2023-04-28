import './CardCss.css'

const CardBootstrap = () => {
    return(
         <div class="card">
            <img src="https://via.placeholder.com/400x300/771796" style={{borderRadius:'0px'}} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
        </div>
    )

}
export default CardBootstrap;