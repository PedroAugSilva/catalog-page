import './Title.scss';
import '../../Global.scss'
import bg from '../../assets/bg-img.jpg'

export const Title = () =>{
 

    return(
        <div className="title" >
            <h1>SHOES</h1>
            <figure>
                <img src={bg} alt="bg-img" />
            </figure>
        </div>
    );
}