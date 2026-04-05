import { siteConfig } from "./site";

export type Project = {
  type: "image" | "video";
  title: string;
  date: string;
  href?: string;
  src: string;
  alt: string;
  ratio: number;
  placeholder: string;
};

export const projects: Project[] = [
  {
    type: "image",
    title: "Spell UI",
    date: "2026",
    href: siteConfig.links.spell,
    src: `${siteConfig.cdn}/spell-cropped.png`,
    alt: "Spell UI",
    ratio: 2179 / 1346,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfElEQVR4nKWVbUxbVRjHL3C5fbvtbUvX0hbKSy0IFIMLhPI6kJciohhfCGBcjESDxvnBLyb60W9+MMZvRs0yiTLxoyZmGgwwaqECw26lyHgd6IAEhhtrQHb8m3PY7QqBIfjhl/P2nPP8z/Pc51zO9/sAGZrxkcCcn4zODZEr8wHy2+IIubo0RkJ/jJPQn0ESXg6SyZUgmV4JkenVEJlbnSDzqxPkxlqYLDImydK63A+zebpO7eZWQ2R2JURmlkNkejlIpm4GSZieuzhGri2MEO7aQh8mli5jemUINzfGsXIniNXNENYiIaxHJnFraxJ/bV/H7Z1pbN6bRYTMYpvM42/MYwfzIIwF/BPTp/M7hDKLrXsziNB9OzO4uzWFO5FJbEQmcOtuCGu3g+BuLF3C8nIvpq5/jx8ufYqfej/Dz33n0d9/AQOXu+Ab7IJvoAs+Xzdj2H8RAX83Roe+wZXhHowHLmI80LOHMcpwD7MZGdq1D/i6ERj8Cv7BLvzSfwG+vvMY6P0c3MrM19hZ+w49X76P04+fRm5uDqxWKwwGA/SSBKNBD4vFDL1eQpLRCEnSsbGk00KlUkKtUh2B8kBEjRoW8ylw6/4PgMmP8O3Hr0IjapkDtVoNhULJUCqVUKlVUCgUUCh351QqFQRBAM/zbF6ga/cRBIrAkOcOQ6PRgPvxk7fx6xfv4sO3ngPHcexQ+YCD2HXyoI2Li0NCQgLi4+Oj/dix3MrE2tGWO/Pi6/C+fA55ZTXgExIe6jxWBBVbUFCA9vZ2NDc3o7q6OkpZWRlbo/3y8nLU1NSgoqICVVVV8Hq9qKysZGu05erOnsOTr72D/DPeYwmgN0lOTmYH5efno6GhAW1tbdHDS0pKmLj6+nq0tLSgrq6OCaVjupaTkwO32w0u64kX4H76FThLa8Hz/02ATDSMHIfs7GzmiNLZ2clElJaWsnFHRweamprQ2tqKxsZGWCwWtofu5+xFNTAVVEGXnofEI/J/UCToR6rX6xk6nY5BHdCxWq1BksnExhqNCK1OB61WG7VlqSx69iXk1D4PgzP/2BGQoQcajUY4HA5WwmazGTabDZmZGUhz2JGaYoXdlozM9FSkpqZGBdC9nM6RBYu7GPo015EV8LBUUGj5UsdpaWlMiFojQiU5GEp9OkS9HQrFA3smQLSmQbRlQJ1kgSAknkgAfRdoTmnew+EwgldDGB/1w/PMe3j07AZy39hE3pvbcLXPQRDtSOS5aBlzvGiAwnAKvCidyHlsFOjr6fEUw+PxoLioEFJSCniLB4K1lJFoKYSg0Oy5KMdrDdBa7DBa7SdOQawIGgkZPiEefDyHxLhdaH9/lLncknIUVHvhLq04dhUcVhUy8nMu3If19+3h3OXVKKx9Cs7HCv+3gIMEybmO/VgpcrS5R4rKkVVUAasz+0QfIT3osNTtFyCKYhT6I2ICzK4cWFx5MNpSjhUB6pR+/bSmJUna42i/AGpLU+J0OuFyuRi0zx4inS0VBkcGJDMtw+PdnN7EZDIxqIPjpEB+B/4F6/T1lMWhbm8AAAAASUVORK5CYII=",
  },
  {
    type: "video",
    title: "Blur Reveal",
    date: "2025",
    href: "https://spell.sh/docs/blur-reveal",
    src: `${siteConfig.cdn}/blur-reveal.mp4`,
    alt: "Blur Reveal",
    ratio: 1582 / 630,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAIAAABHKvtLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGOQpTFgGLVg8AaRBhgICQnRyoJJkya9ffu2ubk5Ojra19dXQ0ODyhY4OjqWlZVlZGT4+vo6OjpS3wJZWVkhMCDPXKIsoApgGLVAlkAQAQDo65chciUDBAAAAABJRU5ErkJggg==",
  },
  {
    type: "video",
    title: "Early Access",
    date: "2025",
    href: "https://x.com/tomm_ui/status/1994155465488670828",
    src: `${siteConfig.cdn}/early-access.mp4`,
    alt: "Early Access",
    ratio: 1752 / 1080,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAIAAABj86gYAAAACXBIWXMAAAPoAAAD6AG1e1JrAAACHklEQVR4nK2VQYvaQBSAHxNmUDLDdGaYJAaDRAS3KxIUWguta9pCsG6lIHjx4raHnq0lp+0lh1KP/qQWevAnLP0zFpPtdretcan5zm/eNy/vvQnAESCEMMaEEEop51wpZVmW67oPT04+XV5ut9vNZgNHCgzDuBEIIYIgGI/Hs9nsx9XV96/fVp+//A79D4xfEEIwxpTSTqfTarV83x+NRh8/LN+/fXfnLkeCEMpSAQBj7PzV+ZvX42uBURA4BSHEGHvyuPfy+QuoVqtCCIxxUQ4jLcU0zSAIBk/70Gw2q9UqIaRYQblcbrVaZ8/6EASB7/v3FKC7vc0XnJ6ehv0zGAwGk8lESnmwEwBgWZbjOAcjEUKlrIJ+HxaLRZIkSikAyOkEIYQx5qZQSvMr3glKpXq9vpuiJEnm8znnPOdeCCHOueM4SikhhFKKc57zrTLBZDJZr9ewXC7jONZa51SA0rGTUlYqFcdxpJSMsX0CjDEAaK3jOL6YX8BqtYqi6OCYov1r/DcAwDkPwzAchFCr1SzLMk2zkGW+vQePUiAMwyiKKKWFC3zf3w1nr9fzPK/YRTPSThBCdsNZqVS01oULDMPQWjebTZBSZg3If5CNe5DFZ+8dpbRer7fb7evX9Z8/kz8E2Umyh1KpZJom51xKadu253mNRqPb7eYlvUmXHaaUshTO+YNbCCGklFpr27Zd1/U8z/f9TqczHA6n0+lPiS9bjk9fR1UAAAAASUVORK5CYII=",
  },
  {
    type: "video",
    title: "Spell UI Launch",
    date: "2026",
    href: siteConfig.links.spell,
    src: `${siteConfig.cdn}/spellui-launch.mp4`,
    alt: "Spell UI Launch",
    ratio: 2350 / 1318,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAIAAAC1qksFAAAACXBIWXMAAAAAAAAAAAHqZRakAAAARUlEQVR4nGOYT2PAMGoBITAaRCM2iDzBAM5VVlY+d+4cmiClFigrKxeBAUgRA8O5c+eUwYA6FlARMIxaQAiMBtF8QkEEAEi2JNIB3sA2AAAAAElFTkSuQmCC",
  },
  {
    type: "video",
    title: "Music Cards",
    date: "2025",
    src: `${siteConfig.cdn}/music-cards.mp4`,
    alt: "Music Cards",
    ratio: 1394 / 784,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nMWUX2wUVRTGpxG6MztzZ7aM221pd1vqNpY1QMBFRJeGCnRhU2la2YKpmo2t1CYq2ARMU0pD21BFMEC2gDRSsJjyQlA0RPnXJqVKiLV90ISEaEkMRoPy5t/E/MzMtrilUOCB7MOXe++599zz5d7zfZKu62ialhIYhoGUquIWhBCpJWBBmoqdhVvnD5yAoig3oaqqPTocDmRZRlUVhLgN2Xt87rsSUBQFrzeX/Lw8vF4v2dnZ+Hw+igIBCvyF9lpVZDQtcZlF0GmNY7lWTBcWIdWO3SSmqvbZu7+AqjCrsIiKiipejlbxYmWUp55egt9fwCM5Jr6cWTjVGXYBu5hhYFjdLASm220XmuZwkm4VVxScmsBpfZ+RgUs3bktCGp9YmxmGzuPPrCbQ8AH+g4P4dp2g8lA/P1/+muMb1/PJ4Rjx98uQjPmUhebQ0tpMV3sr34YX0FRdzYYNG2l4rYFI43vUNW2hOBhEVWXCu2NcuPIlXZ2dSGlp6LqYTMCpCTyqgye3xJl39lfW9F0lcOwaoTN/cXlkiIttW/lztIvRX86zrKad9oZXOXxkP5/1HoWXlhGvjbGtYwfry1Zz8fwVmj7spXfvR9SUllN7oJTrf//E0OAlJEki2XukCQQc01m68yix/lE2XfqN7T/8zubv/+GbM0P80RZmsLuG8NpNBMujHHy3lbpYlOI5Af6tfZb++C62dbzDC8Ul7KvfzVs7j3HyxCBzi4KYjfV82nea4YG+KQgIQWb6Q/i37mF2zzUCPddZNAwtwze4Aby9so7y+fN4dEGQuaGFNL9eTWT5YhbmZkFNhIH4Hto6dvBGpIKSVU3s/3yEtZXrkNIkjPpX+OrHq3w3MnJnAtpY16a7MigMLaez5zjdJ89y6vQ5Pj71BarmJt0hU7K0mPq6KpYsfoKcPB+hglwGng+zr6WZyIpS8rPymf7YSmrfbKTiuahdUNMyONTdRcf2VrsHkiUpTexKYctshlDx5WSRN9NjSy/T7UYfk57l3y6XC8PQ0URCAVkunUzTtPd0oSOEgWk+jMswbHkK3cDj8WCa5iQlSJO0KYStYVlWkJUEkpOs+YS15QFqIv7/PYkzybFxY7snKxZj1puMKV3OxsQzt+bc6R7pQfj7/UAaf6pUQbIaJ5X4D8MQL3NqbZQAAAAAAElFTkSuQmCC",
  },
  {
    type: "image",
    title: "Spell UI Docs",
    date: "2026",
    href: "https://spell.sh/docs",
    src: `${siteConfig.cdn}/spell-docs.png`,
    alt: "Spell Docs",
    ratio: 5088 / 3346,
    placeholder:
      "data:image/png;base64,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",
  },
  {
    type: "image",
    title: "Emojicord",
    date: "2024",
    src: `${siteConfig.cdn}/emojicord-landing.png`,
    alt: "Emojicord",
    ratio: 2486 / 1603,
    placeholder:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7ElEQVR4nK1V7U9bVRi/bW/b+9J7e29voXSlt4xSXtoChQkMCgsttCWsKKAuxJnMxEX94ExMTPxiTPSb8U/wT/CDMX5xMUs2dcmyObIxXpbpxkQ2YAHGGJAtzP3MOX3hFlzAxQ+/nOc+57nP+Z3n/M55mOuzP+PGnxcxff8ybi78hj+WrmJ26RpmVyYwtzqJ+YdTuP9wCotr01ham8aD9RmsrN/CyuM8iL1+C8vrMzRmIR9/b3USf61M4O7SNdxZHMfvJP/cJUzdvYiJ2+dx9eY5XJ46C+bO/E+YX7yA+fkf8WD5PB5tXsXG5ji2tsaxtXkFT55cx/azKeD5NPB8phQg4808ZoBn08D2FLA9ib+fXsf21jieblzB1tolPF79FWvLF7C8cA4Lc2cxf+cH3J75Dsyje99i9sY3+Pyrr3HqgzPIpI4iO5jE0GAv3hzNYHQ4hVRfHJn+OAZSXRSDBP2dRRT8AySmn8R2ItPXhYFkBzLJdqQT7Uj3tiJ57AiSPa0UvfEYjWM2fvkCs99/jNauDKSKephNFrAsD5tNhCAq4DgJJpOtBIwBu+eKMYwVjIng3+OJbeckMF9+8iE+O/MeVFmClbXC4XBScBwPlrXCbufA8yI4O099PC+A4wTqy9k8eEGEnczbeTqSOVlW8nC+EJIkg+k++RHaR96BrGgQBAcEQaYJYrEWdHQcRXNzC8LhKKLRJrS0tNLvuroG1NcThNHcHEMoVEvnGhtjaG1to/FkEyRPLueLwTQeP4nmwTFKgPwgijLdYV9fCqdPn8aJEycwMvI6MpkMxsbewvDwCIaGXkVbWwfi8WNIJvspuf7+NDo7u5FOD6CqKrjvwkUCgXgW7kg3REmBIIjFCkSjjXTxeLwbiUQCQ0OvYXT0DQwOZpHNDsHjqYDJZKbHZLNxMJtZWCxWmM0W+n1gAuHEcejtCYiOAgEHLZ/X6yvahWBikwoZ7d1jAQcmIHqr4dRrIe5ayO2uKEm4N+n+53sgAnalDFbFDV6QSiYKpWVZGwWxDyKqlyDghnooAIfkhGBYgCg5EmlELLajfKdT/d9JMI09CcR603CquVtQmKiurkEwGKILNzREEAgc3vdqvQw5JtKdRMPRY5BkpSQBKfnOEZDjsO+7gM/nh6pq/02Evsgr8IYiJbeAwCg+UnpFcdGXTZKcxVfOaJOXTVFUyLJq8OViyOb2+CgUME5fAEqlDtFRKkIjEXIldb2a3gxNK4PbXZ4fPdA0T9Gm3+5yuLW8nfeXGecNNgGj+KsgVXgh7Cpb6dUjvUCE4lYQqNFRFQjC4zkEt0tGKOhDIBBEZaUOWVJQoR2CXw/A7w9Q3ciKC46qJvj1auh6FYXDsFmG0zwQyjwl7wDHi2BZjjYWo8BomVXDUUgSVIXYudISkaqyCxJtNjs+0VlWcjRGjTAWhwwraUR5J+kD3nIN4YY6ynan84nULoB0QgsrwWQm/+T+y1WOkJUMcSLtshYLW+IrgDFxPCyiTB8i2ohsLNS29xHq+xS6379HQAREbIKoIdthw7spOzSVCE2lyRmGpUSIcAlIzmj0CBKJDFwu9y7hKiTeCob0fPoSkkYkwBFMoyzYQxuOz6eXgAiypqYWDZFW9DQ5kO3S4Pfr8Hh8iHf14NTbY2hpaUN5uRehUB0ikSaEw01ob+9GZWVgT75/AFyf6m5/O6CCAAAAAElFTkSuQmCC",
  },
];
