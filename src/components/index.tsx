import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

const IndexPage = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);
  const location = useLocation();
  const data = location.state;
  console.log('index ', data);
  console.log(cookies);

  useEffect(() => {
    if (data) {
      setCookie('name', data.token);
    }

    if (cookies.name) {
      async function Posts() {
        try {
          const response = await fetch(
            'https://dev-connect-service.onrender.com/api/posts?page=1&limit=10'
          );
          const allPosts = await response.json();
          navigate('/posts', { state: allPosts });
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
      Posts();
    } else {
      navigate('/register');
    }
  }, [cookies.name, navigate, data, setCookie]);

  return <h1>Loading Posts...</h1>;
};

export default IndexPage;

// import { useEffect } from 'react'
// import { useCookies } from 'react-cookie'
// import { useLocation, useNavigate } from 'react-router'

// const Index = () => {
//   const [cookies, setCookie] = useCookies(['user'])
//   const location = useLocation()
//   const data = location.state
//   console.log(data)
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (data) {
//       setCookie('user', data.token)
//     }
//     if (cookies.user) {
//       async function getPosts() {
//         const rawData = await fetch(
//           'https://dev-connect-service.onrender.com/api/posts?page=1&limit=10',
//           {},
//         )
//         const allPosts = await rawData.json()
//         navigate('/posts', { state: allPosts })
//       }
//       getPosts()
//     } else {
//       navigate('/login')
//     }
//   }, [cookies, navigate, data, setCookie])

//   return <div>Loading....</div>
// }

// export default Index