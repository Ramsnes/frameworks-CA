import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IsLoading from "./IsLoading";
import IsError from "./IsError";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DiscountLogic from "./DiscountLogic";
import { Grid } from "@mui/material";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

function FetchSingle() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  const { addProduct } = useCartContext();

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
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
          <CardMedia
            component="img"
            sx={{ height: 300 }}
            image={data.image.url}
            title={data.image.alt || data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body1">{data.description}</Typography>
            {data.discountedPrice && (
              <DiscountLogic
                price={data.price}
                discountedPrice={data.discountedPrice}
              />
            )}
            <Typography variant="h6" component="div" sx={{ mt: 7 }}>
              Recent reviews:
            </Typography>

            {/* conditional reviews */}
            {data.reviews && data.reviews.length > 0 ? (
              data.reviews.map((review, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">
                      Username: {review.username}
                    </Typography>
                    <Typography variant="body2" color2 color="text.secondary">
                      User review: {review.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Users product rating: {review.rating}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No reviews available.
              </Typography>
            )}

            {/* conditional rating */}
            {data.rating > 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Overall product rating: {data.rating}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Overall rating unavailable
              </Typography>
            )}

            {/* Add product  */}
            <Button
              onClick={() => addProduct(data)}
              variant="contained"
              sx={{ mr: 2 }}
            >
              Add to cart
            </Button>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                Productlist
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FetchSingle;

/* 

OG return without Material UI:
return (
    <div>
      <h2>Title: {data.title}</h2>
      <img src={data.image.url} alt={data.image.alt} />
      <p>{data.description}</p>
      <div>
        <h4>Recent review:</h4>
"Iterate .reviews for access of reviews[arrays] "
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

OG return explanation:
- data.title- image- description- rating are all properies fetched from the 'data object'.
- data.reviews.username doesnt work because username is nested within an array inside data.reviews.
data.reviews[username] indicates it needs to be iteraten over for access

Iteration explanation:
- if reviews and length are more than 0, render: 'data.reviews.map((review, index) =>'
- if not, render: '<p>No reviews available.</p>'

- index parameter (Optional): The index of the current element being processed in the array.
*/
