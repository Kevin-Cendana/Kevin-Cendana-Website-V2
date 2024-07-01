import { useAPNGSupport } from './General.js';
import lofiPng from './assets/lofi.png';
import lofiGif from './assets/lofi.gif';

function Home() {
    const lofiSrc = useAPNGSupport(lofiPng, lofiGif);
    return (
        <section className="home">
            <div className="lofi-video-wrapper">
                <img src={lofiSrc} className="lofi-video" alt="React logo" />
            </div>
        </section>
    );
}

export default Home;