import Episode from "../models/episode.Model.js";

export const createEpisode = async (req, res) => {
    const { season, episodeNumber, title, summary, airingDate, image, opening} = req.body

 try {

     if (!season || !episodeNumber || !title || !summary || !airingDate || !image || !opening) {
         return res.status(400).json({ message: "Datos insuficientes" })
     }

    const newEpisode = await Episode.create({
        season: season,
        episode: episodeNumber,
        title: title,
        summary: summary,
        airingDate: airingDate,
        image: image,
        opening: opening,
      });

     res.status(201).json(newEpisode)
     
 } catch (error) {
    return res.status(500).json({message: error.message })
 }

};

export const getAllEpisodes = async (req, res) => {
    try {
        const episodes = await Episode.find()
        
        if(episodes.length > 0){
            return res.json(episodes)
        }
        res.status(404).json({ message: "No hay episodios creados"})   
    } catch (error) {
       return res.status(500).json({message: error.message })
    }
};

export const getEpisodeById = async (req, res) => {
    const { id } = req.params

    try {
        const foundEpisode = await Episode.findById(id)
        
        if (!foundEpisode) {
            return res.status(404).json({ message: "No existe el episodio" })
        }

        return res.status(200).json(foundEpisode)

    } catch (error) {
        return res.status(500).json({message: error.message })
    }
};

export const deleteEpisodeById = async (req, res) => {
    const { id } = req.params

    try {
       const foundEpisode = await Episode.findById(id)
       
       if (!foundEpisode){
           return res.status(404).json({ message: "No existe el episodio" })
         }
         
      await Episode.findByIdAndDelete(id) 
      return res.status(200).json({message: "Borrado correctamente"})
      
    } catch (error) {
        return res.status(500).json({message: error.message })
    }
  
   
};

export const updateEpisode = async (req, res) => {

};
