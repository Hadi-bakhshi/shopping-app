// import FooterComponent from '../Components/Footer/FooterComponent'
import Navigation from '../Components/Navigation/Navigation'

const Layout = ({children}) => {
  return (
    <div>
        <Navigation/>
        {children}
        {/* <FooterComponent/> */}
    </div>
  )
}

export default Layout