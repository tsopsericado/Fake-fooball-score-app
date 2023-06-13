export const fetchFixtures = async () => {
   
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8f504e8b6bmshc37b2edf7644b68p1a598bjsnf84bdf588dbe",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

     const result = fetch ( "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
     )
  .then((response)=> response.json())
  .then((response)=> {
    return response;
  })
  .catch((err)=> console.error(err));
  return result;
};