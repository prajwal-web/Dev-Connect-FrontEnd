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
          const response = await fetch('https://dev-connect-service.onrender.com/api/posts?page=1&limit=10');
          const allPosts = await response.json();
          console.log('allposts ' + allPosts);
          navigate('/posts', { state: allPosts });
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
      Posts();
    } else {
      navigate('/posts');
    }
  }, [cookies.name, navigate, data, setCookie]);

  return <h1>Loading Posts...</h1>;
};

export default IndexPage;
