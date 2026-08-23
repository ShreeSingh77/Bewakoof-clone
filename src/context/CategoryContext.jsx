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

  const addCategory = (name, parent, section) => {

   const cleanName = name.trim();

if (!cleanName || !parent || !section) {
  return false;
}
    const alreadyExists = categories.some(
  (category) =>
    category.name.toLowerCase() ===
      cleanName.toLowerCase() &&
    category.parent === parent &&
    category.section === section
);
    if (alreadyExists) {
      return false;
    }

   setCategories((prev) => [
  ...prev,
  {
    name: cleanName,
    parent: parent,
    section: section,
  },
]);

    return true;
  };


  // =========================
  // DELETE CATEGORY
  // =========================
const deleteCategory = (category) => {

  setCategories((prev) =>
    prev.filter(
      (item) =>
        !(
          item.name === category.name &&
          item.parent === category.parent &&
          item.section === category.section
        )
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