'use client'

import { IProduct } from "@/interfaces/IProduct";
import { requestApi } from "../service/request";
import { useEffect, useState } from "react";
import { createTheme, TablePagination, ThemeProvider } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import TableProducts from "@/components/TableProducts";
import Filters from "@/components/Filters";
import Sorter from "@/components/Sorter";

export default function Home() {
  const [apiData, setApiData] = useState<IProduct[]>();
  const [defaultApiData, setDefaultApiData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await requestApi();
      setApiData(data);
      setDefaultApiData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

if (loading) {
  return (
    <p className="flex items-center justify-center h-[60vh] text-lg font-semibold text-gray-300 animate-pulse">
      Loading...
    </p>
  );
};

if (!apiData) {
  return (
    <p className="flex items-center justify-center h-[60vh] text-lg font-semibold text-red-400">
      {"We're experiencing technical issues with our API."}
    </p>
  );
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
  const currentItems = apiData?.slice(startIndex, endIndex);

  const theme = createTheme({ palette: { mode: 'dark' }});

  return (
    <ThemeProvider theme={theme}>
      <div className="mb-15">
        <SearchBar setApiData={setApiData} defaultApiData={defaultApiData} />
        <div className="flex flex-row">
          <Filters setApiData={ setApiData } defaultApiData={ defaultApiData } />
          <Sorter setApiData={ setApiData } defaultApiData={ defaultApiData } />
        </div>
        { apiData?.length !== 0 ? (
          <>
            <TableProducts apiData={ currentItems || [] }/>
            <TablePagination 
              className="flex justify-center items-center gap-4 mt-6"
              component="div"
              count={apiData?.length || 0 }
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>  ) : (
        <div className="text-center mt-10">
          <p className="text-lg font-medium mb-2">No products found.</p>
          <p className="text-gray-400">Try adjusting the filters or resetting your search.</p>
        </div> )
        };
      </div>
    </ThemeProvider>
  );
};
