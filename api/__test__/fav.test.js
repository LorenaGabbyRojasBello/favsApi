import axios from 'axios'

describe('Fav tests', () => {
//Initialization of variables
  //HEADER
  let headerAuthorization = "";
  beforeAll( async ()=>{
    // Login to get token
    const urlLogin = "http://localhost:5000/auth/local/login"
    const bodyLogin = {
      "email": "holiwis@gmail.com",
      "password": "123"
    }
    const login = await axios.post(
      urlLogin, 
      bodyLogin
    );
    const { token } = login.data;
    
    headerAuthorization = {
      headers:{
      Authorization: `Bearer ${token}`
      }
    }
  })

  //URL
  const urlCreateList = "http://localhost:5000/api/favs/create"
  const urlGetAllList = "http://localhost:5000/api/favs/"
  
  //BODY
  const bodyCreateList = {
    nameList: "animales mitologicos",
    favs: [
      {
        title: "Dragon",
        description: "dragon mitologico",
        link: "www.link.com"
      },
      {
        title: "Hombrelobo",
        description: "animal mitologico",
        link: "www.link.com"
      },
      {
        title: "Centauro",
        description: "animal mitologico",
        link: "www.link.com"
      }
    ]
  }

  it('should create a favList', async () => {
    const result = await axios.post(
      urlCreateList,
      bodyCreateList,
      headerAuthorization
      )

      expect(result.status).toEqual(201);
      expect(result.data).toBeDefined();
      expect(result.data._id).toBeDefined();
      expect(result.data.nameList).toEqual("animales mitologicos");
      expect(result.data.favs[0].title).toEqual("Dragon");
      expect(result.data.favs[1].title).toEqual("Hombrelobo");
      expect(result.data.favs[2].title).toEqual("Centauro");
  })
  
  it('should get all favLists', async () => {
    const result = await axios.get(
      urlGetAllList,
      headerAuthorization
    )
    expect(result.status).toEqual(200);
    expect(result.data).toBeDefined();
  })  
})