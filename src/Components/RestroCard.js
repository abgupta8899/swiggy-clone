import React from 'react'

const RestroCard = (props) => {
  const {resData} = props;
  
  const {
    ResName:restrooo,
    StarRating,
    CostforTow,
    img
  } = resData;

  return (
    <div className="res-card">
      <img className="res-logo"
        alt="res-logo"
        src={img}
      />
      <h3 className="font-bold py-4 text-lg">{restrooo}</h3>
      <h4>{StarRating} stars</h4>
      <h4>₹{CostforTow} FOR TWO</h4>
    

    </div>
  );
};


export const withPromtedLabel = (RestroCard)=>{
  return (props)=>{
    return(
      <div>
        <label className='pro'>Promoted</label>
        <RestroCard {...props}/>
      </div>
    )
  }
}

export default RestroCard;