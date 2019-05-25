// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `0`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
    
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import Menu from '../components/menu'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Thomas Roman</strong>, 
                    <br />
                    front end developer
                    
                    <br />
                    
                    </h1>
                </div>
                <Menu /> 
                <Footer />
            </header>
        )
    }
}

export default Header