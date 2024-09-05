import React, { useState } from "react";
import axios from "axios";

const useAxios = (initialURL) => {
    const [data, setData] = useState([]);

    const fetchData = async (url = initialURL) => {
        const res = await axios.get(url);
        // adding new data to existing array
        setData((prevData) => [...prevData, res.data])
    };
    return [data, fetchData];
}

export default useAxios;

  