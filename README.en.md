# Ponts (Bridges)

A logic puzzle: connect all the islands of an archipelago with straight bridges. The number on each island says how many bridges leave it. Each archipelago is created at random and always has a solution.

*Version française : [README.md](README.md)*

## Daily archipelago and forced bridge (new in 1.2.0)

**Daily archipelago**: one 9 × 9 archipelago, the same for everyone each day, with a day streak. **Hint**: it looks for a forced bridge and explains it (“this island still needs 3 bridges, and its other neighbours can only take 2: one bridge to the yellow island is forced”), with both islands circled; a second click places the bridge. An island with too many bridges is pointed out first.

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

Four archipelagos: **7 × 7** (about a dozen islands), **9 × 9**, **11 × 11** and **13 × 13** (up to about forty islands). The cells shrink with the size so the whole archipelago fits. Each size keeps its own record.

## Full screen

The **Full screen** button fills the whole screen with the archipelago (Escape to leave). Otherwise the game takes all the height the window leaves.

## Statistics

Best time for each size and number of archipelagos connected.

## Data and sync

Your time records, the number of archipelagos connected and the chosen size are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Ponts → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
