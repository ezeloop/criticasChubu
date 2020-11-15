import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import styles from './Layout.module.scss'
import Sidebar from '../Sidebar'
import Oculto from '../Oculto/Oculto'

import {
    makeStyles
} from '@material-ui/core'

const estilos = makeStyles( theme => ({
    root: {
        display: 'flex'
    }
}))


const Layout = ({ children }) => (
    <div className={styles.Layout}>
        <Navbar />
        
            <main className={styles.main}>
                {children}
            </main>
        <Oculto />
        <Footer />
    </div>
)
 
export default React.memo(Layout);