import { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

import { useCategory } from "../context/CategoryContext";

import "./AdminCategories.css";

function AdminCategories() {
  const {
    categories,
    addCategory,
    deleteCategory,
  } = useCategory();

  const [categoryName, setCategoryName] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const added = addCategory(categoryName);

    if (added) {
      setCategoryName("");
    }
  };

  return (
    <main className="admin-categories-page">

      {/* ================= HEADER ================= */}

      <section className="admin-categories-header">

        <div>
          <p className="admin-categories-eyebrow">
            ADMIN PANEL
          </p>

          <h1>
            Category Management
          </h1>

          <p className="admin-categories-subtitle">
            Create and manage product categories
            displayed across the website.
          </p>
        </div>

        <div className="admin-category-count">
          {categories.length} Categories
        </div>

      </section>


      {/* ================= CREATE CATEGORY ================= */}

      <section className="admin-category-create">

        <div className="admin-category-create-header">

          <div>
            <h2>
              Create New Category
            </h2>

            <p>
              Add a category that can be used
              for your products.
            </p>
          </div>

        </div>


        <form
          className="admin-category-form"
          onSubmit={handleSubmit}
        >

          <div className="admin-category-input-wrapper">

            <input
              type="text"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) =>
                setCategoryName(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="admin-add-category-button"
          >
            <FiPlus />

            <span>
              ADD CATEGORY
            </span>
          </button>

        </form>

      </section>


      {/* ================= CATEGORY LIST ================= */}

      <section className="admin-category-list-section">

        <div className="admin-category-list-header">

          <div>
            <p>
              AVAILABLE CATEGORIES
            </p>

            <h2>
              Categories
            </h2>
          </div>

        </div>


        {categories.length > 0 ? (

          <div className="admin-category-list">

            {categories.map((category) => (

              <div
                className="admin-category-item"
                key={category}
              >

                <div className="admin-category-name">

                  <span className="admin-category-dot">
                  </span>

                  <span>
                    {category}
                  </span>

                </div>


                <button
                  type="button"
                  className="admin-delete-category"
                  onClick={() =>
                    deleteCategory(category)
                  }
                  aria-label={`Delete ${category}`}
                >
                  <FiTrash2 />

                  <span>
                    DELETE
                  </span>
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="admin-empty-categories">

            <h3>
              No categories yet
            </h3>

            <p>
              Create your first category above.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default AdminCategories;