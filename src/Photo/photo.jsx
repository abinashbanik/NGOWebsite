import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import PhotoCollection from "./photoCollection";
const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const photos = [
        'https://lh3.ggpht.com/p/AF1QipO1LzzjxOugb0Oz3P-l_DHJB5ajfYh1b4V6Piqf=s1536',
        'https://lh3.ggpht.com/p/AF1QipO2myFcBoiDSgx5l5jcr1k5vcO5t-kO6MyDSUQM=s1024',
        'https://lh3.ggpht.com/p/AF1QipPFLfBkhHpQOchVh6BMHgarPO_Z3bxv1KdrqJ8k=s1536',
        'https://lh3.ggpht.com/p/AF1QipPjedPRQ2QWi7DJSZnLA_BZ0b-0iQlB0VT8-R-d=s1536',
        'https://lh3.ggpht.com/p/AF1QipNI8bTZquoXTJk0xnoDLMJX1aelHeXcasRd0VzU=s1536',
        'https://lh3.ggpht.com/p/AF1QipM5VsgHVUtxZY9cTjyJOGFcLyZu2ep9Qk09avjd=s1536',
        'https://lh3.ggpht.com/p/AF1QipNMwvrG0BOMkox0dddlSbua1VHfB9FKDanerpyr=s1536',
        'https://lh3.ggpht.com/p/AF1QipMZwfjJOp1OOZn9fM2-fxodMyPtdFQpre6B18fj=s1536',
        'https://lh3.ggpht.com/p/AF1QipMsaZXZy-UBVtI86UyjLJxr2KUXvCMGpU2RpWCK=s1536',


    ];


    const openImageViewer = () => setIsViewerOpen(true);

    const closeImageViewer = () => {
        setIsViewerOpen(false);
    };

    return (
        <div>
            <div className="my-10 mx-10 md:ml-24 ">


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
        </div>
    );
};
export default Photos;