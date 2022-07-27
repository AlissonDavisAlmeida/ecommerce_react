import { useNavigate } from "react-router-dom";
import { BackGroundImage, Body, CategoriesContainer } from "./categoryStyled";


interface CategoryProps {
    id: number
    name?: string;
    title: string
    img: string
}


function CategoryComponent(props: CategoryProps) {

    const navigate = useNavigate()
    return (
        <CategoriesContainer onClick={()=> navigate("/shop/"+props.title)}>
            

            <BackGroundImage className="background-image" 
                imageUrl={props.img}
               />
           
            <Body className="category-body-container">
                <h2>{props.title}</h2>
                <p>{`Shopping Now`}</p>
            </Body>
        </CategoriesContainer>
    );
}

export default CategoryComponent;