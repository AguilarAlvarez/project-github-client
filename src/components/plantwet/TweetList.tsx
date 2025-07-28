import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Tweet } from '@/types/platwet/types';
import './tweetList.css'
import { FETCH_ROUTE } from '@/utils/consts';

export default function TweetList(params: { refresh: boolean }) {
    const { user } = useAuth();
    const { refresh } = params
    const [tweets, setTweets] = useState<Tweet[]>([]);
    useEffect(() => {
        const loadTweets = async () => {
            try {
                fetch(`${FETCH_ROUTE}/tweets`,).then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setTweets(data)
                    });
            } catch (err) {
                console.log(err)
            }
        }
        loadTweets()
    }, [refresh])

    const handleLike = (tweetId: string) => {
        if (user)
            try {
                fetch(`${FETCH_ROUTE}/like`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        user_id: user.id,
                        tweet_id: tweetId
                    })
                }).then(response => response.json())
                    .then(data => {
                        console.log(user, tweetId, data)
                        if (data.state) {
                            setTweets(tweets.map(tweet =>
                                tweet.id === tweetId
                                    ? { ...tweet, likes_count: tweet.likes_count + 1 }
                                    : tweet
                            ));
                        }
                    });
            } catch (err) {
                console.log(err)
            }
    };

    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <div
                    key={tweet.id}
                    className="tweet-card"
                    style={{
                        borderLeft: '4px solid var(--verde-medio)',
                        background: 'white'
                    }}
                >
                    <div className="tweet-header">
                        <span style={{ color: 'var(--verde-oscuro)' }}>
                            @{tweet.username}
                        </span>
                    </div>

                    <p className="tweet-content">{tweet.content}</p>

                    <div className="tweet-actions flex justify-end">
                        <button
                            onClick={() => handleLike(tweet.id)}
                            className="plant-action-button"
                        >
                            💧 Regar ({tweet.likes_count})
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

