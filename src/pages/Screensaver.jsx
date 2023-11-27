import { observer } from 'mobx-react-lite';

function Screensaver() {
    return (
        <>
            <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <video style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/intro.mp4" autoPlay muted loop></video>
            </main>
        </>
   );
}
export default observer(Screensaver);