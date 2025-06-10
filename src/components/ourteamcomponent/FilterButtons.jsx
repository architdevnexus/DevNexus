const filters = ["HTML5 / CSS3", "Tailwind CSS", "Bootstrap"];

const FilterButtons = ({ active, setActive }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-4 py-2 rounded border text-sm font-medium transition-all duration-200
            ${
              active === filter
                ? "bg-[#00357A] text-white"
                : "bg-white text-[#00357A] border-[#00357A]"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
