import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IsLoading from "./IsLoading";
import IsError from "./IsError";

function FetchSingle() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        // Change state to incl data
        // .data because API docs starts with data.[rest of arrays]
        setData(json.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  console.log(data);

  return (
    <div>
      <h2>Title: {data.title}</h2>
      <img src={data.image.url} alt={data.image.alt} />
      <p>{data.description}</p>
      <div>
        <h4>Recent review:</h4>
        {/*  Iterate .reviews for access of reviews[arrays] */}
        {data.reviews && data.reviews.length > 0 ? (
          data.reviews.map((review, index) => (
            <div key={index}>
              <p>Username: {review.username}</p>
              <p>Users review: {review.description}</p>
              <p>Users product rating: {review.rating}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      <p>Rating overall: {data.rating}</p>
    </div>
  );
}

export default FetchSingle;

/* 
Return explanation:
- data.title- image- description- rating are all properies fetched from the 'data object'.
- data.reviews.username doesnt work because username is nested within an array inside data.reviews.
data.reviews[username] indicates it needs to be iteraten over for access

Iteration explanation:
- if reviews and length are more than 0, render: 'data.reviews.map((review, index) =>'
- if not, render: '<p>No reviews available.</p>'

- index parameter (Optional): The index of the current element being processed in the array.
*/
