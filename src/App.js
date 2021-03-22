import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import Hello from "./components/Hello";

function App() {
  // return (
  //   <div className="App">
  //     <div>
  //   <Header />
  // <main>
  //   <Banner />
  //   <Albums />
  // </main>
  // <Footer />
  //    </div>
  //   </div>
  // );

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

  const students = [
    { id: "ph11827", name: "Nguyễn Văn Thắng" },
    { id: "ph11816", name: "Đào Quang Huy" },
    { id: "ph10222", name: "Nguyễn Huy Quyết" },
  ];
  return (
    <div>
      {students.map(({ id, name }, index) => {
        return (
          <div key={index}>
            Xin chào <Hello name={name} /> có id là {id}
          </div>
        );
      })}
    </div>
  );
}

export default App;
