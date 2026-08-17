import { useState } from "react";
import {
  FiMapPin,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX,
} from "react-icons/fi";
import "./Addresses.css";

function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Shree Singh",
      mobile: "9876543210",
      address: "123, Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226010",
      type: "Home",
      isDefault: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });

  // ================= INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= ADD / UPDATE =================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingId
            ? {
                ...address,
                ...formData,
              }
            : address
        )
      );
    } else {
      const newAddress = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0,
      };

      setAddresses((prev) => [
        ...prev,
        newAddress,
      ]);
    }

    resetForm();
  };

  // ================= EDIT =================

  const handleEdit = (address) => {
    setFormData({
      name: address.name,
      mobile: address.mobile,
      address: address.address,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      type: address.type,
    });

    setEditingId(address.id);
    setShowForm(true);
  };

  // ================= DELETE =================

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmDelete) return;

    setAddresses((prev) => {
      const updated = prev.filter(
        (address) => address.id !== id
      );

      if (
        updated.length > 0 &&
        !updated.some(
          (address) => address.isDefault
        )
      ) {
        updated[0].isDefault = true;
      }

      return updated;
    });
  };

  // ================= DEFAULT =================

  const handleDefault = (id) => {
    setAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  // ================= RESET =================

  const resetForm = () => {
    setFormData({
      name: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      type: "Home",
    });

    setEditingId(null);
    setShowForm(false);
  };

  return (
    <main className="addresses-page">

      {/* ================= HEADER ================= */}

      <div className="addresses-header">

        <div>
          <h1>Saved Addresses</h1>

          <p>
            Manage your delivery addresses
          </p>
        </div>

        {!showForm && (
          <button
            className="add-address-btn"
            onClick={() => setShowForm(true)}
          >
            <FiPlus />
            ADD NEW ADDRESS
          </button>
        )}

      </div>


      {/* ================= FORM ================= */}

      {showForm && (
        <form
          className="address-form"
          onSubmit={handleSubmit}
        >

          <div className="address-form-header">

            <div>
              <h2>
                {editingId
                  ? "Edit Address"
                  : "Add New Address"}
              </h2>

              <p>
                Enter your complete delivery details
              </p>
            </div>

            <button
              type="button"
              className="close-address-form"
              onClick={resetForm}
            >
              <FiX />
            </button>

          </div>


          <div className="address-form-grid">

            {/* Name */}

            <div className="address-form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>


            {/* Mobile */}

            <div className="address-form-group">
              <label>Mobile Number</label>

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                required
              />
            </div>


            {/* Address */}

            <div className="address-form-group full-width">
              <label>Address</label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House no., street, area"
                required
              />
            </div>


            {/* City */}

            <div className="address-form-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>


            {/* State */}

            <div className="address-form-group">
              <label>State</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>


            {/* Pincode */}

            <div className="address-form-group">
              <label>Pincode</label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6 digit pincode"
                required
              />
            </div>


            {/* Address Type */}

            <div className="address-form-group">
              <label>Address Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Home">
                  Home
                </option>

                <option value="Work">
                  Work
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

          </div>


          {/* FORM ACTIONS */}

          <div className="address-form-actions">

            <button
              type="button"
              className="address-cancel-btn"
              onClick={resetForm}
            >
              CANCEL
            </button>

            <button
              type="submit"
              className="address-save-btn"
            >
              <FiCheck />

              {editingId
                ? "UPDATE ADDRESS"
                : "SAVE ADDRESS"}
            </button>

          </div>

        </form>
      )}


      {/* ================= EMPTY ================= */}

      {!showForm && addresses.length === 0 && (

        <div className="addresses-empty">

          <div className="addresses-empty-icon">
            <FiMapPin />
          </div>

          <h2>
            No Saved Addresses
          </h2>

          <p>
            Add an address to make checkout
            faster and easier.
          </p>

          <button
            className="add-address-btn"
            onClick={() => setShowForm(true)}
          >
            <FiPlus />
            ADD ADDRESS
          </button>

        </div>

      )}


      {/* ================= ADDRESS LIST ================= */}

      {!showForm && addresses.length > 0 && (

        <div className="addresses-list">

          {addresses.map((address) => (

            <div
              className="address-card"
              key={address.id}
            >

              {/* HEADER */}

              <div className="address-card-header">

                <div className="address-type">

                  <FiMapPin />

                  <strong>
                    {address.type}
                  </strong>

                  {address.isDefault && (
                    <span>
                      DEFAULT
                    </span>
                  )}

                </div>


                <div className="address-card-actions">

                  <button
                    type="button"
                    onClick={() =>
                      handleEdit(address)
                    }
                  >
                    <FiEdit2 />
                    EDIT
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(address.id)
                    }
                  >
                    <FiTrash2 />
                    DELETE
                  </button>

                </div>

              </div>


              {/* BODY */}

              <div className="address-card-body">

                <h3>
                  {address.name}
                </h3>

                <p>
                  {address.address}
                </p>

                <p>
                  {address.city},{" "}
                  {address.state} -{" "}
                  {address.pincode}
                </p>

                <p className="address-mobile">
                  Mobile: {address.mobile}
                </p>

              </div>


              {/* DEFAULT */}

              {!address.isDefault && (

                <div className="address-card-footer">

                  <button
                    type="button"
                    onClick={() =>
                      handleDefault(address.id)
                    }
                  >
                    SET AS DEFAULT
                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </main>
  );
}

export default Addresses;