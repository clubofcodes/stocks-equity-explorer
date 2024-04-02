import SearchBar from '../search-bar/SearchBar';

const Stocks = () => {
  // const [topData, setTopData] = useState(null);

  // const fetchTopGainersLosers = () => {
  // };

  // useEffect(() => {
  //   fetchTopGainersLosers();
  // }, []);

  return (
    <section className="section-defaults gap-6">
      <SearchBar />
      <div className="container mx-auto border border-solid border-red-900">
        <div className="grid grid-rows-2 gap-5">
          <div className="grid grid-cols-4">
            {/* {[].map(e => (
              <div></div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stocks;
