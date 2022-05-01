import axios from 'axios'

describe('userTest', () => {

  //URL
  const urlCreateUser = "http://localhost:5000/auth/local/create";
  const urlLogin = "http://localhost:5000/auth/local/login";

  //Body (IF YOU WANT TO PROBE CREATEUSER YOU HAVE TO CHANGE THE EMAIL)
  const bodyTest = {
    email: "test1@gmail.com",
    password: "123"
  }

  it('should create a new user ', async() => {
    const result = await axios.post(
      urlCreateUser,
      bodyTest
      )

      expect(result.status).toEqual(201);
      expect(result.data).toBeDefined();
      expect(result.data.email).toBe(bodyTest.email);
  });

  it('should login ans obtein token', async () => {
    const result = await axios.post(
      urlLogin,
      bodyTest
      )

      expect(result.status).toEqual(200);
      expect(result.data.token).toBeDefined();
  });
})