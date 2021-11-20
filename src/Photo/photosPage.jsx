import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

import PhotoCollection from "./photoCollection";
const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const photos = [
        'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg',
        'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
        'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmhTGRptOs8HVpubjc-U6FgJnaQwvSPNm0Q&usqp=CAU',
        'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
        'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg',
        'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
        'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmhTGRptOs8HVpubjc-U6FgJnaQwvSPNm0Q&usqp=CAU',

    ];


    const openImageViewer = () => setIsViewerOpen(true);

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    return (
        <div className="my-20 ">


            {isViewerOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImage}
                    disableScroll={false}
                    onClose={closeImageViewer}
                />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                    <PhotoCollection image={photo} openImageViewer={openImageViewer} />
                ))}
            </div>
        </div>
    );
};
export default Photos;