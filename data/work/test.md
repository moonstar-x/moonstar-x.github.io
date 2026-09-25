---
name: Test
description: Testing
cover: /assets/work/continuum/cover.jpg
date: 2023-09-15T12:00:00+0000
technologies:
  - nodejs
  - javascript
  - typescript
status: completed
type: art
---

# Heading one

The first paragraph after a heading is a lead: one size up, and it carries the weight of the section.

## Heading two

Body text runs at 17px over a 720px measure, which lands at roughly 68 characters a line. Inline styles stay quiet so they read as emphasis rather than decoration: **bold for the thing that matters**, *italic for a term being introduced*, ~~strikethrough for a correction left visible~~, and `inline_code()` for anything you would type. A [link looks like this](https://moonstar-x.dev) — underlined in the accent, never a different colour of text.

Keyboard shortcuts render as keys: press <kbd>⌘</kbd> <kbd>K</kbd> to search. Footnotes sit as a superscript[^1] and collect at the end of the article.

### Heading three

#### Heading four

## Lists

- Sources are normalized on ingest
- Duplicates collapse to one node
    - Nested items step down a size
    - Two levels is the limit
- Everything else is derived

1. Pull the source datasets
2. Normalize and deduplicate
3. Load into the graph

- [ ] Write the ingest tests
- [x] Model the peptide graph

## Quotes and callouts

> A non-redundant database is a promise about what you will not find twice — and that promise is the entire engineering problem.
>
> — Attribution, if there is one

> [!NOTE]
> Callouts use the GitHub alert syntax and come in two kinds only. More kinds than that and readers stop seeing them.

> [!WARNING]
> For the thing that will cost the reader an afternoon if they skip it.

## Code

```ts title="ingest/normalize.ts"
// one peptide may arrive from several sources
export const dedupe = (rows: Row[]): Peptide[] => {
  const seen = new Map<string, Peptide>();
  for (const row of rows) {
    const key = canonical(row.sequence);
    seen.set(key, merge(seen.get(key), row));
  }
  return [...seen.values()];
};
```

## Tables

| Source          | Format | Records |
| --------------- | ------ | ------: |
| [Source one]    | FASTA  | [0,000] |
| [Source two]    | CSV    | [0,000] |
| [Source three]  | JSON   | [0,000] |
| **After deduplication** | **Neo4j** | **45,000+** |

## Images

![Search interface of the peptide database](/work/starpep-web/search.png)
*Captions sit left under the image, one size down. Alt text is required and is not the caption.*

![First of a paired image](/work/starpep-web/detail-a.png)
![Second of a paired image](/work/starpep-web/detail-b.png)

## Video

::video[/work/starpep-web/walkthrough.mp4]{poster="/work/starpep-web/poster.jpg"}

*Video sits in the same 16:9 frame as images, never autoplays with sound, and always has a poster frame.*

## Dividers

A horizontal rule marks a change of subject inside a section — three dots, not a line, so it doesn't compete with the rule under an H2.

---

[^1]: Footnotes collect at the foot of the article, numbered in order of appearance, each linking back to where it was cited.