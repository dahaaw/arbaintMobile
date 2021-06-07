import React from 'react';
import { Card } from 'antd';

export default function ProductHome(props) {
    return (
        <Card
            hoverable
            className="p-1"
            bodyStyle={{padding:0}}
            cover={<img alt="example" src={props.image} />}
        >
            <div className="additional">
                <small className="price">Price: 20$</small>
                <p>Author: John Doe</p>
            </div>
        </Card>
    )
}
