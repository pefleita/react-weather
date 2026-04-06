import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function SearchWeather({ onSearch }) {
  const [form, setForm] = useState({
    city: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form.city);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 md:px-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 mt-0">Buscar clima</h2>
      <form className="relative w-full max-w-md" onSubmit={handleSubmit}>
        <input
          className="text-2xl h-[50px] w-full rounded-[10px] border border-neutral-300 px-4 py-2 text-neutral-600 font-light placeholder-neutral-600 focus:outline-none focus:border-neutral-400 focus:shadow-[0_0_5px_#e8e8e8]"
          type="text"
          placeholder="Ciudad"
          name="city"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full cursor-pointer rounded-r-[10px] border border-transparent bg-transparent text-neutral-400 px-3 hover:text-neutral-600 transition-colors"
        >
          <FaSearch size={20} />
        </button>
      </form>
    </div>
  );
}