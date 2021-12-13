import './header.scss';
import {Person, Mail} from "@material-ui/icons"

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className='left'> 
                    <a href="#about" className='logo'>genius.</a>
                    <div className='itemContainer'>
                      <Person className='icon'/>
                      <span>+44 924 12 74</span>  

                    </div>
                    <div className='itemContainer'>
                      <Mail className='icon'/>
                      <span>bkhanal87@gmail.com</span>  

                    </div>
                </div>
                <div className='right'>
                </div>
            </div>
            
        </div>
    )
}
