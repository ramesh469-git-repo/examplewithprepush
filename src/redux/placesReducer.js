const initialState = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in the world',
        imageUrl: 'https://www.planetware.com/photos-large/USNY/empire-state-building.jpg',
        address: '20 W 34th St, New York, NY 10118, United States',
        location: {
          lat: 40.7484405,
          lng: -73.9878531
        },
        creator: 'u1'
      }
]


const placeReducer =(state=initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "FETCH_DATA":
        return state ;

        default :
        return state;
    }
}

export default placeReducer;