import React, { useState, useEffect } from "react";
import useAxiosSecure from "../Hook/AxiosSecure";

const Profile = () => {
  const axiosSecure =useAxiosSecure();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axiosSecure.get("/users/me", { 
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <p className="text-center py-10">Loading profile...</p>;

  return (
    <div className="max-w-2xl mt-20 mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default Profile;

