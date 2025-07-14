import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import '../styles/Profile.css';


const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <Profile id="main" />
            <Footer />
        </>
    );
}

export default ProfilePage;