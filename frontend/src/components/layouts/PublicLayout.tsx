import {Outlet} from 'react-router-dom'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const PublicLayout = () => {
  return (
    <div>
        <Navbar />
        <main className='min-h-screen'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PublicLayout