import React, { useEffect, useState } from 'react'
import useApiCall from './useApiCall'

const InfiniteScrolling = () => {
    const { data, error, loading } = useApiCall("https://api.escuelajs.co/api/v1/products")
    const [obj, setObj] = useState({ initial: 0, final: 20 });
    const [fetchedData, setFetchedData] = useState([]);
    const [insideLoading,setInsideLoading] = useState(false)

    // Update data when it arrives
    useEffect(() => {
        if (data?.length > 0) {
            setFetchedData(data.slice(0, obj.final));
        }
    }, [data]);

    // Scroll loading function
    const loadMore = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setInsideLoading(true)
            if (data?.length > fetchedData.length) {
                const newItems = data.slice(obj.final, obj.final + 20);
                setFetchedData(prev => [...prev, ...newItems]);
                // setObj(prev => ({ ...prev, final: prev.final + 20 }));
                setInsideLoading(false)
            }else{
                setInsideLoading(false)
            }
        }
    };

    // Add/remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    }, [data, obj.final, fetchedData.length]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <div className='grid grid-cols-3 place-items-center my-2'>
            {
                fetchedData.map((d, i) => (
                    <div className='my-3 border-2 border-black p-4' key={i}>
                        <span>{i + 1} : </span>
                        {d.title}
                    </div>
                ))
            }
            {
                insideLoading && <h1>Loading More...</h1>
            }
        </div>
    );
};

export default InfiniteScrolling;
