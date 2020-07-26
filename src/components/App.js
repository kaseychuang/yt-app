import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideos';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("buildings");

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={search} />

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />

                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />

                    </div>
                </div>

            </div>
        </div>
    )



}

export default App;


// class App extends React.Component {
//     state = {
//         videos: [],
//         selectedVideo: null
//     }

//     componentDidMount() {
//         this.onTermSubmit('anna akana')
//     }

//     onTermSubmit = async (term) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term,
//                 part: "snippet",
//                 maxResults: 5,
//                 type: 'video',
//                 key: KEY
//             }
//         });

//         this.setState({ 
//             videos: response.data.items, 
//             selectedVideo: response.data.items[0] 
//         })

//     }

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//     }

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onTermSubmit={this.onTermSubmit} />

//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />

//                         </div>
//                         <div className="five wide column">
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default App;