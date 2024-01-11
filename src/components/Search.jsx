import { useState, useTransition } from "react";
import Layout from "./Layout";
import Result from "./Result";

const Search = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    startTransition(() => {
        const list = []
        for (let i = 0; i < 1000; i ++) {
            list.push(e.target.value);
        }
        setResults(list);
    });
  }

  return(
    <>
    <Layout>
      <div style={{ display: 'flex' }}>
        <div>
        <form>
          <input value={query} onChange={handleChange}/>
        </form>
        { isPending ? "Loading..." : results.map((result) => (
          <>
          <ul>
            {result}
          </ul>
          </>
        ))}
        </div>
        <div>
          <Result query={query}/>
        </div>
      </div>
    
    </Layout>
    </>
  )
}

export default Search;
