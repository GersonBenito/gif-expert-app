import React from 'react';
import { Card, Image } from 'antd';
import 'antd/dist/antd.css';

const GifGridItem = ({ id, title, url }) => {

    const { Meta } = Card;

    return (
        <Card
        className='animate__animated animate__zoomInUp'
            hoverable
            cover={
                <Image src={url} alt={title} />
            }
        >
            <Meta title={title} />
        </Card>
    )
}

export default GifGridItem
