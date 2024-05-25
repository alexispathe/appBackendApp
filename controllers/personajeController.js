const db = require('../config/db');
const guardarPersonaje =(req, res)=>{
    const {name, gender, species, image,status} = req.body;
    const sql = `INSERT INTO personajes(name, gender, species, image, status) VALUES (?, ?, ?, ?, ?);`
    const values =[name, gender, species, image,status];
    db.query(sql, values,(err, result)=>{
        if (err) {
            console.error('Error al guardar el personaje:', err);
            return res.status(500).json({ error: 'Error al guardar el personaje' });
          }
            return res.status(201).json({message: 'Personaje guardado correctamente'})

    })

}

const getPersonajes=(req, res)=>{
    const sql = "SELECT * FROM personajes";
    db.query(sql, (err, result)=>{
        
        if(err) {
            console.log(err)
            return res.status(500).json({"Message": "Error al devolver los datos"})
        }
        return res.status(200).json({"Message": "Datos devueltos correctamente", result})
    })
}
const getPersonaje=(req, res)=>{
    const sql = "SELECT * FROM personajes WHERE personajeID = ?";
    db.query(sql, [req.params.id], (err, result)=>{
        if (err) {
            console.error('error ',err);
            return res.status(500).json({ error: 'Error al encontrar el personaje' });
          }
          if (result.length === 0) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
          }
        return res.status(200).json({result})
    })
}
const updatePersonaje = (req, res) => {
    const personajeID = req.params.id; // Obtén el ID del personaje desde los parámetros de la solicitud
    const { name, gender, species, image, status } = req.body; // Obtén los datos actualizados del personaje desde el cuerpo de la solicitud
  
    // Realiza la consulta para actualizar el personaje en la base de datos
    const sql = 'UPDATE personajes SET name = ?, gender = ?, species = ?, image = ?, status = ? WHERE personajeID = ?';
    const values = [name, gender, species, image, status, personajeID];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el personaje:', err);
        return res.status(500).json({ error: 'Error al actualizar el personaje' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Personaje no encontrado' });
      }
  
      return res.status(200).json({ message: 'Personaje actualizado correctamente' });
    });
  };
  
const deletePersonaje=(req, res)=>{
    const sql = "DELETE FROM personajes WHERE personajeID = ?";
    db.query(sql,[req.params.id],(err,result)=>{
        if (err) {
            console.error('error ',err);
            return res.status(500).json({ error: 'Error al borrar el personaje' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
          }
        res.status(200).json({"Message": "Datos borrados correctamente"})
    })
}
const guardarPersonajeFavorito =(req, res)=>{
    const {personajeID} = req.body;
    const sql = `INSERT INTO personajesFavoritos(personajeID) VALUES (?);`
    const values =[personajeID];
    db.query(sql, values,(err, result)=>{
        if (err) {
            console.error('Error al guardar el personaje:', err);
            return res.status(500).json({ error: 'Error al guardar el personaje' });
          }
            return res.status(201).json({message: 'Personaje guardado correctamente'})
    })
}
const getPersonajesFavoritos=(req, res)=>{
  const sql = "SELECT * FROM personajesFavoritos";
  db.query(sql, (err, result)=>{
      
      if(err) {
          console.log(err)
          return res.status(500).json({"Message": "Error al devolver los datos"})
      }
      return res.status(200).json({"Message": "Datos devueltos correctamente", result})
  })
}
const deletePersonajeFavorito=(req, res)=>{
  const sql = "DELETE FROM personajesFavoritos WHERE personajeID = ?";
  db.query(sql,[req.params.id],(err,result)=>{
      if (err) {
          console.error('error ',err);
          return res.status(500).json({ error: 'Error al borrar el personaje' });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Personaje no encontrado' });
        }
      res.status(200).json({"Message": "Datos borrados correctamente"})
  })
}
module.exports = {guardarPersonaje, getPersonajes, getPersonaje,updatePersonaje,deletePersonajeFavorito, deletePersonaje, guardarPersonajeFavorito, getPersonajesFavoritos};