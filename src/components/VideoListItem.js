import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <Card onClick={() => onVideoSelect(video)}>
            <Image
                src={imageUrl}
                size='medium'
            />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
        </Card>
    );
}

export default VideoListItem;