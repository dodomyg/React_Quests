import { useState } from "react";
import useApiCall from "./useApiCall";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useApiCall(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const dataPerPage = 10;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const dl = data && data?.length / dataPerPage;
  return (
    <div>
      {data &&
        data
          ?.slice(dataPerPage * (page - 1), dataPerPage * page)
          ?.map((d, i) => (
            <div key={i}>
              <h1>
                <span className="mx-2">
                  {dataPerPage * (page - 1) + (i + 1)}
                </span>
                {d?.title}
              </h1>
            </div>
          ))}

      <div className="flex my-8 items-center justify-center gap-x-3">
        {page > 1 && <button onClick={() => setPage(page - 1)}>👈</button>}
        {[...Array(Math.ceil(dl))].map((d, i) => (
          <button
            className={page === i + 1 ? "bg-black text-white" : ""}
            onClick={() => setPage(i + 1)}
            key={i}
          >
            {i + 1}
          </button>
        ))}
        {page < dl && <button onClick={() => setPage(page + 1)}>👉</button>}
      </div>
    </div>
  );
};

export default Pagination;
