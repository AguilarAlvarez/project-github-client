"use client"
import { AuthProvider, useAuth } from '@/context/AuthContext';
import Navbar from '@/components/plantwet/Navbar';
import LoginForm from '@/components/plantwet/Auth/LoginForm'
import TweetForm from '@/components/plantwet/TweetForm';
import TweetList from '@/components/plantwet/TweetList';
import "./styles.css"
import { useState } from 'react';

export default function App() {
    const { user } = useAuth();
    const [refresh, setRefresh] = useState<boolean>(false)
    return (
        <div className="app">
            <Navbar />
            {!user ? (
                <LoginForm />
            ) : (
                <>
                    <TweetForm onSumbit={() => { setRefresh(!refresh) }} />
                    <TweetList refresh={refresh} />
                </>
            )}
        </div>
    );
}