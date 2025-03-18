import { Grid2, Card, CardContent, Typography, Box, IconButton, Divider } from '@mui/material';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { ThumbUp, ChatBubble } from '@mui/icons-material';
import CreatePosts from './CreatePosts';

const Posts = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['token', 'userName']);
  console.log(cookies.userName + ' posts token');

  useEffect(() => {
    if (!cookies.token) {
      navigate('/posts');
    }
  }, [cookies, navigate]);

  return (
    <Grid2
      container
      spacing={3}
      sx={{
        padding: 7,
        justifyContent: 'center'
      }}
    >
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: 2 }}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
          <Box
            component="img"
            sx={{
              height: 180,
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
            src="https://plus.unsplash.com/premium_photo-1741413932415-555e5c6a58f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Prajwal
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              21/10/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eum? Vero, numquam a nostrum cumque
              provident magnam, magni maiores placeat quidem enim officia atque hic quibusdam officiis ea! Illum, quasi.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <ChatBubble />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: 2 }}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
          <Box
            component="img"
            sx={{
              height: 180,
              objectFit: 'cover',
              width: '100%',
              objectPosition: 'top'
            }}
            src="https://circleofcricket.com/post_image/post_image_9632bcb.jpg"
            alt="image"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Rahul
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              22/10/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eum? Vero, numquam a nostrum cumque
              provident magnam, magni maiores placeat quidem enim officia atque hic quibusdam officiis ea! Illum, quasi.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <ChatBubble />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: 2 }}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
          <Box
            component="img"
            sx={{
              height: 180,
              objectFit: 'cover',
              width: '100%',
              objectPosition: 'top'
            }}
            src="https://plus.unsplash.com/premium_photo-1741413932415-555e5c6a58f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Sophie
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              23/10/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eum? Vero, numquam a nostrum cumque
              provident magnam, magni maiores placeat quidem enim officia atque hic quibusdam officiis ea! Illum, quasi.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <ChatBubble />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: 2 }}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
          <Box
            component="img"
            sx={{
              height: 180,
              objectFit: 'cover',
              width: '100%',
              objectPosition: 'top'
            }}
            src="https://circleofcricket.com/post_image/post_image_9632bcb.jpg"
            alt="image"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography variant="h6" fontWeight="bold">
              Alex
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              24/10/2025
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eum? Vero, numquam a nostrum cumque
              provident magnam, magni maiores placeat quidem enim officia atque hic quibusdam officiis ea! Illum, quasi.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton>
                <ThumbUp />
              </IconButton>
              <IconButton>
                <ChatBubble />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
      <CreatePosts />
    </Grid2>
  );
};

export default Posts;
// import { useState, useEffect } from 'react';
// import { Grid2, Card, CardContent, Typography, Box, IconButton, Divider } from '@mui/material';
// import { ThumbUp, ChatBubble } from '@mui/icons-material';
// import CreatePosts from './CreatePosts';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router';

// // Define the Post type
// type Post = {
//   content: string;
//   tags: string;
//   images: string[];
// };

// const Posts = () => {
//   const navigate = useNavigate();
//   const [cookies] = useCookies(['token', 'userName']);
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     if (!cookies.token) {
//       navigate('/posts');
//     }
//   }, [cookies, navigate]);

//   // Fetch posts from localStorage on page load
//   useEffect(() => {
//     const storedPosts = localStorage.getItem('posts');
//     if (storedPosts) {
//       setPosts(JSON.parse(storedPosts));
//     }
//   }, []);

//   const handleNewPost = (newPost: Post) => {
//     // Update state and localStorage when a new post is added
//     const updatedPosts = [...posts, newPost];
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Save posts to localStorage
//   };

//   return (
//     <>
//       <Grid2
//         container
//         spacing={3}
//         sx={{
//           padding: 7,
//           justifyContent: 'center'
//         }}
//       >
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }} sx={{ marginTop: 2 }}>
//               <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
//                 <Box
//                   component="img"
//                   sx={{
//                     height: 180,
//                     width: '100%',
//                     objectFit: 'cover',
//                     objectPosition: 'top'
//                   }}
//                   src={post.images.length > 0 ? post.images[0] : 'default-image-url'}
//                   alt="image"
//                 />
//                 <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//                   <Typography variant="h6" fontWeight="bold">
//                     {cookies.userName}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
//                     {post.tags}
//                   </Typography>
//                   <Divider sx={{ my: 2 }} />
//                   <Typography variant="body1" sx={{ flexGrow: 1 }}>
//                     {post.content}
//                   </Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <IconButton>
//                       <ThumbUp />
//                     </IconButton>
//                     <IconButton>
//                       <ChatBubble />
//                     </IconButton>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid2>
//           ))
//         ) : (
//           <Typography>No posts available</Typography>
//         )}
//       </Grid2>

//       {/* Create Post Component */}
//       <CreatePosts onNewPost={handleNewPost} />
//     </>
//   );
// };

// export default Posts;
