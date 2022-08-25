import React from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
