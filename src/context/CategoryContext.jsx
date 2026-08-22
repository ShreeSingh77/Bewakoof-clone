import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CategoryContext = createContext();

function CategoryProvider({ children }) {

  const [categories, setCategories] = useState(() => {

    const savedCategories =
      localStorage.getItem("categories");

    return savedCategories
      ? JSON.parse(savedCategories)
      : [];
  });


  // =========================
  // SAVE CATEGORIES
  // =========================

  useEffect(() => {

    localStorage.setItem(
      "categories",
      JSON.stringify(categories)
    );

  }, [categories]);


  // =========================
  // ADD CATEGORY
  // =========================

  const addCategory = (category) => {

    const cleanCategory =
      category.trim();

    if (!cleanCategory) {
      return;
    }

    const alreadyExists =
      categories.some(
        (item) =>
          item.toLowerCase() ===
          cleanCategory.toLowerCase()
      );

    if (alreadyExists) {
      return;
    }

    setCategories((prev) => [
      ...prev,
      cleanCategory,
    ]);
  };


  // =========================
  // DELETE CATEGORY
  // =========================

  const deleteCategory = (category) => {

    setCategories((prev) =>
      prev.filter(
        (item) => item !== category
      )
    );
  };


  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}


export function useCategory() {

  const context =
    useContext(CategoryContext);

  if (!context) {
    throw new Error(
      "useCategory must be used inside CategoryProvider"
    );
  }

  return context;
}


export default CategoryProvider;