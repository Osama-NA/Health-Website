
const RecipesList = ({ recipes, recipesScroll}) => {
    return (
        <>
            <h2 className="recipes-title" ref={recipesScroll}>Recipes</h2>
            <section className="recipes-container">
                {
                    recipes.map((recipe, i) => {
                        return(
                            <Recipe 
                                key={i}
                                image={recipe.image} 
                                title={recipe.name}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}

const Recipe = ({title, image}) => {
    return(
        <div className="recipe">
            <div className="recipe-image" style={{ backgroundImage: `url('${image}')` }}>
                <div className="overlay"></div>
            </div>

            <div className="recipe-title">
                <p>{formatRecipeTitle(title)}</p>
            </div>
        </div>
    )
}

// Formatting recipe title if title length is more than 18 (11 in mobile screen) characters replace additional characters with ".."
// to avoid messing up the recipe container design
const formatRecipeTitle = (title) => {
    const screenWidth = document.body.offsetWidth;
    const titleLength = title.length;

    if ((screenWidth > 1024 && titleLength <= 18) ||
        (screenWidth <= 769 && titleLength <= 11))
    {
       return title;
    }

    return screenWidth > 769 ? 
            title.substring(0, 17) + ".." :
            title.substring(0, 10) + "..";
}

export default RecipesList;