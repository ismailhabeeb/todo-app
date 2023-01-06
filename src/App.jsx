import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/user-solid.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [closearr, setClose] = useState([])
  const [history, setHistory] = useState([])
  const [prog, setProgres] = useState([])
  const [pend, setPending] = useState([])
  const [selects, setSelect] = useState([])

  const add = () => {
    document.getElementById('id01').style.display = 'block'

  }
  function add2() {
    // let title = document.getElementById("title-form").value;
    let time = document.getElementById("time-form").value;
    let name = document.getElementById("text-form").value;
    user.push({ name, time });
    setUser([...user]);
    // document.getElementById('id01').style.display = 'none'

  }
  function removeN(pa, remove) {
    history.push(user[remove]);
    setHistory([...history]);
    console.log(remove)
    user.splice(remove, 1);
    setUser([...user]);

    closearr.splice(remove, 1)
    setClose([...closearr]);

    prog.splice(remove, 1)
    setProgres([...prog]);

    pend.splice(remove, 1)
    setPending([...pend]);

    // console.log(...history)
    // display()
    // b--    
    // document.getElementById("todocount").innerHTML=b       

    // if(b > 1){
    // document.getElementById("task").innerHTML = "tasks"
    // }else {
    // document.getElementById("task").innerHTML = "tasks"
    // }

    // localStorage.setItem("ade", JSON.stringify(arr));

  }
  function closedtask(params, clo) {
    console.log(clo)
    closearr.push(user[clo]);
    setClose([...closearr]);
    params.target.disabled = true;

  }
  function progrestask(param, pro) {
    prog.push(user[pro])
    setProgres([...prog])
    param.target.disabled = true;

  }
  function pendtask(param, pen) {
    pend.push(user[pen])
    setPending([...pend])
    param.target.disabled = true;

  }

  // select//
  function start(params) {
    prog.push(selects)
    setProgres(...prog)
    params.target.disabled = true;


  }
  function cloit(params) {
    closearr.push(selects);
    setClose(...closearr);
    params.target.disabled = true;

  }
  function pendit(params) {
    pend.push(selects)
    setPending(...pend)
    params.target.disabled = true;

  }

  function hisit(params) {
    history.push(selects);
    setHistory(...history);
    user.splice(selects, selects.length);
    setUser([...user]);
    params.target.disabled = true;

  }


  function select(params, sel) {
    let input = document.getElementById("one")
    if (input.checked == true) {
      selects.push(user[sel])
      setSelect([...selects])
      console.log(selects)

    }
    else {
      console.log("i worked oo")
      selects.splice(sel, 1)
      setSelect([...selects]);
      console.log("i worked")
      console.log(selects)

    }


  }
  function displaySelect (){
    document.getElementById("one").hidden = false;
  }

  useEffect(() => {

    setInterval(function () {
      let date = new Date();
      document.getElementById("time").innerHTML = ` ${date.getHours()} : ${date.getMinutes()}: ${date.getSeconds()}`

    }, 1000)
  },)

  return (
    <div className="App">
      <main className=''>
        <nav className="navbar navbar-expand-sm secondary bg-light">

          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link h3 mb-0 mt-0" style={{ fontFamily: 'fantasy' }} href="#">TODO-APP</a>
              </li>
              <div>
                <button onClick={start}>start</button>
                <button onClick={cloit}>cloit</button>
                <button onClick={pendit}>pendit</button>
                <button onClick={hisit}>🗑️</button>
              </div>
            </ul>
            <div className="input-group w-25">

              <input type="text" className="form-control w-25" placeholder="Todo" />
              <span className="input-group-text btn btn-secondary">🔍</span>
            </div>
            <h4 className='text-secondary w-25' id='time'>00:00</h4>

            <div className='dropdown navbar-brand dropstart text-end'>
              <a className=" dropdown-toggle  border-danger logo" href="#" data-bs-toggle="dropdown">
                <img src={reactLogo} alt="Avatar Logo" width={32} className="rounded-circle bg-light" />
              </a>
              <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="#">Normal</a></li>
                <li><a className="dropdown-item active" href="#">Active</a></li>
              </ul>
            </div>
          </div>

        </nav>

        <div className='d-flex'>

          <div className='bg-light first'>
            <form>
              <div className="input-group mt-1 navbar bg-secondary">
                <button type="button" className="btn border-light dropdown-toggle" required data-bs-toggle="dropdown">T</button>
                <div className="dropdown-menu">
                  <input type="time" name="" className='d-block w-100' id="time-form" />
                </div>
                <input type="text" id='text-form' required className="form-control" placeholder="todo" />
                <span onClick={add2} className="input-group-text btn border-light">➕</span>
              </div>
            </form>
            <div id="accordion1">
              <div href="#" className=" navbar container" title='todo'>Todo <span>{user.length}</span>  <b id='b1'> </b>  <b id='b2'> </b>  <b id='b3'> </b>  </div>

              {user.map((value, index) =>

                <div className="car">

                  <div className="card-header" >
                    <input id='one' onClick={opt => select(opt, index)} type="checkbox"  />
                    <a  className="" data-bs-toggle="collapse" href="#collapseOne" >
                      <textarea name="" id="" cols="35" rows="2" defaultValue={value.name} title={value.name}></textarea>
                      <div  className='navba'>
                        <div className='time-div'>Status:status</div>
                        <div className='time-div' title={value.time}>Time:{value.time}</div>
                      </div>
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body">
                      <button className='btn border-primary me-1' title='edit'>🖋️</button>
                      <button onClick={close => closedtask(close, index)} className='btn border-primary me-1' title='close'>Cl</button>
                      <button onClick={pen => pendtask(pen, index)} className='btn border-primary me-1' title='Pending'>Pe</button>
                      <button onClick={progres => progrestask(progres, index)} className='btn border-primary me-1' title='process'>Do</button>
                      <i onClick={minus => removeN(minus, index)} className="btn btn border-primary  text-danger" title='delet'>🗑️</i>

                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

          <div className='bg-white  main-di'>
            <div className='main-div2'>

              <div className='list0 m-1'>
                <div href="#" className="navbar container">Doing <span>{prog.length}</span><a href=""></a></div>

                <div id="accordion">
                  {prog.length == 0 && <h4 className='mx-auto' >No tasks yet</h4>}
                  {prog.map((value, index) =>
                    <div key={index} className="car">
                      <div className="card-header">
                        <a className="collapsed " data-bs-toggle="collapse" href="#collapseTwo">
                          <textarea defaultValue={value.name} name="" id="" cols="35" rows="2"></textarea>
                          <div className='navba'>
                            <div className='time-div'>Status:Doing</div>
                            <div className='time-div'>Time:{value.time}</div>
                          </div>
                        </a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                          <i onClick={minus => removeN(minus, index)} className="btn fa-basket w3-hover-big my-auto text-danger">🗑️</i>

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>


              <div className='list1 m-1'>
                <div href="#" className="navbar container">Closed <span>{closearr.length}</span><a href=""></a></div>
                {closearr.length == 0 && <h4 className='mx-auto' >No closed yet</h4>}

                <div id="accordion">

                  {closearr.map((value, index) =>
                    <div key={index} className="car">
                      <div className="card-header">
                        <a className="collapsed " data-bs-toggle="collapse" href="#collapseTwo">
                          <textarea defaultValue={value.name} name="" id="" cols="35" rows="2"></textarea>
                          <div className='navba'>
                            <div className='time-div'>Status:close</div>
                            <div className='time-div'>Time:{value.time}</div>
                          </div>
                        </a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                          <i onClick={minus => removeN(minus, index)} className="btn fa-basket w3-hover-big my-auto text-danger">🗑️</i>

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              <div className='list3 m-1'>
                <div href="#" className="navbar container">Pending <span>{pend.length}</span><a href=""></a></div>

                <div id="accordion">
                  {pend.length == 0 && <h4 className='mx-auto' >No pending yet</h4>}

                  {pend.map((value, index) =>
                    <div key={index} className="car">
                      <div className="card-header">
                        <a className="collapsed " data-bs-toggle="collapse" href="#collapseTwo">
                          <textarea defaultValue={value.name} name="" id="" cols="35" rows="2"></textarea>
                          <div className='navba'>
                            <div className='time-div'>Status:Pending</div>
                            <div className='time-div'>Time:{value.time}</div>
                          </div>
                        </a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                          <i onClick={minus => removeN(minus, index)} className="btn fa-basket w3-hover-big my-auto text-danger">🗑️</i>

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              <div className='list2 m-1'>
                <div href="#" className="navbar container">History <span>{history.length}</span> <a href=""></a></div>
                {history.length == 0 && <h4 className='mx-auto' >No history</h4>}

                <div id="accordion">
                  {history.map((value, index) =>
                    <div key={index} className="car">
                      <div className="card-header">
                        <a className="collapsed " data-bs-toggle="collapse" href="#collapseThree">
                          <textarea defaultValue={value.name} name="" id="" cols="35" rows="2"></textarea>
                          <div className='navba '>
                            <div id='title'>Status:Deleted</div>
                            <div className='time-div'>Time:{value.time}</div>
                          </div>
                        </a>
                      </div>
                      {/* <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                          <i onClick={minus => removeN(minus, index)} className="btn fa-basket w3-hover-big my-auto text-danger">🗑️</i>

                        </div>
                      </div> */}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}

export default App
