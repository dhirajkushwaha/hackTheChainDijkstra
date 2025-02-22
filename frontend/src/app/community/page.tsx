// pages/posts.js
'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logout from '@/components/ui/custom/logout';
import axios from 'axios';
import Header from '@/components/ui/custom/Header';
import { Badge } from '@/components/ui/badge';
import { Toggle } from "@/components/ui/toggle"
import { Button } from '@/components/ui/button';

// import ButtonZ from '@/components/ui/custom/buttonZ';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState(''); // Store the logged-in user's username
  const [newPostHeading, setNewPostHeading] = useState(''); // Store the new post heading
  const [newPostContent, setNewPostContent] = useState(''); // Store the new post content
  const router = useRouter();

  // Check if the user is authenticated and fetch posts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Fetch the authenticated user
        const userResponse = await axios.get('http://localhost:5000/api/auth/me', {
          withCredentials: true,
        });

        // Set the username
        setUsername(userResponse.data.user.username);

        // Fetch posts
        const postsResponse = await axios.get('http://localhost:5000/api/posts', {
          withCredentials: true,
        });
        setPosts(postsResponse.data);
      } catch (err) {
        // If not authenticated, redirect to login
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Handle like
  const handleLike = async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/posts/${postId}/like`,
        {},
        { withCredentials: true }
      );
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? response.data : post))
      );
    } catch (err) {
      if (err.response && err.response.data.error === 'You already liked this post') {
        // Handle the case where the user already liked the post
        setError('You already liked this post.');
      } else {
        // Handle other errors
        setError('Failed to like post.');
      }
    }
  };

  // Handle comment
  const handleComment = async (postId, content) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/posts/${postId}/comment`, { content }, {
        withCredentials: true,
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? response.data : post))
      );
    } catch (err) {
      setError('Failed to add comment');
    }
  };

  // Handle new post submission
  const handleNewPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/posts',
        { heading: newPostHeading, content: newPostContent }, // Send heading and content
        { withCredentials: true }
      );
      setPosts((prevPosts) => [response.data, ...prevPosts]); // Add the new post to the top of the list
      setNewPostHeading(''); // Clear the heading input
      setNewPostContent(''); // Clear the content textarea
    } catch (err) {
      setError('Failed to create post');
    }
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error && error != 'You already liked this post') {
    return <p>{error}</p>;
  }

  return (
    <div  >

      {/* <Header></Header> */}

      <div className='mx-auto lg:w-[800px] ' >

        <h1 className='text-center mt-10 text-4xl poly'>Community Posts</h1>
          <Logout />

        {/* New Post Form */}
        <div className='mt-10 border border-3 border-[#e2e2e2] bg-[#ffffff] rounded-[10px] p-[30px]' >
          <form onSubmit={handleNewPost} style={styles.newPostForm}>
            <input
              type="text"
              value={newPostHeading}
              onChange={(e) => setNewPostHeading(e.target.value)}
              placeholder="Post heading"
              required 
              className='p-3  bg-[#f9f9f9] rounded-[10px]'
            />
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="What's on your mind?"
              required 

              className='p-3 border  border-1 rounded-[10px] border-[#ddd] min-h-[100px]'
            />

          <div className='flex' >
            <p className='my-2' >Posting as: {username}</p>
            <button type="submit" className=' ml-2 text-white bg-[#FF00BF] py-[7px] px-[20px] rounded-[30px] '>
              Post
            </button> 

          </div>
          </form>
        </div>

        {/* Display Posts */}
        {posts.map((post) => (
          <div key={post._id}  className='mt-10 border border-3 border-[#e2e2e2] bg-[#ffffff] rounded-[10px] p-[15px]'>
            <h3 className='text-2xl font-medium'>{post.heading}</h3> {/* Display post heading */}
            <p >{post.content}</p>
            <div className='flex items-center' >

              <p className='bg-[black] text-xs p-1 text-white w-fit rounded-[5px]' >Posted by: {post.user.username}</p>

              <div className='flex items-center' >
                <button
                  onClick={() => handleLike(post._id)} className='text-sm' >
                <Toggle ><img width="18"  src="https://img.icons8.com/material-rounded/24/like--v1.png" alt="like--v1"/></Toggle>
                </button>
                <p> 
                  {post.likes.length} Like 

                </p>
              </div>
            </div>
            <div  >
              <h3  >Comments:</h3>
              {post.comments.map((comment) => (
                <div key={comment._id} className='p-[6px] mt-2 border-2 border-[#e0e0e0] rounded-[6px]' >
                  <p style={styles.commentContent}>{comment.content}</p>
                  <p style={styles.commentAuthor}>By: {comment.user.username}</p>
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const content = e.target.comment.value;
                  handleComment(post._id, content);
                  e.target.comment.value = '';
                }}
                style={styles.commentForm}
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  required
                  style={styles.commentInput}
                />
                 
                <Button type="submit"  >Comment</Button>
              </form>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px', 
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  newPostContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  newPostAuthor: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '10px',
  },
  newPostForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  newPostHeadingInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  newPostTextarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical',
  },
  newPostButton: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  post: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  postHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  postContent: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  postAuthor: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '10px',
  },
  postActions: {
    marginBottom: '10px',
  },
  likeButton: {
    padding: '8px 16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  commentsSection: {
    marginTop: '10px',
  },
  commentsHeader: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  comment: {
    marginBottom: '10px',
    padding: '10px',
    borderLeft: '3px solid #0070f3',
    backgroundColor: '#f1f1f1',
  },
  commentContent: {
    fontSize: '0.9rem',
    marginBottom: '5px',
  },
  commentAuthor: {
    fontSize: '0.8rem',
    color: '#555',
  },
  commentForm: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  commentInput: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.9rem',
  },
  commentButton: {
    padding: '8px 16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};