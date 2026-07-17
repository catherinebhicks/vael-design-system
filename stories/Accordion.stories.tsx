import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../src/components/Accordion';
import { AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
  title: 'Surfaces/Accordion',
  tags: ['autodocs'],
  parameters: { design: { type: 'figma', url: 'https://www.figma.com/design/4dNRm8xuERpDNfdXYjlbIn/Vael-Design-System?node-id=97-2' } },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      {['Panel One', 'Panel Two', 'Panel Three'].map((label, i) => (
        <Accordion key={i} defaultExpanded={i === 0}>
          <AccordionSummary expandIcon={<FontAwesomeIcon icon={faChevronDown} />}>
            <Typography>{label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Content for {label}.</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  ),
};
