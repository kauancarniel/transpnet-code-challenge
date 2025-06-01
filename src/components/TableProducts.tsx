'use client'

import { IProduct } from '@/interfaces/IProduct';
import { createTheme, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from '@mui/material';
import Table from '@mui/material/Table';
import Link from 'next/link';

export default function TableProducts({ apiData }: {apiData: IProduct[]}) {

  const createData = (
    name: string, category: string, price: number, stock: number, tags: string[]
  ) => {
    return { name, category, price, stock, tags }
  };

  const rows = apiData.map((product) => {
    return createData(product.title, product.category, product.price, product.stock, product.tags);
  });

  const theme = createTheme({ palette: { mode: 'dark' }});

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'}}>
        <Table sx={{ maxWidth: 1000, minWidth: 350 }} arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Estoque</TableCell>
              <TableCell align="center">Etiquetas</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows.map((product) => (
              <TableRow key={ product.name } sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">{product.tags}</TableCell>
                <Link href={`/ProductDetails/${product.name}`}>
                  <TableCell>Mostrar detalhes</TableCell>
                </Link>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
