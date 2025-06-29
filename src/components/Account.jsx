// src/components/Account.jsx
import { getAuthToken } from "../api/auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UserInfoCard from "./UserInfoCard";
import { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to get user from localStorage
    const stored = localStorage.getItem("authUser");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Attach 'role' if present, or infer from roles array
      parsed.role = parsed.role || (parsed.roles && parsed.roles[0]?.name);
      setUser(parsed);
    }
  }, []);

  // If logged in, show info card. Else, show login/register forms
  return (
    <section className="account py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          {user && getAuthToken() ? (
            <div className="col-xl-8 mx-auto">
              <UserInfoCard user={user} />
            </div>
          ) : (
            <>
              {/* Login Card */}
              <div className="col-xl-6 pe-xl-5">
                <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                  <LoginForm />
                </div>
              </div>
              {/* Register Card */}
              <div className="col-xl-6">
                <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                  <RegisterForm />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Account;
