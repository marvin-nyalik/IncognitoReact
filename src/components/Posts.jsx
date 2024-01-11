import useFetch from "../hooks/useFetch";
import { FixedSizeList as List } from "react-window";
import Layout from "./Layout";
import { useState, useCallback } from "react";

const Posts = () => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const { data, loading, error } = useFetch(url);
  const url1 = 'https://jsonplaceholder.typicode.com/posts';
  const url2 = 'https://jsonplaceholder.typicode.com/comments';

  const handleClick = useCallback(() => {
    setUrl(prevUrl => (prevUrl === url1 ? url2 : url1));
  }, [url1, url2, setUrl]);
  

  if (loading) {
    return (<><h1>Loading</h1></>)
  }

  if (error) {
    return (
    <>
    <Layout>
      <h1>{error.message}</h1>
    </Layout>
    </>)
  }

  const Row = ({index, style}) => ((
    <div style={style} key={data[index].id}>
        <p>{data[index].body}</p>
    </div>
  ));

  return(
    <>
      <Layout>
      <div>
        <h1>{url === url1 ? 'Posts' : 'Comments'}</h1>
        <button onClick={handleClick}>Switch To {url === url1 ? 'Comments' : 'Posts'}</button>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error: {error.message}</h2>}
        <List
            height={400}
            width={1000}
            itemCount={data.length}
            itemSize={100}
        >
          { Row }
        </List>
      </div>
      </Layout>
    </>
  )
}

export default Posts;
