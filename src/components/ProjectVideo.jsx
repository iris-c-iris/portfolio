import React from 'react';

const ProjectVideo = ({ videoSrc, poster, title, description }) => {
    return (
        <div className="bg-gray-800/70 rounded-lg overflow-hidden">
            <div className="aspect-video relative">
                <video
                    className="w-full h-full object-cover"
                    controls
                    poster={poster}
                    preload="metadata"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Optional play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all cursor-pointer">
                    <div className="bg-blue-500/80 rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectVideo;