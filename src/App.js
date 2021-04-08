import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import AlbumsItem from "./components/AlbumsItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/Products";
import EditPage from "./pages/EditPage";
import Albums from "./components/Albums";
import ManagerProducts from "./pages/ManagerProduct";
// import Hello from "./components/Hello";

function App() {
  // const [albums, setalbums] = useState([
  //   {
  //     id: 1,
  //     desc:
  //       "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  //   {
  //     id: 2,
  //     desc:
  //       "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  //   {
  //     id: 3,
  //     desc:
  //       "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  //   {
  //     id: 4,
  //     desc:
  //       "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  // ]);
  // // Stage : trạng thái của 1 ứng dụng
  // // Stage State Hook có cú pháp : const
  // const [name, setName] = useState(["Thắng"]);
  // const setName = () => {
  //   console.log("name");
  // };

  const [status, setstatus] = useState(false)
  const onChangeStatus = () => {
    setstatus(!status)
  };

  // const [albums, setAlbums] = useState([]);
  // useEffect(() => {
  //   fetch('https://6008fb580a54690017fc2817.mockapi.io/persons')
  //     .then(response => response.json()
  //       .then(data => setAlbums((data))))
  // }, [])



  // const [albums, setAbums] = useState([{ "id": "2", "createdAt": "2021-03-26T23:59:03.183Z", "name": "Bradley Roberts", "avatar": "https://picsum.photos/300/300" }, { "id": "3", "createdAt": "2021-03-26T14:12:55.966Z", "name": "Una Collins", "avatar": "https://picsum.photos/300/300" }, { "id": "4", "createdAt": "2021-03-26T18:42:22.886Z", "name": "Arne Halvorson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jonathansimmons/128.jpg" }, { "id": "5", "createdAt": "2021-03-26T04:46:23.205Z", "name": "Lela Ankunding", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/imammuht/128.jpg" }, { "id": "6", "createdAt": "2021-03-26T10:14:08.946Z", "name": "Lucie Stokes", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/pierre_nel/128.jpg" }, { "id": "7", "createdAt": "2021-03-26T08:03:40.413Z", "name": "Alaina Kautzer", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg" }, { "id": "8", "createdAt": "2021-03-27T00:16:05.101Z", "name": "Tod Hamill", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg" }, { "id": "9", "createdAt": "2021-03-26T07:38:11.586Z", "name": "Abby Nitzsche", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg" }, { "id": "10", "createdAt": "2021-03-26T18:16:21.495Z", "name": "Stephania Sawayn", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thatonetommy/128.jpg" }, { "id": "11", "createdAt": "2021-03-26T06:12:22.646Z", "name": "Judah Champlin", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg" }, { "id": "12", "createdAt": "2021-03-26T09:27:21.412Z", "name": "Rosario Lind", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/leonfedotov/128.jpg" }, { "id": "13", "createdAt": "2021-03-26T06:13:07.869Z", "name": "Donald Collier III", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg" }, { "id": "14", "createdAt": "2021-03-26T10:50:31.524Z", "name": "Antonio Brown", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/davidhemphill/128.jpg" }, { "id": "15", "createdAt": "2021-03-26T03:29:54.580Z", "name": "Maximillia Kirlin", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg" }])
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/product`)
        const data = await response.json();
        setAlbums(data)
      } catch (error) {
        console.log(error)
      }

    }
    getAlbums();
  }, [])
  const addProduct = async (album) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(album)
      });
      setAlbums([
        ...albums,
        album
      ])
    } catch (error) {
      console.log(error)
    }
  }
  const onHanleUpdate = async (album) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/product/${album.id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(album)
      });
    } catch (error) {
      console.log(error)
    }
  }
  const onHanleRemode = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      });
      const newAlbum = albums.filter((item) => item.id != id)
      setAlbums(newAlbum);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact component={() => <Homepage albums={albums} />} />
              <Route path="/products" exact component={() => <ProductPage albums={albums} />} />
              <Route path="/manager" exact component={() => <ManagerProducts albums={albums} onDelete={onHanleRemode} />} />
              <Route path="/manager/add" exact component={() => <AddProduct onAdd={addProduct} />} />
              <Route path="/manager/edit/:id" exact component={() => <EditPage albums={albums} onUpdate={onHanleUpdate} />} />
              <Route>
              </Route>
            </Switch>

            {/* <Banner />
            <div className="container">
              <AddProduct onAdd={addProduct} />
            </div> */}
            {/* <Albums data={albums} onDelete={onHanleRemode} />
            <button onClick={onChangeStatus}>button</button>
            {/* <button onClick={() => setName("Quyết")}>Click</button> */}
            {/* {status ? 'On' : 'Off'} */}
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
  // const students = [
  //   {id:'ph11827', name:'Nguyễn Văn Thắng'},
  //   {id:'ph11816', name:'Đào Quang Huy'},
  //   {id:'ph10222', name:'Nguyễn Huy Quyết'},
  // ]
  // return(
  //   <div>
  //     <table>
  //       <tbody>
  //         {students.map((product, index) =>(
  //         <tr key={index}>
  //           <td>{product.name}</td>
  //         </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )
  // return (
  //   <div>
  //     <div>Xin chào <Hello name = "Nguyễn" /></div>
  //     <div>Xin chào <Hello name = "Văn" /></div>
  //     <div>Xin chào <Hello name = "Nguyễn" /></div>
  //   </div>
  // );
  // const students = [
  //   { id: "ph11827", name: "Nguyễn Văn Thắng" },
  //   { id: "ph11816", name: "Đào Quang Huy" },
  //   { id: "ph10222", name: "Nguyễn Huy Quyết" },
  // ];
  // return (
  //   <div>
  //     {students.map(({ id, name }, index) => {
  //       return (
  //         <div key={index}>
  //           Xin chào <Hello name={name} /> có id là {id}
  //         </div>
  //       );
  //     })}
  //   </div>
}

export default App;
