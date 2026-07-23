import "./Categories.css";

const categories = [
  "MS Steel",
  "MS Structure",
  "MS Pipe",
  "MS Flat",
  "MS Angle",
  "MS Channel",
  "Base Plate",
  "Profile Sheet",
];

function Categories() {
  return (
    <section className="categories">

      <h2>Product Categories</h2>

      <div className="category-grid">

        {categories.map((item, index) => (

          <div className="category-card" key={index}>

            <h3>{item}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;