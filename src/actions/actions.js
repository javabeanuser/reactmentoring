export const setEmptyMoviesListAction = {
                type: "INIT", 
                payload: 
                    {
                        isActive: false, 
                        movies: []
                    }
            };
export const setInitMoviesListAction = movies => (        {
        type: "INIT", 
        payload: 
            {
                isActive: true, 
                movies: movies
            }
        })

export const applyFilterAction = movies => ({

        type: "FILTER", 
        payload: 
            {
                isActive: true, 
                movies: movies 
            }
        }
)

export const sortByRaitingAction = movies => ({
        type: "SORTBYRAITING", 
        payload: 
            {
                isActive: true, 
                movies: movies
            }
        }
)
export const sortByReleaseDateAction = movies => ({
        type: "SORTBYRELEASEDATE", 
        payload: 
            {
                isActive: true, 
                movies: [...movies]
            }
        }
)

export const setSortTypeAction = (type, value) => ({
        type: "SETSORTYPE", 
        payload: 
            {
                isTitle: true,
                isGengre: false
            }
        }
)
export const setSearchByAction = (isTitle, isGengre) => ({
        type: "PREVIEW", 
        payload: 
            {
                isTitle: isTitle,
                isGengre: isGengre
            }
        }
)