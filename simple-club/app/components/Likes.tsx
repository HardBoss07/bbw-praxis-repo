"use client"

import { useState } from "react";

export default function Likes() {
    const initialLikes = 263;
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const handleLikeToggle = () => {
        setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1);
        setLiked(prevLiked => !prevLiked);
    };

    const buttonText = liked ? "Unliken" : "Liken";

    return (
        <div className="p-6 flex justify-center">
            <div className="text-center">
                <p className="text-xl">Likes: {likes}</p>
                <button
                    onClick={handleLikeToggle}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
