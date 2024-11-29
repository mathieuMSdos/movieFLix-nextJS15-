"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  // pour déclencher la recherche on va changer l'url en cours
  // le plus adapté pour faire une simple recherche, seo friendly, les utilisateur peuvent se partager le lien de recherche entre eux, et le changement d'url déclenche un re-render donc lancera notre fetch search
  
  // utilisation de useRouter pour ajoute run apramètre dans notre url
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // On reste sur la même page, on ajoute juste le paramètre de recherche

    await router.push(`/?search=${encodeURIComponent(search)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-center items-center h-10 w-full  text-slate-950"
    >
      <input
        type="search"
        placeholder="Transformers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="appearance-none w-3/5 px-4 py-2 bg-white border border-gray-300 rounded-3xl focus:outline-none"
      />
    </form>
  );
};

export default SearchBar;
