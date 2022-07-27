import CategoryComponent from "../../components/category";
import { categories } from "../../components/category/categoryList";

function CategoryPage() {
    return ( 

        <div className="categories-container"
        
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
      {categories.map(category => (
        <CategoryComponent key={category.id} {...category} />
      ))}
    </div>
     );
}

export default CategoryPage;