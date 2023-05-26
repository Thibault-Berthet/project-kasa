/* ------------ Code REACT pour le composant Slideshow ------------*/

import styled from "styled-components"
import { useState } from "react"
import chevronRight from "../../assets/chevron_right.svg"
import chevronLeft from "../../assets/chevron_left.svg"

const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`
const ContainerImageIndex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ContainerPicture = styled.div`
    height: 415px;
    width : 1290px;
`
const PicturesStyled = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`
const ChevronLeftStyled =styled.img`
    z-index: 1;
    margin-right: -70px;
`
const IndexStyled = styled.span`
    z-index: 1;
    margin-top: -40px;
    color: white;
`
const ChevronRightStyled =styled.img`
    z-index: 1;
    margin-left: -70px;
`

function Slideshow(props) {
    
    // Index du premier slide défini à 0
    const [slide, setSlide] = useState(0)
    // Longueur du tableau des slides
    const lengthSlides = props.pictures.length

    // Fonction qui reviens au premier slide quand on fait suivant au dernier
    const nextSlide = () => {
        setSlide(slide === lengthSlides - 1 ? 0 : slide + 1)
    }

    // Fonction qui va au dernier slide quand on fait précédent au premier
    const prevSlide = () => {
		setSlide(slide === 0 ? lengthSlides - 1 : slide - 1); // repartir au dernier slide quand on est au premier
	}

    return (
        <SlideContainer>
            {lengthSlides > 1 && (
				<ChevronLeftStyled
					src={chevronLeft} //Affichage des flèches seulement si length > 1
					onClick={prevSlide}
				/>
			)}
            {props.pictures.map((slides, index) => (
				<ContainerImageIndex key={index}>
                    {index === slide &&
                        <ContainerPicture>
                            <PicturesStyled src={slides}/>
                        </ContainerPicture>
                    }
					{index === slide && (
						<IndexStyled>
							{slide + 1}/{lengthSlides}
						</IndexStyled>
					)}
				</ContainerImageIndex>
			))}
            {lengthSlides > 1 && (
				<ChevronRightStyled
					src={chevronRight}
					onClick={nextSlide}
				/>
			)}
        </SlideContainer>
    )
}

export default Slideshow