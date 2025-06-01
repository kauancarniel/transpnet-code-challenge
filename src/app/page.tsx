'use client'

import { IProduct } from "@/interfaces/IProduct";
import { requestApi } from "../service/request";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import TableProducts from "@/components/TableProducts";
import { createTheme, TablePagination, ThemeProvider } from "@mui/material";
import Filters from "@/components/Filters";

export default function Home() {
  const [apiData, setApiData] = useState<IProduct[] | undefined>(undefined);
  const [defaultApiData, setDefaultApiData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestApi();
      setApiData(data);
      setDefaultApiData(data);
      console.log(data);
    };
    fetchData();
  }, [])

  if (!apiData) {
    return <p className="p-4 text-center mt-10">Loading...</p>;
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentItems = apiData.slice(startIndex, endIndex);

  const theme = createTheme({ palette: { mode: 'dark' }});

  return (
    <ThemeProvider theme={theme}>
    <div className="mb-15">
      <SearchBar setApiData={setApiData} defaultApiData={defaultApiData} />
      <Filters setApiData={ setApiData } defaultApiData={ defaultApiData } />
      <TableProducts apiData={ currentItems }/>
      <div className="flex justify-center items-center gap-4 mt-6">
        <TablePagination 
          component="div"
          count={apiData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
    </ThemeProvider>
  );
}