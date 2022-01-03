function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState([]);
  const [coluor, setColuor] = React.useState("#000");

  React.useEffect(() => {
    async function getQuote() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex]);
    }

    getQuote();
  }, []);

  const getRandomQuote = () => {
    const coluors = ["#000B49", "#9B0000", "#FF7272", "#FFB5B5"];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColuor = Math.floor(Math.random() * coluors.length);
    setRandomQuotes(quotes[randomIndex]);
    setColuor(coluors[randomColuor]);
  };

  return (
    <div id= 'quote-box' style={{backgroundColor: coluor, minHeight: '100vh'}}>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header text-center">Random quote</div>
            <div className="card-body text-center p-3">
              {randomQuotes ? (
                <>
                  <p id= 'text' className="card-info d-flex justify-content-center">&ldquo;{randomQuotes.text}&rdquo;</p>
                  <h3 id= 'author' className="card-author d-flex justify-content-end">-{randomQuotes.author}</h3>
                </>
              ) : (
                <p>loading</p>
              )}
            </div>
            .
            <div className="buttons-section d-flex p-3 ">

              <a href="twitter.com/intent/tweet" target='_blank' id= 'tweet-quote' className = 'btn ' style = {{backgroundColor: coluor, color: 'white'}}>
                <i className="fa fa-twitter"></i>
              </a>

              <a href="_blank" className = 'btn ' style = {{backgroundColor: coluor, color: 'white'}}>
                <i className="fa fa-tumblr"></i>
              </a>

              <button id= 'new-quote' onClick={getRandomQuote} className="btn  p-2" style = {{backgroundColor: coluor, color: 'white'}}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
