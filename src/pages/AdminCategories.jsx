import { useState } from "react";
import {
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

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

  const [parentCategory, setParentCategory] =
    useState("men");

const [categorySection, setCategorySection] =
  useState("topwear");
  // =========================
  // ADD CATEGORY
  // =========================

 // =========================
// ADD CATEGORY
// =========================

const handleSubmit = (e) => {
  e.preventDefault();

  const added = addCategory(
    categoryName,
    parentCategory,
    categorySection
  );

  if (added) {
    setCategoryName("");
    setParentCategory("men");
    setCategorySection("topwear");
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
              Add a category and choose where
              it should appear in the website.
            </p>

          </div>

        </div>


        <form
          className="admin-category-form"
          onSubmit={handleSubmit}
        >

          {/* CATEGORY NAME */}

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
             
             {/* CATEGORY SECTION */}

<div className="admin-category-input-wrapper">

  <select
    value={categorySection}
    onChange={(e) =>
      setCategorySection(e.target.value)
    }
  >

    <option value="topwear">
      Topwear
    </option>

    <option value="bottomwear">
      Bottomwear
    </option>

    <option value="footwear">
      Footwear
    </option>

    <option value="ethnic-wear">
      Ethnic Wear
    </option>

    <option value="accessories">
      Accessories
    </option>

  </select>

</div>

          {/* PARENT CATEGORY */}

          <div className="admin-category-input-wrapper">

            <select
              value={parentCategory}
              onChange={(e) =>
                setParentCategory(e.target.value)
              }
            >

              <option value="men">
                Men
              </option>

              <option value="women">
                Women
              </option>

              <option value="accessories">
                Accessories
              </option>

            </select>

          </div>


          {/* ADD BUTTON */}

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
                key={`${category.parent}-${category.section}-${category.name}`}
              >

                <div className="admin-category-name">

                  <span className="admin-category-dot">
                  </span>

                  <div>

                    <span>
                      {category.name}
                    </span>

                    <small
  style={{
    display: "block",
    marginTop: "4px",
    color: "#777",
    fontSize: "11px",
    textTransform: "uppercase",
  }}
         >
    {category.parent} • {category.section}
      </small>

                  </div>

                </div>


                <button
                  type="button"
                  className="admin-delete-category"
                  onClick={() =>
              deleteCategory(category)
                }
                  aria-label={`Delete ${category.name}`}
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