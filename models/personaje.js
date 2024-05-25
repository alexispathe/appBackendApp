const createPersonaje =(name, gender, species, image,status)=>{
    return{
        name, gender, species, image,status
    }
};

module.exports = {createPersonaje};