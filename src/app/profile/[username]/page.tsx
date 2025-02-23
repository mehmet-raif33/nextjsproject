'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';

const ProfilePage = () => {
    const router = useSearchParams();
    const username = router.get('username');

    // Fetch user data from an API or database
    // For demonstration, we'll use dummy data
    const fetchUserData = async (username: string) => {
        // Replace with actual API call
        return {
            username: username,
            userImage: 'https://via.placeholder.com/150',
            bio: 'This is a short bio about the user.',
            location: 'New York, USA',
            website: 'https://example.com',
            posts: [
                { id: 1, title: 'First Post', content: 'This is the first post content' },
                { id: 2, title: 'Second Post', content: 'This is the second post content' },
            ],
        };
    };

    const [userr, setUser] = React.useState<any>(null);

    React.useEffect(() => {
        if (username) {
            fetchUserData(username).then((data) => setUser(data));
        }
    }, [username]);

    if (!userr) {
        return <div>Loading...</div>;
    }
    const user = {
        username: username as string,
        userImage: 'https://via.placeholder.com/150',
        posts: [
            { id: 1, title: 'First Post', content: 'This is the first post content' },
            { id: 2, title: 'Second Post', content: 'This is the second post content' },
        ],
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img
                    src={user.userImage}
                    alt={`${user.username}'s profile`}
                    style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }}
                />
                <h1>{user.username}</h1>
            </div>
            <div>
                <h2>User Posts</h2>
                {user.posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;