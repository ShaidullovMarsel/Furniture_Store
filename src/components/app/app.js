
import Popular from '../popular/popular';
import Promo from '../promo/promo';
import Offers from '../offers/offers'
import Footer from '../footer/footer'
import './app.scss';

function App() {
    return (
        <div className="app">
            <Promo/>
            <Popular/>
            <Offers/>
            <Footer/>
        </div>
    )
}

export default App;