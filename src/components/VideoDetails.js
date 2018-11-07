import React from 'react';
import { Grid, Embed } from 'semantic-ui-react';
import Loading from './Loading';

const VideoDetails = ({video}) => {
    if(!video) {
        return <Loading />
    }
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <Grid.Column width="10">
            <Embed id={video.id.videoId} placeholder={imageUrl} source='youtube' />
        </Grid.Column>
    );
}

export default VideoDetails;