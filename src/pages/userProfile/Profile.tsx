import { useUserProfile } from './useUserProfile';

const Profile = () => {
  const { profile, loading, error } = useUserProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
};

export default Profile;
// const myHeaders = new Headers();

// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDU5NTdkNzE1MTljYjk5NGE5NmYzOCIsImlhdCI6MTc0MjA1MTkyNywiZXhwIjoxNzQ0NjQzOTI3fQ.x3GDg4brAnUL_D0DoENSX3jVEqu2dJPqof9z9KVQ8Ko");

// const formdata = new FormData();

// formdata.append("profilePicture", fileInput.files[0], "");

// const requestOptions = {

//   method: "PUT",

//   headers: myHeaders,

//   body: formdata,

//   redirect: "follow"

// };

// fetch("https://dev-connect-service.onrender.com/api/users/profile", requestOptions)

//   .then((response) => response.text())

//   .then((result) => console.log(result))

//   .catch((error) => console.error(error));
//this is second
// const updateUser = async () => {

//   const formData = new FormData();

//   formData.append("name", "John Doe");

//   formData.append("age", 30);

//   formData.append("image", fileInput.files[0]); // Assuming fileInput is your file input element

//   try {

//       const response = await fetch("https://your-api.com/users/123", {

//           method: "PUT",

//           body: formData,

//           headers: {

//               // **DO NOT** set `Content-Type` manually, the browser will do it automatically

//           }

//       });

//       const result = await response.json();

//       console.log("Success:", result);

//   } catch (error) {

//       console.error("Error:", error);

//   }

// };
