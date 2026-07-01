import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { PasswordField } from '../../../src/components/PasswordField';
import { AdvancedSelect } from '../../../src/components/AdvancedSelect';
import { FileUpload } from '../../../src/components/FileUpload';
import { ExampleFrame } from './ExampleFrame';

/** Register — basic: single-column email + password with strength meter. */
export function RegisterFormExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ExampleFrame>
      <Card variant="outlined" sx={{ maxWidth: 400, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create your account
          </Typography>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordField
              label="Password"
              fullWidth
              showStrength
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in" />
            <Button variant="contained" fullWidth>
              Create account
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </ExampleFrame>
  );
}

const TAG_OPTIONS = [
  { label: 'Engineering', value: 'eng' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'mktg' },
  { label: 'Operations', value: 'ops' },
  { label: 'Finance', value: 'finance' },
];

/** Advanced inputs — multi-select tags + drag-and-drop uploader. */
export function AdvancedFormExample() {
  const [tags, setTags] = useState<string | string[]>(['eng', 'design']);
  const [files, setFiles] = useState<File[]>([]);
  return (
    <ExampleFrame>
      <Stack spacing={3} sx={{ maxWidth: 520 }}>
        <AdvancedSelect
          label="Teams"
          multiple
          options={TAG_OPTIONS}
          value={tags}
          onChange={setTags}
        />
        <FileUpload value={files} onChange={setFiles} />
      </Stack>
    </ExampleFrame>
  );
}
