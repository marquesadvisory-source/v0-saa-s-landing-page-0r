# IndexNow publishing

IndexNow submissions are manual and must happen only after deployment. First verify that
`https://marquescr.com/b043c632c05c4782af7e77211a9b6d12.txt` returns HTTP 200 with the
exact key as plain UTF-8 text. A successful IndexNow response means the URLs were accepted
for processing; it does not guarantee indexing.

Submit only explicitly selected public URLs. The initial post-deployment batch is:

```powershell
node lib/submit-indexnow.mjs `
  https://marquescr.com/ `
  https://marquescr.com/real-estate `
  https://marquescr.com/investments `
  https://marquescr.com/projects `
  https://marquescr.com/capital-partners `
  https://marquescr.com/investment-framework `
  https://marquescr.com/residency `
  https://marquescr.com/residency/real-estate
```

The script validates the HTTPS host, removes duplicate URLs, sends one official bulk JSON
batch, and accepts HTTP 200 only. It does not crawl the sitemap. Do not run this command
before the deployed key verification file is reachable.

## Future property publishing workflow

When a future Supabase/CMS publishing workflow is implemented, trigger IndexNow only when
an approved **public** property is created, materially updated, or deleted/unpublished, using
its public URL such as `/real-estate/{slug}`. Private, confidential, draft, closed, or
unapproved records must never be submitted. This repository does not automatically connect
IndexNow to its current local publishing or request flow.
