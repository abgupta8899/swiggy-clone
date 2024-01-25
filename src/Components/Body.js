import React from 'react'
import RestroCard, { withPromtedLabel } from './RestroCard';
import { Data } from './Utils/mockData';
import { useState } from 'react';

const Body = () => {
    const [ListOfRestraunt, setListOfRestraunt] = useState(Data);
    const [filterRestaurant, setFilterRestaurant] = useState(Data);

    const [searchText, setSearchText] = useState("");
    const RestaurantPromoted = withPromtedLabel(RestroCard);

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text'
                        className='search-box'
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filterRestaurant = ListOfRestraunt.filter((res) =>
                                res.ResName.toLowerCase().includes(searchText.toLowerCase())

                            );
                            setFilterRestaurant(filterRestaurant)

                        }}
                    >SEARCH</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestraunt.filter(
                            (res) => res.StarRating > 4

                        );
                        setFilterRestaurant(filteredList)
                    }}
                >TOP Rated</button>
            </div>
            <div className='restro-cont'>
                {filterRestaurant.map((restaurant) => (
                    
                    restaurant.Promoted ? (<RestaurantPromoted key={restaurant.id} resData={restaurant} />
                    ) : (<RestroCard key={restaurant.id} resData={restaurant} />)


                    

                ))}
            </div>
        </div>
    );
}


export default Body;
