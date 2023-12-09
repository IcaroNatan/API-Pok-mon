const { detalharPokemon } = require("utils-playground");

const detalhesPokemon = async (req, res) => {
    const { parametro } = req.params;

    try {
        const detalhes = await detalharPokemon(parametro);

        const simplificado = {
            id: detalhes.id,
            name: detalhes.name,
            height: detalhes.height,
            weight: detalhes.weight,
            base_experience: detalhes.base_experience,
            forms: detalhes.forms,
            abilities: detalhes.abilities,
            species: detalhes.species

        }
        return res.status(200).json(simplificado);
    } catch (erro) {
        return res.status(404).json(erro.message);
    }
}

module.exports = {
    detalhesPokemon
}