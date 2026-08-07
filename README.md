# 3G Decorative Group — Design Only (Static Client Demo)



This folder is a **static copy of the public website** for client demos.  

**No real API / OTP / database.** Includes a **fake admin UI** so clients can walk through login → dashboard → side menu.



## Important



- Dynamic site (with real admin): `frontend` → usually `http://localhost:5173`

- **This design-only demo**: → **`http://localhost:5174`**



## Run



```bash

cd design-only

npm i

npm run dev

```



Open: **http://localhost:5174/**



## Pages



| URL | Page |

|-----|------|

| `/` | Home |

| `/about` | About |

| `/services` | Services |

| `/projects` | Projects |

| `/projects/corporate` | Corporate list |

| `/projects/civil` | Civil list |

| `/contact` | Contact (static form) |

| `/privacy-policy` | Privacy |

| `/admin/login` | Admin login (demo) |

| `/admin` | Dashboard + side menu (demo data) |



Footer → **Admin Login** → Sign In → dashboard (sample cards, enquiries, menu pages).



## Build

```bash
npm run build
```

## Hostinger upload (`public_html/3gdeco/tmp_2/`)

Upload **everything inside** `design-only/dist/` into that folder (replace old `index.html`, `assets/`, `.htaccess`).

Production base path is `/3gdeco/tmp_2/`. Local `npm run dev` still uses `/`.

