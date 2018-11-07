import React from 'react';
import {Item} from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title;

    return (
        <Item onClick={() => onVideoSelect(video)}>
            <Item.Image size='tiny' src={imageUrl} />
            <Item.Content verticalAlign='top'>
                <Item.Header>{title}</Item.Header>
            </Item.Content>
        </Item>
    );
}

export default VideoListItem;