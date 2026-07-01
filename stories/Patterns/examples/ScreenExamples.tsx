import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Pagination,
} from '@mui/material';
import { ExampleFrame } from './ExampleFrame';

/** Log in template — centered Card on a full-bleed background, no nav chrome. */
export function LoginScreenExample() {
  return (
    <ExampleFrame padded={false}>
      <Box
        sx={{
          minHeight: 340,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'action.hover',
          p: 2,
        }}
      >
        <Card variant="outlined" sx={{ width: 360, maxWidth: '100%' }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Sign in
            </Typography>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField label="Email" type="email" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <Button variant="contained" fullWidth>
                Sign in
              </Button>
              <Button variant="text" size="small">
                Forgot password?
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </ExampleFrame>
  );
}

const USERS = [
  { name: 'Jordan Rivera', email: 'jordan@acme.co', role: 'Admin', status: 'Active' },
  { name: 'Sam Chen', email: 'sam@acme.co', role: 'Editor', status: 'Active' },
  { name: 'Alex Novak', email: 'alex@acme.co', role: 'Viewer', status: 'Invited' },
];

/** User management template — heading + filter + DataGrid-style table + pagination. */
export function UserManagementScreenExample() {
  return (
    <ExampleFrame>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h5">Users</Typography>
        <Button variant="contained" size="small">
          Invite user
        </Button>
      </Stack>
      <TextField size="small" placeholder="Search users…" sx={{ mb: 2, maxWidth: 280 }} fullWidth />
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {USERS.map((u) => (
              <TableRow key={u.email} hover>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={u.status}
                    color={u.status === 'Active' ? 'success' : 'default'}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Pagination count={5} size="small" />
      </Box>
    </ExampleFrame>
  );
}
