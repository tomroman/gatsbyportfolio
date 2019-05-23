import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    {/* <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
 
                    </ul> */}
                    <ul className="copyright">
                        <li>&copy; Gatsby</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

