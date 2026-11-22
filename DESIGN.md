---
name: DVDB Signal Console
description: A dark technical portfolio system for Duuk van den Bosch.
colors:
  ink: "#11120f"
  paper: "#f1f2e9"
  acid-lime: "#c6ff3d"
  signal-red: "#e8452c"
  muted: "#92968b"
  line: "#373b32"
typography:
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(4.3rem, 8vw, 8rem)"
    fontWeight: 600
    lineHeight: 0.78
    letterSpacing: "-0.095em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.1em"
    lineHeight: 1.35
rounded:
  none: "0"
spacing:
  rail: "184px"
  section: "90px 6vw 110px"
  mobile-section: "60px 20px 80px"
components:
  signal-action:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0"
  project-signal:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "21px 0"
---

# Design System: DVDB Signal Console

## Overview

**Creative North Star: "The Signal Console"**

This portfolio behaves like a working instrument for inspecting software work. Near-black space, etched rules, readouts, and signal traces create a technical environment, while oversized off-white and acid-lime type keeps the human author unmistakable. The interface is editorial in its pacing and brutalist in its scale, but every technical metaphor remains connected to a real project, repository, decision, or contact route.

The system uses flat tonal layers rather than decorative glow or glass. Motion is reserved for one authored moment: the activity signal rises into view and represents public repository activity when available. On narrow screens, the vertical console rail becomes a horizontal channel bar and the page keeps its continuous reading order.

**Key Characteristics:**

- Instrument-like navigation and data readouts.
- Oversized display type with compact mono labels.
- Acid lime as an active signal, not a general wash.
- Hard rectangular surfaces and etched dividers.
- Public evidence paired with plain-language context.

## Colors

The palette is a low-light technical field with one active signal and one restrained alert color.

### Primary

- **Acid Lime** (#c6ff3d): Active navigation, live state, signal traces, and emphasis.
- **Signal Red** (#e8452c): Reserved for future warning or exception states; it should not compete with the active lime.

### Neutral

- **Instrument Ink** (#11120f): Global background and primary field.
- **Paper White** (#f1f2e9): Primary text and high-contrast foreground.
- **Muted Readout** (#92968b): Secondary labels and metadata.
- **Etched Line** (#373b32): Borders, dividers, and measurement structure.

**The Active Signal Rule.** Lime means active, selected, live, or actionable. Do not scatter it as decoration.

## Typography

**Display Font:** IBM Plex Sans (with sans-serif)
**Body Font:** IBM Plex Sans (with sans-serif)
**Label/Mono Font:** DM Mono (monospace)

The display and body face bring a more authored, editorial-technical voice, while DM Mono makes measurements, channel labels, dates, and system states feel instrumented. Display type is tight and oversized; body copy stays calm and readable.

### Hierarchy

- **Display** (600, `clamp(5.5rem, 13vw, 12.5rem)`, 0.78): Hero thesis and major channel statements.
- **Headline** (600, `clamp(4.3rem, 8vw, 8rem)`, 0.78): Section-level statements.
- **Title** (500, `clamp(1.6rem, 3vw, 2.8rem)`, normal): Project signal names and journal entries.
- **Body** (400, 15–16px, 1.45–1.5): Explanatory copy, with short measures beside large display type.
- **Label** (400, 10–12px, 0.1em, uppercase): Channels, dates, states, and metadata.

**The Two-Voice Rule.** Use IBM Plex Sans for what Duuk says; use DM Mono for what the system measures.

## Layout

Desktop uses a persistent 184px rail beside a fluid content field. The first viewport is a two-column instrument: identity and thesis on the left, activity trace on the right. Subsequent channels use asymmetric text-and-evidence grids, full-width signal rows, and generous vertical separation. At 900px and below, the rail becomes a sticky horizontal navigation bar, grids collapse to one column, and project metadata moves beneath each title.

## Elevation & Depth

The system is flat-by-default. Depth comes from tonal separation between the ink field and instrument panels, 1px etched borders, and the movement of the signal trace. There are no decorative shadows or glow halos. The activity panel is a bordered surface; the lime signal is the visual lift.

## Shapes

Surfaces are rectangular with no corner radius. Borders are full-width and structural rather than ornamental. Active marks use small squares or dots. Buttons are text-and-line actions, not pills. The contact channel is a full-bleed color field that changes the surface tone without adding a card shell.

## Components

### Buttons

- **Shape:** Text-first, rectangular, no radius (0).
- **Primary:** Paper text with an acid-lime rule and a drawn arrow; no filled button shell.
- **Hover / Focus:** Lime becomes the active text/rule color; focus uses a 2px lime outline with a 5px offset.

### Cards / Containers

- **Corner Style:** Square corners (0).
- **Background:** Instrument Ink or a subtle raised ink panel.
- **Shadow Strategy:** No shadows; depth is tonal and border-based.
- **Border:** 1px Etched Line.
- **Internal Padding:** 20px for instrument panels; 21px vertical rhythm for signal rows.

### Navigation

The desktop navigation is a sticky left console rail with channel labels, numeric codes, live status, and coordinates. Active channels gain a lime top rule and lime code. On mobile it becomes a sticky horizontal bar with the same label/code vocabulary and native horizontal scrolling.

### Signal Rows

Projects and journal entries are full-width rows rather than cards. A numbered channel, large title, metadata, and explicit Inspect/Read state make each row scannable. Opening a row reveals plain-language content and a concrete repository or journal context.

## Do's and Don'ts

### Do:

- **Do** use acid lime only for active signals, selected navigation, and clear actions.
- **Do** pair public repository data with human explanation and honest fallback states.
- **Do** let typography and rules create hierarchy before adding decoration.
- **Do** preserve the rail-to-horizontal-nav responsive transformation.
- **Do** keep technical metaphors accessible through visible labels and semantic controls.

### Don't:

- **Don't** add gradients, glassmorphism, generic glowing borders, or rounded card grids.
- **Don't** turn activity counts into unsupported performance claims.
- **Don't** hide project links or journal content behind spatial effects.
- **Don't** use mono type as decoration outside labels, data, dates, and system states.
- **Don't** replace confidential experience details with invented specifics.
