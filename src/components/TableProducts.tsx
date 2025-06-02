'use client'

import { IProduct } from '@/interfaces/IProduct';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import Link from 'next/link';

export default function TableProducts({ apiData }: {apiData: IProduct[]}) {

  const createData = (
    name: string, category: string, price: number, stock: number, tags: string[], id: number,
  ) => {
    return { name, category, price, stock, tags, id }
  };

  const rows = apiData.map((product) => {
    return createData(product.title, product.category, product.price, product.stock, product.tags, product.id);
  });

  return (
      <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'}}>
        <Table sx={{ maxWidth: 1000, minWidth: 350 }} arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Tags</TableCell>
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
                <TableCell><Link className="text-blue-500 hover:text-blue-600" href={`/ProductDetails/${product.id}`}>Show More Details</Link></TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
  );
}
