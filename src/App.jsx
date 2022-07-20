import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchBar from "./components/SearchBar";
import { Card, Container, LoadingText, NoImg } from "./components/StyledComp";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [term]);

    return (
        <Container>
            <SearchBar searchQuery={(query) => setTerm(query)} />

            {!isLoading && images.length === 0 && (
                <NoImg>No Images Found</NoImg>
            )}

            {isLoading ? (
                <LoadingText>Loading...</LoadingText>
            ) : (
                <Card>
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </Card>
            )}
        </Container>
    );
}

export default App;
