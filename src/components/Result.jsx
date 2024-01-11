import { useDeferredValue, memo } from "react";

const Result = memo(({ query }) => {
  const defQuery = useDeferredValue(query);
  const isStale = defQuery !== query
  const list = Array(1000).fill(defQuery);

  return (
    <>
    <div style={{ opacity: isStale ? 0.2 : 1 }}>
       {list.map((l) => (
        <li>{l}</li>
       ))}
    </div>
    </>
  )
});

export default Result;
