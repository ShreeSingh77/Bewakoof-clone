import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiUser,
  FiPackage,
  FiHeart,
  FiShoppingBag,
  FiMapPin,
  FiLogOut,
  FiChevronRight,
  FiEdit2,
  FiX,
  FiSave,
} from "react-icons/fi";

import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  // ================= PROFILE DATA =================

  const [profile, setProfile] = useState({
    name: "Shree Singh",
    email: "your@email.com",
    mobile: "+91 XXXXX XXXXX",
    dob: "",
  });

  // ================= EDIT MODE =================

  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState(profile);

  // ================= LOGOUT =================

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/");
    }
  };

  // ================= EDIT =================

  const handleEdit = () => {
    setFormData(profile);
    setEditMode(true);
  };

  // ================= INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= SAVE =================

  const handleSave = () => {
    setProfile(formData);
    setEditMode(false);
  };

  // ================= CANCEL =================

  const handleCancel = () => {
    setEditMode(false);
    setFormData(profile);
  };

  return (
    <main className="profile-page">

      {/* ================= HEADER ================= */}

      <div className="profile-header">

        <h1>My Account</h1>

        <p>
          Manage your account, orders and preferences
        </p>

      </div>


      {/* ================= PROFILE CONTAINER ================= */}

      <div className="profile-container">

        {/* ================= LEFT MENU ================= */}

        <aside className="profile-sidebar">

          <div className="profile-user">

            <div className="profile-avatar">
              <FiUser />
            </div>

            <div>

              <h2>
                Hello, {profile.name.split(" ")[0]}!
              </h2>

              <p>
                Welcome to your account
              </p>

            </div>

          </div>


          <nav className="profile-menu">

            {/* PROFILE */}

            <Link
              to="/profile"
              className="profile-menu-item active"
            >
              <FiUser />

              <span>
                My Profile
              </span>

              <FiChevronRight />
            </Link>


            {/* ORDERS */}

            <Link
              to="/orders"
              className="profile-menu-item"
            >
              <FiPackage />

              <span>
                My Orders
              </span>

              <FiChevronRight />
            </Link>


            {/* WISHLIST */}

            <Link
              to="/wishlist"
              className="profile-menu-item"
            >
              <FiHeart />

              <span>
                My Wishlist
              </span>

              <FiChevronRight />
            </Link>


            {/* CART */}

            <Link
              to="/cart"
              className="profile-menu-item"
            >
              <FiShoppingBag />

              <span>
                My Bag
              </span>

              <FiChevronRight />
            </Link>


            {/* LOGOUT */}

            <button
              className="profile-menu-item logout-item"
              type="button"
              onClick={handleLogout}
            >
              <FiLogOut />

              <span>
                Logout
              </span>

              <FiChevronRight />
            </button>

          </nav>

        </aside>


        {/* ================= RIGHT CONTENT ================= */}

        <section className="profile-content">

          {/* ================= CONTENT HEADER ================= */}

          <div className="profile-content-header">

            <div>

              <h2>
                Personal Information
              </h2>

              <p>
                View and manage your personal details
              </p>

            </div>


            {!editMode && (
              <button
                className="edit-profile-btn"
                type="button"
                onClick={handleEdit}
              >
                <FiEdit2 />
                EDIT PROFILE
              </button>
            )}

          </div>


          {/* ================= EDIT FORM ================= */}

          {editMode ? (

            <div className="profile-edit-form">

              <div className="profile-form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />

              </div>


              {/* FORM ACTIONS */}

              <div className="profile-form-actions">

                <button
                  type="button"
                  className="profile-cancel-btn"
                  onClick={handleCancel}
                >
                  <FiX />
                  CANCEL
                </button>


                <button
                  type="button"
                  className="profile-save-btn"
                  onClick={handleSave}
                >
                  <FiSave />
                  SAVE CHANGES
                </button>

              </div>

            </div>

          ) : (

            /* ================= INFORMATION ================= */

            <div className="profile-info-grid">

              <div className="profile-info-card">

                <span>
                  Full Name
                </span>

                <strong>
                  {profile.name}
                </strong>

              </div>


              <div className="profile-info-card">

                <span>
                  Email Address
                </span>

                <strong>
                  {profile.email}
                </strong>

              </div>


              <div className="profile-info-card">

                <span>
                  Mobile Number
                </span>

                <strong>
                  {profile.mobile}
                </strong>

              </div>


              <div className="profile-info-card">

                <span>
                  Date of Birth
                </span>

                <strong>
                  {profile.dob || "Not Added"}
                </strong>

              </div>

            </div>

          )}


          {/* ================= QUICK LINKS ================= */}

        {/* ================= QUICK LINKS ================= */}

<div className="profile-section">

  <h2>
    Quick Links
  </h2>

  <div className="profile-quick-grid">

    {/* ORDERS */}

    {/* ADDRESS */}

<Link
  to="/addresses"
  className="quick-card"
>
  <FiMapPin />

  <div>
    <strong>
      Saved Addresses
    </strong>

    <p>
      Manage your delivery addresses
    </p>
  </div>

  <FiChevronRight />
</Link>


    {/* WISHLIST */}

    <Link
      to="/wishlist"
      className="quick-card"
    >
      <FiHeart />

      <div>
        <strong>
          My Wishlist
        </strong>

        <p>
          View your saved products
        </p>
      </div>

      <FiChevronRight />
    </Link>


    {/* BAG */}

    <Link
      to="/cart"
      className="quick-card"
    >
      <FiShoppingBag />

      <div>
        <strong>
          My Bag
        </strong>

        <p>
          Continue shopping
        </p>
      </div>

      <FiChevronRight />
    </Link>


    {/* ADDRESS */}

    <Link
      to="/addresses"
      className="quick-card"
    >
      <FiMapPin />

      <div>
        <strong>
          Saved Addresses
        </strong>

        <p>
          Manage your delivery addresses
        </p>
      </div>

      <FiChevronRight />
    </Link>

  </div>

</div>

</section>

</div>

</main>
  );
}

export default Profile;