

interface CategoryProps {
    id: number
    name?: string;
    title: string
    img: string
}


function CategoryComponent(props: CategoryProps) {
    return (
        <div className="category-container">
            

            <div className="background-image" style={{
                backgroundImage: `url(${props.img})`
            }} />
           
            <div className="category-body-container">
                <h2>{props.title}</h2>
                <p>{`Shopping Now`}</p>
            </div>
        </div>
    );
}

export default CategoryComponent;