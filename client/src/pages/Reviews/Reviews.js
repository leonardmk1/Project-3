import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
  MDBRating,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./Reviews.css";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

export default function Reviews() {
  const [myReviews, setMyReviews] = useState([]);

  API.Reviews.find().then(function (res) {
    console.log(res);
    setMyReviews(res.data);
  });

  return (
    <div>
      <MDBContainer>
        <h1 className="text-center mt-5">My Reviews</h1>
        {myReviews.map((review) => (
          <MDBCard className="mt-4">
            <MDBCardBody>
              <MDBCardHeader className="bg-white">
                <MDBRow>
                  <MDBCol size="3">
                    <strong>{review.userId}</strong> says...
                  </MDBCol>
                  <MDBCol size="6" className="text-center">
                    <h5>{review.title}</h5>
                  </MDBCol>
                  <MDBCol size="2" className="text-right">
                    {review.rating} out of 5 stars!
                  </MDBCol>
                </MDBRow>
              </MDBCardHeader>
              <MDBCardText>
                <p className="mt-2">"{review.review}"</p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBContainer>
    </div>
  );
}

// class Reviews extends Component {
//   static contextType = AuthContext;
//   state = {
//     activeItem: "1",
//   };

//   toggle = (tab) => (e) => {
//     if (this.state.activeItem !== tab) {
//       this.setState({
//         activeItem: tab,
//       });
//     }
//   };

//   componentDidMount(){
// // API.Reviews.get(title, movieId, rating, review, userId)
// // .then(function(res){
// //   console.log(res);
// }

// render() {
//   const { user } = this.context;

//     return (
//       <MDBContainer>
//           <h1 className="text-center mt-5">My Reviews</h1>
//               <MDBCard className="mt-4">
//                 <MDBCardBody>
//                   <MDBCardHeader>"TITLE"</MDBCardHeader>
//                   <MDBCardText>
//                     <p className="mt-2">
//                       Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                       voluptate odit minima. Lorem ipsum dolor sit amet,
//                       consectetur adipisicing elit. Nihil odit magnam minima,
//                       soluta doloribus reiciendis molestiae placeat unde eos
//                       molestias.
//                     </p>
//                   </MDBCardText>
//                 </MDBCardBody>
//               </MDBCard>
//             <MDBCard className="mt-4">
//                 <MDBCardBody>
//                   <MDBCardHeader>"TITLE" </MDBCardHeader>
//                   <MDBCardText>
//                     <p className="mt-2">
//                       Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                       voluptate odit minima. Lorem ipsum dolor sit amet,
//                       consectetur adipisicing elit. Nihil odit magnam minima,
//                       soluta doloribus reiciendis molestiae placeat unde eos
//                       molestias.
//                     </p>
//                     <p className="mt-2">
//                       Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                       voluptate odit minima. Lorem ipsum dolor sit amet,
//                       consectetur adipisicing elit. Nihil odit magnam minima,
//                       soluta doloribus reiciendis molestiae placeat unde eos
//                       molestias.
//                     </p>
//                   </MDBCardText>
//                 </MDBCardBody>
//               </MDBCard>
//       </MDBContainer>
//     );
//   }
// }
// export default Reviews;
