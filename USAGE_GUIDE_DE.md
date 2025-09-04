# Benutzerhandbuch - Bahram Autohaus

## 📋 Inhaltsverzeichnis
- [Projektübersicht](#projektübersicht)
- [Sprache wechseln](#sprache-wechseln)
- [Fahrzeugverwaltung](#fahrzeugverwaltung)
- [Übersetzungsverwaltung](#übersetzungsverwaltung)
- [Admin-Panel](#admin-panel)
- [Excel-Dateien Anleitung](#excel-dateien-anleitung)
- [Häufige Probleme](#häufige-probleme)

## 🚗 Projektübersicht

Bahram Autohaus ist eine moderne, zweisprachige (Deutsch/Persisch) Autohändler-Website, die mit Next.js 14 erstellt wurde. Die Anwendung verfügt über ein responsives Design, Excel-basiertes Content-Management und umfassende Fahrzeugpräsentationsfunktionen.

### Hauptfunktionen
- 🌐 **Zweisprachige Unterstützung**: Deutsche und persische Sprachen
- 📊 **Excel-basiertes CMS**: Inhalte über Excel-Dateien verwalten
- 🚗 **Fahrzeugpräsentation**: Dynamische Fahrzeuglisten mit Filterung
- 📱 **Responsives Design**: Mobile-First-Ansatz
- 🎨 **Moderne UI**: Glassmorphism-Design mit Animationen
- ⚡ **Leistung**: Optimiert mit Next.js 14

## 🌐 Sprache wechseln

### Sprache auf der Website ändern

1. **Auf Desktop**: Klicken Sie auf die Buttons "DE" oder "FA" oben auf der Seite
2. **Auf Mobile**: Öffnen Sie das Mobile-Menü und wählen Sie "Deutsch" oder "فارسی"

### Unterstützte Sprachen
- **Deutsch (DE)** - Standardsprache
- **Persisch (FA)** - RTL-Unterstützung

### Funktionsweise
- Sprachwechsel ist sofort und erfordert kein Neuladen der Seite
- Alle Texte, Menüs und Inhalte werden in der gewählten Sprache angezeigt
- Spracheinstellungen werden im Browser gespeichert

## 🚗 Fahrzeugverwaltung

### Neues Fahrzeug hinzufügen

1. **Excel-Datei öffnen**: `/public/excel/cars.xlsx`
2. **Neue Zeile hinzufügen** mit folgenden Spalten:

| Spalte | Typ | Beschreibung | Beispiel |
|--------|-----|--------------|----------|
| brand | Text | Fahrzeughersteller | BMW |
| model | Text | Fahrzeugmodell | X5 |
| year | Zahl | Baujahr | 2023 |
| price | Text | Preis mit Währung | 45.000 € |
| mileage | Zahl | Gefahrene Kilometer | 25000 |
| fuel | Text | Kraftstoffart | Benzin |
| transmission | Text | Getriebeart | Automatik |
| category | Text | Fahrzeugkategorie | suv |
| image | Text | Bilddateiname | bmw-x5.jpg |
| description | Text | Fahrzeugbeschreibung | Premium SUV... |

3. **Datei speichern**
4. **Daten aktualisieren** über das Admin-Panel

### Fahrzeugkategorien
- `limousine` - Limousinen
- `suv` - SUV-Fahrzeuge
- `sportwagen` - Sportwagen
- `kombi` - Kombis

### Vorhandenes Fahrzeug bearbeiten
1. Excel-Datei öffnen
2. Zeile des entsprechenden Fahrzeugs finden
3. Gewünschte Informationen ändern
4. Datei speichern
5. "Refresh Data" im Admin-Panel klicken

### Fahrzeug löschen
1. Excel-Datei öffnen
2. Zeile des entsprechenden Fahrzeugs löschen
3. Datei speichern
4. "Refresh Data" im Admin-Panel klicken

## 📝 Übersetzungsverwaltung

### Neue Übersetzung hinzufügen

1. **CSV-Datei öffnen**: `/public/excel/translations-template.csv`
2. **Neue Zeile hinzufügen** mit Format:
   ```csv
   key,de,fa,category
   new.key,German Text,متن فارسی,category
   ```

### Übersetzungsschlüssel-Struktur
- Verwenden Sie Punkte für verschachtelte Schlüssel: `nav.home`, `footer.company.name`
- Kategorien helfen bei der Organisation der Übersetzungen: `navigation`, `hero`, `footer`, etc.

### Verwendung in Komponenten
```tsx
const { t } = useLanguage();
return <h1>{t("new.key")}</h1>;
```

### Übersetzungskategorien
- `navigation` - Menü und Navigation
- `hero` - Hauptbereich der Seite
- `footer` - Website-Footer
- `services` - Dienstleistungen
- `advantages` - Vorteile
- `search` - Suche
- `carLabels` - Fahrzeugbeschriftungen

## ⚙️ Admin-Panel

### Zugriff auf das Admin-Panel
1. Auf der Hauptseite den "Admin Panel" Button klicken
2. Das Admin-Panel öffnet sich

### Admin-Panel Funktionen
- **Excel-Dateien Speicherort**: Anzeige der Dateipfade
- **Erforderliche Dateien**: Liste der notwendigen Dateien
- **Aktualisierung**: Schritt-für-Schritt-Anleitung
- **Daten aktualisieren**: "Refresh Data" Button
- **Fehlerbehandlung**: Anzeige möglicher Fehler

### Verwendung
1. Excel-Dateien bearbeiten
2. Dateien speichern
3. "Refresh Data" klicken
4. Änderungen werden auf der Website angewendet

## 📊 Excel-Dateien Anleitung

### Übersetzungsdatei (`translations-template.csv`)
```csv
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
```

### Fahrzeugdatei (`cars.xlsx`)
- Format: Excel (.xlsx)
- Speicherort: `/public/excel/cars.xlsx`
- Erforderliche Spalten: brand, model, year, price, mileage, fuel, transmission, category, image, description

### Wichtige Hinweise
- Dateien müssen im Pfad `/public/excel/` gespeichert werden
- Dateinamen müssen genau den angegebenen Namen entsprechen
- Dateiformate müssen korrekt sein (CSV für Übersetzungen, XLSX für Fahrzeuge)

## 🔍 Häufige Probleme

### Excel-Dateien werden nicht geladen
- Dateipfade in `/public/excel/` überprüfen
- Dateiformate bestätigen (CSV für Übersetzungen, XLSX für Fahrzeuge)
- Admin-Panel für Datenaktualisierung verwenden

### Übersetzungen werden nicht angezeigt
- Übersetzungsschlüssel in Excel-Datei überprüfen
- Browser-Konsole auf Fehler überprüfen
- Korrektes Schlüsselformat (Punktnotation) bestätigen

### Bilder werden nicht angezeigt
- Bilder in `/public/images/cars/` speichern
- Bilddateinamen in Excel-Datei aktualisieren
- Dateiendungen überprüfen

### Sprachwechsel-Probleme
- Browser-Cache leeren
- LanguageContext-Implementierung überprüfen
- Übersetzungsdatenstruktur bestätigen

### Debug-Modus
Aktivieren Sie Debug-Protokollierung durch Überprüfung der Browser-Konsole auf:
- Übersetzungslade-Protokolle
- Excel-Datenlade-Protokolle
- Fehlermeldungen

## 📞 Support

Für technischen Support oder Fragen:
- **Entwickler**: Amir Hossein Shrififard
- **E-Mail**: amirhosseinshrififard@gmail.com
- **Telefon**: +989172380487

---

*Letzte Aktualisierung: Dezember 2024*

