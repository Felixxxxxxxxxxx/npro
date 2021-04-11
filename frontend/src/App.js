import './style.css'
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
        <h1>npro</h1>
        <section>
            <main className="parent">
                <Board id="board-1" className="board">
                    <Card id="card-1" className="card" draggable="true">
                        <p>Card One</p>
                    </Card>
                </Board>

                <Board id="board-2" className="board">
                    <Card id="card-2" className="card" draggable="true">
                        <p>Card Two</p>
                    </Card>
                </Board>
                Here will be our boards

            </main>
        </section>
        <section className="parent">

            <button className="button">Order Manager</button>
            <button className="button">Take Orders</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>

            <button className="button">Pizza Master</button>
            <button className="button"/>
            <button className="button">Form the dough</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>

            <button className="button">Sauce Spreader</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button">Spread the sauce</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>

            <button className="button">Pizza Assembler</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button">Assemble the pizza</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>

            <button className="button">Topping Preparer</button>
            <button className="button"/>
            <button className="button">Prepare and portion ingredients</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>

            <button className="button">Pizza Baker</button>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button"/>
            <button className="button">Pizza ok?</button>
            <button className="button">Correct pizza if possible</button>
            <button className="button">Bake Pizza</button>
            <button className="button">Pizza ok?</button>
            <button className="button">Throw pizza away</button>
            <button className="button">Deliver pizza</button>






        </section>




    </div>
  );
}

export default App;
