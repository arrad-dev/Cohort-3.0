export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category.id}
          className={selected === category.id ? 'active' : ''}
          onClick={() => onSelect(category.id)}
          role="tab"
          aria-selected={selected === category.id}
        >
          <span>{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}
