# ADR-001 — Build ScamGuard Core before adding more pages

## Decision

ScamGuard will be structured around Core modules rather than isolated pages.

## Reason

The app is a control panel for a background protection service. Calls, Protection, Family and Reports should own their own data and behaviors. Dashboard should summarize those engines.

## Consequence

Future modules should read from mock APIs first, then real APIs later.
