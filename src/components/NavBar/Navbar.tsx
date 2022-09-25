import './Navbar.scss'
import '../../Global.scss'
export const Navbar = () =>{
    
  
    return(
    <div className='navbar-component' style={{backdropFilter: "blur(10px)"}}>
        <figure>
            <img src='https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/6/2019/03/0008_h_street-shoes-logo_13.png' alt="Logo" />
        </figure>
        <nav className='navbar'>
            <ul className='navbar-itens'>
                <li>CATALOG</li>
                <li>ABOUT US</li>
                <li>BLOG</li>
                <li>CONTACT</li>
                <li>SHIPPING</li>
            </ul>
        </nav>
    </div>
    );
}