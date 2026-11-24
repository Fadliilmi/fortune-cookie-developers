# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Fadliilmi/fortune-cookie-developers/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Fadliilmi/fortune-cookie-developers/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

An entry for the [Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) bounty on make.fun. The program writes one original fortune-cookie line for a software developer to `/output/entry.txt`.

> The legacy code you inherit was once somebody's Friday afternoon.

## How to run

Requires Node 22.18 or later (Node 22 runs TypeScript directly):

```sh
node main.ts
cat /output/entry.txt
```

The program checks that the line is a single line of 1–120 characters, creates `/output` if needed, writes the line to `/output/entry.txt`, and logs the character count. It makes no network calls at runtime.
