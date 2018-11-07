import React from 'react';
import { Grid } from 'semantic-ui-react';

import VideoListItem from './VideoListItem'

const VideoList = (props) => {
    const VideoItems = props.videos.map(video => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} 
            />
        );
    });

    return (
        <Grid.Column width="6">
            {VideoItems}
        </Grid.Column>
    );
}

export default VideoList;