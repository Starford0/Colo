import ElectronicsNewArrival from '../NewArrival/ElectronicsNewArrival'
import './bestseller.css'
// import { Men } from '../All category components/All'


const BestSeller =()=>{
    return(
        <section className='bestsellerparent'>
            <div className="bestsellerwrapper">
                <div className="bestseller">
                    <h1>Best Sellers</h1>
                </div>
                <div className="bestsellerproduct">
                    <ElectronicsNewArrival />
                </div>
                
                    
            </div>
        </section>
    )
}

export default BestSeller