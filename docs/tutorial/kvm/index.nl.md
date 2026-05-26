
# CRITIEK: Uitvoerformat

**Je UITVOER MOET direct beginnen met de YAML voorafzetter (---) en bevatten ECHT DEZE GEBRUIKTEN MARKDOWN-tekst.**

DOORVOERDE:
- **Merkenamen**: Openterface, TechxArtisan, Crowd Supply, Mini-KVM, uConsole
- **Technische termen**: KVM, USB, HDMI, VGA, Type-C, plug-and-play, headless, beta
- **Platformen**: Windows, macOS, Linux, Android, iOS
- **Diensten**: GitHub, Discord, Reddit, YouTube, Twitter/X
- **URLs, bestanden, code, commando's** - NOOIT vertalen

### Altijd vertalen

- Gebruikersgerichte tekst, beschrijvingen, instructies
- Navigatieelementen, knoppen, CTAs (A/B-knoppen)
- Productbeschrijvingen en marketingkopie

## Kwaliteitsnormen

- **Precisie**: Houd de technische betekenis bij
- **Consistentie**: Gebruik dezelfde termen overal
- **Natuurlijke stroomlijning**: Voorkom letterlijk vertalingen
- **Behoud van formatuur**: Behoud alle markdownstructuur, links en codeblokken

## MkDocs Material Grid Cards Format

### CRITIEK: Grid Cards MOETEN volgen vanzelfsprekende formatuur

**Verplichte formatuur voor grid cards:**

```markdown
-   :material-icon:{ .lg } **Titel**

    ***

    Inhoudstekst hier.
**Belangrijke vereisten:**

- **Lijstitem**: `-   ` (teken + precies 3 ruimtes)
- **Titel**: `__Titel__` (dubbele underscores, NIET asteriskjes)
- **Scheidingslijn**: `---` (3 strepen, NIET asteriskjes)
- **Inhoudsindentatie**: 4 ruimtes
- **Afbeeldingindentatie**: 4 ruimtes

**Waarom dit belangrijk is:**
MkDocs Material's grid cards-renderer is zeer gevoelig voor formatuur. Enige afwijking breekt de gehele gridlay-out en veroorzaakt weergavefouten over alle talen.

## Gewone valkuilen

- **Vertaal nooit technische acroniemen** (KVM, USB)
- **Verander geen URLs of bestanden**
- **Breuk geen markdown-formatuur**
- **NOOIT veranderen van grid card formatuur** - gebruik exact de Engelse basisformatuur
- **Gebruik consistente terminologie over alle inhoud

## Broninhoud om te vertalen

```markdown
# KVM-software-tutorial

> Volledige KVM-over-USB: toetsenbord, beeldscherm en muisbeheer in één apparaat.

Deze tutorial behandelt de **Openterface KVM-serie** - apparaten die het doelwit's HDMI-beelduitvoer opvatten en de toetsenbord/muisinput via HID-imitatie overdragen:

- **Mini-KVM** — Compacte USB-KVM-adapter
- **KVM-Go** — Mobiele KVM in een toolkit-formaat
- **uConsole KVM-uitbreiding** — Ingebouwde KVM voor de uConsole

> **Platformen:** macOS, Windows, Linux (desktop-apps), **Android** (mobiele app) en **iPadOS** (tablet-app).
> Android-specifieke en iPadOS-specifieke opmerkingen zijn overal gemarkeerd.
> **Opmerking:** iPadOS wordt **alleen ondersteund door KVM-Go** — de iPadOS-app verbindt via Bluetooth LE met het KVM-Go-dongle.

> Zoek je naar **KeyMod** (toetsenbord & muis-imitator alleen)? Zie dan [de KeyMod-tutorial](../keymod/index.md).

---

## Tutorialserie

| # | Titel | Doelgroep |
|---|-------|----------|
| [01 — Beginnend] | Installatie, hardwareconfiguratie, eerste lancering | Beginners |
| [02 — Basisoperaties] | Muis, toetsenbord, beeldscherm, audio, opname | Iedereen |
| [03 — Geavanceerde functies] | EDID, firmware, macros, scripts, diagnose | Intermediair tot Expert |
| [04 — Oplossingen voor problemen] | Gemene problemen en oplossingen | Iedereen |

## Snelle start

1. **Nieuwe gebruiker?** Begin met [Beginnend](01-getting-started.md) om te installeren en uw apparaat aan te sluiten
2. **Klaar voor gebruik?** Lees [Basisoperaties](02-basic-operations.md) voor muis, toetsenbord en beeldscherm
3. **Problemen ervaring?** Sprong naar [Oplossingen voor problemen](04-troubleshooting.md) voor algemene problemen

## Snelle links

- [App-overzicht](/app/overview.md) — Download- en installatiehandleiding
- [Mini-KVM-productpagina](/product/minikvm/)
- [KVM-Go-productpagina](/product/kvm-go/)
- [uConsole KVM-uitbreidingsproductpagina](/product/uconsole-kvm-extension/)
- [iPadOS-app](/app/ipados/) — Download- en installatiehandleiding
- [Discord](https://discord.gg/sFTJD6a3R8) — Gemeenschapssteun
