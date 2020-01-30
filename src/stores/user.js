import create from "zustand";

const [useUserStore] = create(set => ({
  user: null, 
  
}));


const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [validateUser, setValidateUser] = useState(false);
  const [wishLists, setWishlists] = useState([]);
  const [login, setLogin] = useState(false);
