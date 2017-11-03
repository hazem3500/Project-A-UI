import React from 'react'
import CSSModules from 'react-css-modules';
import styles from '../../styles/footer.css'

const Footer = (props) => {
    return <nav>
        <a href="#">made with potato by OZ</a>
    </nav>
}

export default CSSModules(Footer, styles, { allowMultiple: true });
