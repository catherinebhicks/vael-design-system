import React, { useState } from 'react';
import { Box, Stack, Typography, Step, StepLabel, FormControlLabel } from '@mui/material';
import { Stepper } from '../../../src/components/Stepper';
import { SegmentedControl } from '../../../src/components/SegmentedControl';
import { TextField } from '../../../src/components/TextField';
import { Checkbox } from '../../../src/components/Checkbox';
import { Descriptions } from '../../../src/components/Descriptions';
import { Button } from '../../../src/components/Button';
import { ExampleFrame } from './ExampleFrame';

type Plan = 'personal' | 'team';

interface Answers {
  plan: Plan;
  fullName: string;
  workspace: string;
  invites: string;
  agree: boolean;
}

const EMPTY: Answers = {
  plan: 'personal',
  fullName: '',
  workspace: '',
  invites: '',
  agree: false,
};

/**
 * The path is a graph, not a fixed list: the step ids are computed from the
 * current answers, so choosing "Team" reveals an extra "Invite" step that
 * "Personal" never shows. Each step owns its own validation.
 */
type StepId = 'plan' | 'details' | 'invite' | 'review';

function pathFor(answers: Answers): StepId[] {
  return answers.plan === 'team'
    ? ['plan', 'details', 'invite', 'review']
    : ['plan', 'details', 'review'];
}

const STEP_LABEL: Record<StepId, string> = {
  plan: 'Choose',
  details: 'Details',
  invite: 'Extra step',
  review: 'Review',
};

/** Returns an inline error for the step, or null when it is valid. */
function validate(step: StepId, a: Answers): string | null {
  if (step === 'details' && a.fullName.trim() === '') return 'Enter a name to continue.';
  if (step === 'invite' && a.invites.trim() === '') return 'Add at least one entry.';
  if (step === 'review' && !a.agree) return 'Please confirm to finish.';
  return null;
}

/** Wizard with branching — a plan choice reshapes the remaining steps. */
export function WizardBranchingExample() {
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const path = pathFor(answers);
  const step = path[Math.min(index, path.length - 1)];
  const set = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const goNext = () => {
    const err = validate(step, answers);
    if (err) {
      setError(err);
      return;
    }
    if (step === 'review') {
      setDone(true);
      return;
    }
    setError(null);
    setIndex((i) => i + 1);
  };

  const goBack = () => {
    // Back restores prior answers — nothing is wiped on reverse.
    setError(null);
    setIndex((i) => Math.max(0, i - 1));
  };

  const reset = () => {
    setAnswers(EMPTY);
    setIndex(0);
    setError(null);
    setDone(false);
  };

  const total = answers.plan === 'team' ? '4' : '3–4';

  return (
    <ExampleFrame>
      <Box sx={{ maxWidth: 560, mx: 'auto' }}>
        <Stepper activeStep={index} alternativeLabel sx={{ mb: 3 }}>
          {path.map((id) => (
            <Step key={id}>
              <StepLabel>{STEP_LABEL[id]}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {done ? (
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h6">You&apos;re all set.</Typography>
            <Typography variant="body2" color="text.secondary">
              Your {answers.plan === 'team' ? 'team' : 'personal'} workspace has been created.
            </Typography>
            <Button variant="outlined" onClick={reset}>
              Start over
            </Button>
          </Stack>
        ) : (
          <>
            <Typography variant="overline" color="text.secondary">
              Step {index + 1} of {total}
            </Typography>

            {step === 'plan' && (
              <Stack spacing={1.5} sx={{ mt: 1 }}>
                <Typography variant="h6">Choose an option</Typography>
                <Typography variant="body2" color="text.secondary">
                  Option B adds an extra step.
                </Typography>
                <SegmentedControl
                  value={answers.plan}
                  onChange={(v) => set('plan', v as Plan)}
                  options={[
                    { value: 'personal', label: 'Option A' },
                    { value: 'team', label: 'Option B' },
                  ]}
                />
              </Stack>
            )}

            {step === 'details' && (
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Typography variant="h6">Your details</Typography>
                <TextField
                  label="Name"
                  required
                  fullWidth
                  value={answers.fullName}
                  onChange={(e) => set('fullName', e.target.value)}
                  error={Boolean(error)}
                  helperText={error ?? ' '}
                />
                <TextField
                  label="Label (optional)"
                  fullWidth
                  value={answers.workspace}
                  onChange={(e) => set('workspace', e.target.value)}
                />
              </Stack>
            )}

            {step === 'invite' && (
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Typography variant="h6">Extra step</Typography>
                <TextField
                  label="Entries"
                  required
                  fullWidth
                  multiline
                  minRows={2}
                  placeholder="one per line"
                  value={answers.invites}
                  onChange={(e) => set('invites', e.target.value)}
                  error={Boolean(error)}
                  helperText={error ?? 'Separate multiple invites with a new line.'}
                />
              </Stack>
            )}

            {step === 'review' && (
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Typography variant="h6">Review</Typography>
                <Descriptions
                  divided
                  items={[
                    { label: 'Option', value: answers.plan === 'team' ? 'Option B' : 'Option A' },
                    { label: 'Name', value: answers.fullName || '—' },
                    { label: 'Label', value: answers.workspace || '—' },
                    ...(answers.plan === 'team'
                      ? [{ label: 'Entries', value: answers.invites || '—', full: true }]
                      : []),
                  ]}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={answers.agree}
                      onChange={(e) => set('agree', e.target.checked)}
                    />
                  }
                  label="I confirm the details above"
                />
                {error && (
                  <Typography variant="caption" color="error">
                    {error}
                  </Typography>
                )}
              </Stack>
            )}

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={goBack} disabled={index === 0}>
                Back
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              <Button variant="contained" onClick={goNext}>
                {step === 'review' ? 'Finish' : 'Next'}
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </ExampleFrame>
  );
}

export default WizardBranchingExample;
