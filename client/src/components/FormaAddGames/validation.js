
export function validate (props){
    const errors = {};
    if (props.name.length < 2) { errors.name = "Name must have at least 2 characters" };
    if (props.description.length < 15) { errors.description = "Description must have at least 15 characters" };
    if (props.rating === 0) { errors.rating = "Rating must be greater than 0" }
    if (isNaN(props.rating)) { errors.rating = "Rating must be a number" }
    if (props.genres.length < 2) { errors.genres = "The game must have at least one gender" }
    if (props.platforms.length < 2) { errors.platforms = "the game must have at least one platform" }
    if (props.released === null) { errors.released = "the game must have a release date" }
    return errors;
};

