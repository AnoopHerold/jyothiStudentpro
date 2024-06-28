import React, { useState, useEffect } from 'react';
import supabase from "./config/supabaseclient";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        const currentUser = supabase.auth.user();
        if (currentUser) {
            displayUserData(currentUser);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email,
                password
            });

            if (error) {
                throw error;
            }

            displayUserData(user);
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            setUser(null);
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    const displayUserData = async (user) => {
        setUser(user);

        const { data, error } = await supabase
            .from('petapp')
            .select()
            .eq('user', user.id); // Assuming there's a column 'user_id' in your table

        if (error) {
            console.error('Error fetching user data:', error.message);
            return;
        }

        setUserData(data);
    };

    return (
        <div>
            {user ? (
                <div>
                    <div>
                        <p>User Email: {user.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div>
                        <h3>User Data:</h3>
                        {userData.map((row, index) => (
                            <p key={index}>{JSON.stringify(row)}</p>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
    
    
}

export default App;
