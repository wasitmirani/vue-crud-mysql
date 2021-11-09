

class Helpers {

    setComponent =async (path_file='')=>{
       
        return await import(`./views/${path_file}.vue`);
      }
}

export default Helpers;