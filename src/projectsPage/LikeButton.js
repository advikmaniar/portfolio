import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = ({ projectId }) => {
    const initialLiked = localStorage.getItem(`liked_${projectId}`) === "true";
    const initialCount = parseInt(localStorage.getItem(`likeCount_${projectId}`)) || 0;

    const [liked, setLiked] = useState(initialLiked);
    const [likeCount, setLikeCount] = useState(initialCount);

    useEffect(() => {
        localStorage.setItem(`liked_${projectId}`, liked);
        localStorage.setItem(`likeCount_${projectId}`, likeCount);
    }, [liked, likeCount, projectId]);

    const handleLikeToggle = (event) => {
        event.stopPropagation();

        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton
                sx={{
                    color: liked ? "red" : "grey",
                    borderRadius: "30%",
                    "&:hover": {
                        transform: "scale(1.2)",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                    transition: "all 0.3s ease",
                }}
                onClick={handleLikeToggle}
            >
                <FavoriteIcon />
            </IconButton>
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>{likeCount}</span>
        </div>
    );
};

export default LikeButton;
