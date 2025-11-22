import { Link } from 'react-router'
import HeaderLogo from '../../assets/header-bg.png'

export default function Header() {

  const MenuLinks = <>
  
  <ul className='flex items-center justify-evenly'>
   <Link to={'/'}>
    <li className='text-[22px] s_text_color'>Home</li></Link>
  </ul>
  
  
  </>



  return (
    <section>
      <div className="main-bg-color h-[100px] flex items-center justify-between">
        <div>
          <img src={HeaderLogo} alt="" />
        </div>
        <div>
          {MenuLinks}
        </div>
      </div>
    </section>
  )
}
