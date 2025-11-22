import { Link } from 'react-router'
import HeaderLogo from '../../assets/header-bg.png'
import "../../Custom_Style.css"
export default function Header() {

  const MenuLinks = <>
  
  <ul className='flex justify-evenly items-center h-full'>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Home</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Courses</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Careers</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Blog</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>About Us</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Login</li></Link>
   <Link to={'/'}>
    <li className='text-[22px] s-text-color'>Sign Up</li></Link>
  </ul>
  
  
  </>



  return (
    <section className='pop-regular'>
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
