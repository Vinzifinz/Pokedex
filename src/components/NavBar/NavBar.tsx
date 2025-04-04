import './NavBar.css';

interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
    const handleClick = (name: string) => {
        if (name === "pikachu") {
            alert("pika pikachu !!!");
        }
        setPokemonName(name);
    };
    return (
        <nav>
            {pokemonList.map((pokemon) => (
                <button key={pokemon.name} onClick={() => handleClick(pokemon.name)}>
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}

export default NavBar;
