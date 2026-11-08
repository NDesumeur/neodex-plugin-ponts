# Ponts (Bridges)

A logic puzzle: connect all the islands of an archipelago with straight bridges. The number on each island says how many bridges leave it. Each archipelago is created at random and always has a solution.

*Version française : [README.md](README.md)*

## Rules

- A bridge links two neighbouring islands in a straight line, horizontally or vertically.
- Between two islands there can be **one or two bridges**, no more.
- Bridges never cross and never pass over an island.
- Each island must have exactly its number of bridges.
- In the end, all the islands must form **a single archipelago**: you must be able to get from any island to any other.

Any solution that follows these rules is accepted, even if it differs from the intended one.

## Controls

- **Drag** from an island to its neighbour: one bridge. Again: two bridges. Once more: none.
- **Backspace**: undo the last move.
- An island turns **green** when it has exactly its number of bridges, **red** when it has too many.
- Once the archipelago is connected, a click starts a new one.

## Sizes

**Archipelago** 7 × 7 or 9 × 9. The number of islands and the timer are shown at the top.

## Statistics

Best time for each size and number of archipelagos connected.

## Data and sync

Your time records, the number of archipelagos connected and the chosen size are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Ponts → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
