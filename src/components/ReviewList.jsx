import ReviewItem from "./ReviewItem"

function ReviewList({reviews, deleteReview}) {

    if(!reviews || reviews.length === 0){
        return <p>No review yet!</p>
      }
        
  return (
    <>
      <div className="card-container">
        {reviews.map((item) => (
            <div key={item.id} className="card-con">
                <ReviewItem review={item} deleteReview={deleteReview} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
