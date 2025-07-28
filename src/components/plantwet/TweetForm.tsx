import { useState } from 'react';
import { useAuth } from '@/context/AuthContext'
import './tweetForm.css'
import { FETCH_ROUTE } from '@/utils/consts';
type formProps = {
    onSubmitRefresch: () => void;
};

export default function TweetForm({ onSubmitRefresch }: formProps) {
    const [content, setContent] = useState('');
    const { user } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || !user) return;
        console.log(user.id)
        try {
            fetch(`${FETCH_ROUTE}/tweet`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    user_id: user.id,
                    content: content
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(content, data)
                    if (data.state) {
                        onSubmitRefresch()
                        setContent('');
                    }
                });
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="tweet-form-container" style={{
            background: 'var(--verde-pastel)',
            border: '2px solid var(--verde-claro)'
        }}>
            <h3>🌱 ¿Qué está creciendo hoy?</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Comparte tus avances con la comunidad..."
                    maxLength={280}
                    rows={3}
                    style={{
                        border: '2px solid var(--verde-claro)',
                        borderRadius: '8px'
                    }}
                />
                <div className="form-footer flex justify-between p-3">
                    <span style={{ color: 'var(--verde-medio)' }}>
                        {content.length}/280
                    </span>
                    <button
                        type="submit"
                        className="publish-button"
                        disabled={!content.trim()}
                    >
                        Publicar 🌿
                    </button>
                </div>
            </form>
        </div>
    );
};

