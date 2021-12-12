import React from 'react'
import './Gallery.css'
import Image1  from './Gallery/Image1.jpg'
import Image2  from './Gallery/Image2.jpg'
import serverbox  from './Gallery/serverbox.jpg'
import xiaomi  from './Gallery/xiaomi.jpg'
import cctv_footage  from './Gallery/cctv_footage.jpg'
import { Card, CardImg } from 'reactstrap';

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-top">
                <h1>Gallery</h1>
                <p>Showcase of Nasa Technical Solutions.</p>
            </div>

            <div className="gallery-showcase">
            <Card className="card-style">
                <CardImg className="gallery-image" src={Image1} height="300" alt="Card image cap" />
                {/* <CardBody>
                    <CardTitle >haha</CardTitle>
                    <CardText>hahahz</CardText>
                </CardBody> */}
            </Card>

            <Card className="card-style">
                <CardImg className="gallery-image" height="300" src={Image2} alt="Card image cap" />
                {/* <CardBody>
                    <CardTitle >haha</CardTitle>
                    <CardText>hahahz</CardText>
                </CardBody> */}
            </Card>

            <Card className="card-style">
                <CardImg className="gallery-image" src={serverbox} height="300" alt="Card image cap" />
                {/* <CardBody>
                    <CardTitle >haha</CardTitle>
                    <CardText>hahahz</CardText>
                </CardBody> */}
            </Card>

            </div>

            <div className="gallery-showcase">
            <Card className="card-style">
                <CardImg className="gallery-image" src={cctv_footage} height="300" alt="Card image cap" />
                {/* <CardBody>
                    <CardTitle >haha</CardTitle>
                    <CardText>hahahz</CardText>
                </CardBody> */}
            </Card>

            <Card className="card-style">
                <CardImg className="gallery-image" height="300" src={xiaomi} alt="Card image cap" />
                {/* <CardBody>
                    <CardTitle >haha</CardTitle>
                    <CardText>hahahz</CardText>
                </CardBody> */}
            </Card>

            </div>

        </div>
    )
}

export default Gallery
