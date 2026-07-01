import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import type { Accept } from 'react-dropzone';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Stack } from '@mui/material';

export interface FileUploadProps {
  /** Currently selected files (controlled). */
  value: File[];
  /** Called with the next list of files whenever the selection changes. */
  onChange: (files: File[]) => void;
  /** Accepted MIME types, e.g. `{ 'image/*': ['.png', '.jpg'] }`. */
  accept?: Record<string, string[]>;
  /** Allow selecting more than one file. Defaults to `true`. */
  multiple?: boolean;
  /** Maximum size per file, in bytes. */
  maxSize?: number;
  /** Disable the dropzone and remove buttons. */
  disabled?: boolean;
}

function humanizeSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, exponent);
  const rounded = exponent === 0 ? value : Math.round(value * 10) / 10;
  return `${rounded} ${units[exponent]}`;
}

export function FileUpload(props: FileUploadProps) {
  const { value, onChange, accept, multiple = true, maxSize, disabled } = props;

  const handleDrop = useCallback(
    (accepted: File[]) => {
      if (accepted.length === 0) return;
      onChange(multiple ? [...value, ...accepted] : accepted.slice(0, 1));
    },
    [multiple, onChange, value],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: accept as Accept | undefined,
    multiple,
    maxSize,
    disabled,
  });

  const handleRemove = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <Stack spacing={2}>
      <Box
        {...getRootProps()}
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          px: 3,
          py: 5,
          textAlign: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderRadius: 2,
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'divider',
          backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
          color: disabled ? 'text.disabled' : 'text.secondary',
          opacity: disabled ? 0.6 : 1,
          transition: theme.transitions.create(['border-color', 'background-color']),
          '&:hover': disabled
            ? undefined
            : {
                borderColor: 'primary.main',
                backgroundColor: 'action.hover',
              },
          '&:focus-visible': {
            outline: 'none',
            borderColor: 'primary.main',
            boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`,
          },
        })}
      >
        <input {...getInputProps()} />
        <Typography
          aria-hidden
          sx={{ fontSize: 40, lineHeight: 1, color: isDragActive ? 'primary.main' : 'text.secondary' }}
        >
          &#9729;
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
          {isDragActive ? 'Drop files to upload' : 'Drag files here, or click to browse'}
        </Typography>
        {maxSize != null && (
          <Typography variant="caption" color="text.secondary">
            Max {humanizeSize(maxSize)} per file
          </Typography>
        )}
      </Box>

      {value.length > 0 && (
        <List dense disablePadding aria-label="Selected files">
          {value.map((file, index) => (
            <ListItem
              key={`${file.name}-${index}`}
              divider={index < value.length - 1}
              secondaryAction={
                <IconButton
                  edge="end"
                  size="small"
                  aria-label={`Remove ${file.name}`}
                  disabled={disabled}
                  onClick={() => handleRemove(index)}
                >
                  <Box component="span" aria-hidden sx={{ fontSize: 18, lineHeight: 1 }}>
                    &times;
                  </Box>
                </IconButton>
              }
              sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                mb: index < value.length - 1 ? 1 : 0,
              }}
            >
              <ListItemText
                primary={file.name}
                secondary={humanizeSize(file.size)}
                primaryTypographyProps={{ noWrap: true, title: file.name }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}

export default FileUpload;
