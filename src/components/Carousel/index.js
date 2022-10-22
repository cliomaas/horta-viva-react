
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { Circle } from "@mui/icons-material";


const slideStyles = {
    width: "1400px",
    height: "477px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "90px",
    color: "#437346",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "90px",
    color: "#437346",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "477px",
    paddingBottom: "80px"
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "30px",
    color: "#97BF95"
};

const ImageSlider = () => {
    const slides = [
        { url: "Carrossel1", title: "beach" },
        { url: "Carrossel2", title: "boat" },
        { url: "Carrossel3", title: "forest" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <Box sx={[sliderStyles, { display: { xs: 'none', md: 'block' } }]}>
            <div>
                <ArrowBackIosIcon onClick={goToPrevious} sx={leftArrowStyles} />

                <ArrowForwardIosIcon onClick={goToNext} style={rightArrowStyles} />
            </div>
            <img src={require(`../../Images/${slides[currentIndex].url}.png`)} alt="carrossel" style={{ margin: "30px 30px 0px" }} />
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    slideIndex == currentIndex ? (<Circle
                        sx={[dotStyle, { color: "#437346" }]}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    />) : <Circle
                        sx={[dotStyle, { color: "#97BF95" }]}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    />
                ))}
            </div>
        </Box>
    );
};

export default ImageSlider;
