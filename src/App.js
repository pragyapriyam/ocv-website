import './App.css';
import bannerMobile from './images/banner-mobile2.jpg';
import bannerDesktop from './images/banner.jpg';

function App() {
  return (
    <>
    <div className="App">
      <img src={bannerMobile} className="App-banner-mobile" alt="mobile banner" />
      <img src={bannerDesktop} className="App-banner-desktop" alt="desktop banner" />
    </div>
    </>
  );
}

export default App;
