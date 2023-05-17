import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './components/VideoDetails/VideoDetails';

function App() {
    return (
        <div className="App">
            <Header />
            <VideoPlayer />
            <VideoDetails />
        </div>
    );
}

export default App;
