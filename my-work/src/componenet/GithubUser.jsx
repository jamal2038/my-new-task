
import React from "react";
 import "./GithubUser.css";
const GithubUser = ({ user }) => {
    if (!user) return null;

    return (
        <div className="github-card">
            <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="github-avatar"
            />

            <h2>{user.login}</h2>

            <p>
                <strong>ID:</strong> {user.id}
            </p>

            <p>
                <strong>Type:</strong> {user.type}
            </p>

            <p>
                <strong>Admin:</strong>{" "}
                {user.site_admin ? "Yes" : "No"}
            </p>

            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub Profile
            </a>
        </div>
    );
};

export default GithubUser;       