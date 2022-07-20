import React from "react";
import { InsideCard, PaddedDiv, Tags, User } from "./StyledComp";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(",");

    return (
        <div>
            <InsideCard>
                <img src={image.webformatURL} alt="" className="w-full" />
                <PaddedDiv>
                    <User>Photo by {image.user}</User>
                    <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                    </ul>
                </PaddedDiv>
                <div className="px-6 py-4">
                    {tags.map((tag, index) => (
                        <Tags key={index}>#{tag}</Tags>
                    ))}
                </div>
            </InsideCard>
        </div>
    );
};

export default ImageCard;
