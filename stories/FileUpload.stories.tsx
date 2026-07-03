import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { FileUpload } from '../src/components/FileUpload';
import type { FileUploadProps } from '../src/components/FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Inputs/FileUpload',
  component: FileUpload,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof FileUpload>;

function Controlled(props: Omit<FileUploadProps, 'value' | 'onChange'>) {
  const [files, setFiles] = React.useState<File[]>([]);
  return (
    <Box sx={{ maxWidth: 480 }}>
      <FileUpload value={files} onChange={setFiles} {...props} />
    </Box>
  );
}

export const Default: Story = {
  render: () => <Controlled />,
};

export const SingleImage: Story = {
  render: () => <Controlled multiple={false} accept={{ 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] }} />,
};

export const WithMaxSize: Story = {
  render: () => <Controlled maxSize={5 * 1024 * 1024} />,
};

export const Disabled: Story = {
  render: () => <Controlled disabled />,
};
