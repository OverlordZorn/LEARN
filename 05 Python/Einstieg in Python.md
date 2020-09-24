# Einstieg in Python

- [Einstieg in Python](#einstieg-in-python)
  - [1 Einführung](#1-einführung)
    - [1.1 Vorteile von Python](#11-vorteile-von-python)
    - [1.2 Verbreitung von Python](#12-verbreitung-von-python)
    - [1.3 Aufbauch des Buchs](#13-aufbauch-des-buchs)
  - [2 Erste Schritte](#2-erste-schritte)
    - [2.1 Python als Taschenrechner](#21-python-als-taschenrechner)
      - [EVA Prinzip](#eva-prinzip)
      - [Operatoren + - *](#operatoren----)
      - [Operatorenn / // %](#operatorenn---)
      - [Rangfolge und Klammern](#rangfolge-und-klammern)
      - [Variablen und Zuweisung](#variablen-und-zuweisung)
      - [Einige Hinweise](#einige-hinweise)
      - [Variablennamen](#variablennamen)
    - [2.2 Erstes Programm](#22-erstes-programm)
      - [2.2.1 Hallo Welt](#221-hallo-welt)
      - [2.2.2 Eingabe eines Programms](#222-eingabe-eines-programms)
      - [2.2.3 Speicher und Ausführen](#223-speicher-und-ausführen)
        - [Kommandozeile](#kommandozeile)
        - [In IDLE](#in-idle)
      - [2.3.4 Kommentare](#234-kommentare)
      - [2.3.5 Verkettung von Ausgaben](#235-verkettung-von-ausgaben)
      - [2.3.6 Lange Ausgaben](#236-lange-ausgaben)
  - [3 Programmierkurs](#3-programmierkurs)
    - [3.1 Ein Spiel programmieren](#31-ein-spiel-programmieren)
    - [3.2 Variablen und Operatoren](#32-variablen-und-operatoren)
      - [3.2.1 Berechnung und Zuweisung](#321-berechnung-und-zuweisung)
      - [3.2.2 Eingabe einer Zeichenkette](#322-eingabe-einer-zeichenkette)
      - [3.2.3 Eingabe einer Zahl](#323-eingabe-einer-zahl)
      - [3.2.5 Zufallszahlen](#325-zufallszahlen)
      - [3.2.6 Typhinweise](#326-typhinweise)
    - [3.3 Verzweigungen](#33-verzweigungen)
      - [3.3.1 Vergleichsoperatoren](#331-vergleichsoperatoren)
      - [3.3.2 Einfache Verzweigung](#332-einfache-verzweigung)
      - [3.3.3 Spiel - Version mit Bewertung der Eingabe](#333-spiel---version-mit-bewertung-der-eingabe)
      - [3.3.4 Mehrfache Verzweigung](#334-mehrfache-verzweigung)
      - [3.3.5 Logische Operatioren](#335-logische-operatioren)
      - [3.3.6 Mehrere Vergleichsoperatoren](#336-mehrere-vergleichsoperatoren)
      - [3.3.7 Spiel, Verson mit genauer Bewertung der Eingabe](#337-spiel-verson-mit-genauer-bewertung-der-eingabe)
      - [3.3.8 Rangfolge der Operatoren](#338-rangfolge-der-operatoren)
    - [3.4 Schleifen](#34-schleifen)
      - [3.4.1 for-Schleife](#341-for-schleife)
      - [3.4.2 Schleifenabbruck mit `break`](#342-schleifenabbruck-mit-break)
      - [3.4.3 Geschachtelte Kontrollstrukturen](#343-geschachtelte-kontrollstrukturen)
      - [3.4.4 Spiel, Version mit for-Schleife und Abbruch](#344-spiel-version-mit-for-schleife-und-abbruch)
      - [3.4.5 For schleife mit `range()`](#345-for-schleife-mit-range)
      - [3.4.6 Spiel, Version mit range()](#346-spiel-version-mit-range)
      - [3.4.7 while-Schleife](#347-while-schleife)
      - [3.4.8 Spiel, Version mit while-Schleife und Zähler](#348-spiel-version-mit-while-schleife-und-zähler)
      - [3.4.9 Kombinierte Zuweisungsausdrücke](#349-kombinierte-zuweisungsausdrücke)
    - [3.5 Entwicklung eines Programmes](#35-entwicklung-eines-programmes)
    - [3.6 Fehler und Ausnahmen](#36-fehler-und-ausnahmen)
      - [3.6.1 Basisprogramm](#361-basisprogramm)
      - [3.6.2 Fehler abfangen](#362-fehler-abfangen)
      - [3.6.3 Eingabe wiederholen](#363-eingabe-wiederholen)
      - [3.6.4 Exkurs: Schleifenfortsetzung mit `continue`](#364-exkurs-schleifenfortsetzung-mit-continue)
      - [3.6.5 Spiel, Version mit Ausnahmebedingung](#365-spiel-version-mit-ausnahmebedingung)


## 1 Einführung

### 1.1 Vorteile von Python
Python ist eine sehr einfach zu erlernende Programmiersprache und für den Einstieh in die Welt der Programmierung ideal geeignet. Trotz ihrer Einfachheit bietet diese Sprache auch die Möglichkeit, komplexe Programme für vielfältige Anwendungsgebiete zu schreiben.

Python eignet sich besoders zur schnellen Entwicklung umfangreicher Anwendungen. Diese TEchnik ist unter dem Stichwort RAD ( Rapid Application Development) bekannt geworden. Python vereint zu diesem Zweick folgende Vorteile:
* Eine einfache, eindeutige Syntax: Python ist für Einsteiger eine ideale Programmiersprache. Sie beschränkt sich auf einfache, klare Anweisungen und häufig auf einen einzigen möglichen Lösungsweg. Dieser prägt sich schnell ein und wird dem Entwickler vertraut.
* Klare Strukturen: Python verlangt vom Entwickler, in einer gut lesbaren sStruktur zu schreiben. Die Anordnung der Programmzeilen ergibt zugleich dielogische STruktur des Programms.
* Wiederverwendung von Code: Die Modularisierung, also die Zerlegung eines Problems in Teilprobleme und die anschließende Zusammenführung der Teillösungen zu einer Gesamtlösung, wird in Python sehr leicht gemacht. Die vorhandenen Teillösungen können unkompliziert für weitere Aufgabenstellungen genutzt werden, sodass Sie als Entwickler bald über einen umfangreichen Pool an Modulen verfügen.
* Objektbearbeitung: In Python werden alle Daten als Objekte gespeichert. Dies führt zu einer einheitlichen Behandlung für Objekte unterschiedlichen Typs. Andererseits erfolg die physikalische Speicherung der Objekte von Python automatisch, also ohne Eingriff des Entwicklers. Der Entwickler muss sich nicht um die Reservierung und Freigabe geeigneter Speicherbereiche kümmern.
* Interpreter/Compiler: Python-Programme werden unmittelbar interpretiert. Sie müssen nicht erst kompiliert und gebunden werden. Dies ermöglicht einen häufigen, schnellen Wchsel zwischen Codierungs- und Testpahse.
* Unabhängigkeit vom Betriebssystem: Sowohl Programme, die von der Kommandozeile aus biedient werden, als auch Programme mit grafischen Benutzeroberflächen können auf unterschiedlichen Betriebssystemen (Windows, Linux, macOs) ohne Neuentwicklung und Anpassung eingesetzt werden.

### 1.2 Verbreitung von Python
Aufgrund seiner vielen Vorzüge gehört Python zu den beliebtesten Programmiersprachen überhaupt. So wird es z. B. innerhalb des Projekts 100-Dollar-Laptop, das der Schulausbikldung von Kindern in aller Welt dient, für die Benutzeroverfläche verwendet. Aber auch in zahlreichen großen Unternehmen wird Python eingesetzt, hier ein paar Beispiele.:
* Google: Python ist eine der drei offiziellen Programmiersprachen
* youTube: Wurde zum großen Teil mithilfe von Python entwickelt.
* NASA: Nutzt Python zur Softwareentwicklung im Zusammenhang mit den Spache-Shuttle-Missionen.
* Industrial Light&Magic: Auch HOllywood setzt auf Python - die Produktionsfirma ILM nutzt es z.B. bei der Entwicklung von Spezialeffekten.
* Honeywell: Python wird weltweit in vielen Firmen zur allgemeinen Hardware- und Softwareentwicklung eingesetzt.

### 1.3 Aufbauch des Buchs
Das vorliegende Buch führt Sie in die Programmiersprache Python ein. Besonderer Wert wird darauf gelegt, dass Sie selbst praktisch mit Python aribeten. Daher empfehle ich Ihnen, von Anfang an dem logischen Faden von Erklärungen und Beispielen zu folgen.

Python 3 wurde im Jahr 2008 eingeführt und ist mit der Version 3.8 die aktuelle Version für Einsteiger. Python 2, die klassische Versiuon, existiert noch in großen, langlebigen Projekten und wird auch weiterhin von den Python-Entwickerln unterstützt. Daher gehe ich in einem eigenen Kaptiel auf die Unterschiede zwischen 2 und 3 ein.

Erste Zusammenhänge werden in Kapitel 2 anhand von einfachen Berechnungen vermittelt. Außerdem lernen Sie, ein Programm einzugeben, zu speicher und es unter den verschiedenen Umgebungen auszuführen.

Sie werden die Sprache spielersich kennen lernen. Dhaer begleitet Sie ein selbst programmiertes Spiel durch das Buch. In dem Spiel soll der Benutzer eine oder mehrere Kopfrechenaufgaben lösen. Es wird mit dem "Pgrogrammierkurs" in Kapitel 3 eingeführt und im weitern Verlauf des Buchs kontinuerlich erweitert und verbessert.

Nach der Vorstellung der verschiedenen Datentypen mit ihren jeweiligen Eigenschaften und Vorteilen in Kapitel 4 werden die Programmierkenntnisse in Kapitel 5 vertieft.

Kapitel 6 widmet sich der objektorientierten Programmierung mit Python.

Einige nützliche Module zur Ergänzung der Programme werden in Kapitel 7 vorgestellt.

In Kapitel 8 und 10 lernen Sie, Daten dauerhaft in Dateien oder Datenbanken zu speichern. Python wird zudem in der Internetprogrammierung eingesetzt. Die Zusammenhänge zwischen Python und dem internet vermittelt Kapitel 9.

Sowohl Windows als auch Ubuntu Linux und macOS bieten komfortable grafische Benutzeroberflächen (GUI). Kapitel 11 beschäftigt sich mit der GUI Erzeugung mithilfe des Moduls tkinter. Dieses stellt eine Schnittstelle zwischen dem grafischen Tooklit Kk und Python dar.

Kapitel 12 fasst diejenigen Unterschiede zwischen Python 2 und Python 3, die besonders für Einsteiger interessant sind, noch einmal zusammen.

Python ist die primäre Sprache für die Programmierung von elektronischen Schaltungen mithilfe des Einplatinencomputers RasPi. In Kaptiel 13 werden wir uns damit beschäftigen.

## 2 Erste Schritte
### 2.1 Python als Taschenrechner
#### EVA Prinzip
Eingabe, Verarbeitung, Ausgabe.

#### Operatoren + - *

```
>>> 41 + 7.5
48.5

>>> 12 - 18
-6 

>>> 7 * 3
21
```

#### Operatorenn / // % 

```
>>> 22 / 8
2.75

>>> 22 // 8
2

>>> 22 % 8
6
```

#### Rangfolge und Klammern

```
>>> 7 + 2 * 3
13

>>> (7 + 2) * 3
27
```

#### Variablen und Zuweisung
```
>>> mi = 1.609344
>>> 2 * mi
3.218688
>>> 5 * mi
8.04672
>>> 22.5 * mi
36.21024
>>> 2.35 * mi
3.7819584000000006
```

#### Einige Hinweise

In Python-Variablen können sie ganze Zahlen, Zahlen mit Nachkommastellen, Zeichenketten (also Texte) und andere Objekte eines Programms mithilfe von Zuweisungen speichern.

Das Ergebnis der letzten Berechnung ist mathematisch falsch. 2,35 Meilen entsprechen 3,7819583 Kilometern, also ohne eine weiter 6 an der 16. Nachkommastelle. Woher kommt die falsche Anzeige?

Zahlen mit Nachkommastellen können im Gegensatz zu ganzen Zahlen nicht mathematisch exakt gespeichert werden. Es gibt einige Stellen im Buch, an denen dies auffallen wird. Bei den meisten Bereichnungen ist allerdings die Abweichung so gering, dass sie in der Praxis zu nvernachlässigen ist.

Es ist überlich, den Wert in Kilometer so auszugeben, dass dass auf drei Stellen hinter dem Komma gerunden wird, also auf den Meter genau. Auf eine solche formatierte Ausgabe gehen wir später noch ein.

#### Variablennamen
Den Namen einer Variablen können Sie unter Einhaltung der folgenden Regeln weitgehend frei wählen:
* Er kann aus den Buchstaben a-z, A-Z, 0-9 oder _ bestehen.
* Er darf nicht mit einer Ziffer beginnen.
* Er darf keinem der reservierten Wörter der Programmiersprache Python entsprechen. Das sind: `and, as, assert, break, class, continue, def, del, elif, else, except, exec, finally, for, from, global, if, import, in, is, lambda, not, or, pass, rpint, raise, return, try, while, with, yield.
* Bachten Sie die Groß- und KLeinschreibung: Namen und Anweisungen müssen genau wie vorgegeben geschrieben werden. Die Namen `mi` und `Mi` bezeichnen verschiedene variablen.


### 2.2 Erstes Programm

Ein erstes Python-Programm wird eingegeben, abgespeichert und aufgerufen. Dieser Vorgang wird ausführlich erklärt. Die einzelnen Schritte sind später bei jedem Python-Programm auszuführen.


#### 2.2.1 Hallo Welt


#### 2.2.2 Eingabe eines Programms

Zur Eingabe des Programms rufen Sie in der Entwicklungsumgebung IDLE im Menü File zunächst den Menübefehl New File auf. Es öffnet sich ein neues Fenster mit dem Titel Untitled. ADas Hauptfenster rückt in den Hintergrund.



```py
print("Hallo Welt")
```

#### 2.2.3 Speicher und Ausführen

##### Kommandozeile
```
cd \Python38\Beispiele
python hallo.py
```

##### In IDLE
Run > Run Module (F5)

#### 2.3.4 Kommentare

```
# Mein erstes Programm
print("Hallo Welt")     # Eine Ausgabe
"""Kommentar in
    mehreren Zeilen"""
```
Ausgabe:
```
================================= RESTART: C:\Python38-32\Beispiele\hallo.py ================================
Hallo Welt
>>> 
```


#### 2.3.5 Verkettung von Ausgaben
Mithilfe der Funktion print() können auch mehrere Ausgaben in einer Zeile vorgenommen werden. Das Programm wird weiter verändert:

```
# Mein erstes Programm
print("Hallo", "Welt")
```
Ausgabe:
```
================================= RESTART: C:\Python38-32\Beispiele\hallo.py ================================
Hallo Welt
>>> 
```

Die einzelnen TEile der Ausgabe werden durch KOmmata voneinander getrennt. Nach jedem Teil der Ausgabe wird automatisch ein Leerzeichen eingesetzt. Dieses Verhalten können sie als Programmierer beeinflussen; mehr dazu im Abschnitt 5.2.1 über die Funktion print().

#### 2.3.6 Lange Ausgaben
Zeichenketten, die mithilfe der Funktion print() ausgegeben werden, können sehr lang werden, eventuell sogar über den rechten Rand innerhalb des Editors hinausgehen. Damit wird der Programmcode allerdings etwas unübersichtlich. Sie können solche Zeichenketten aber auch auf mehrere Zeilen verteilen - dieses Vorgehen wird auch im vorliegenden Buch aufgrund der begrenzten Druckbreite häufig angewerndet.

Wenngleich es für dieses kurze Programm eigentlich nicht notwendig ist, verteilen wir hier zur verdeutlichung den Code auf mehrere Zeilen:

```
# Mein erstes Programm
print("Hallo",
      "Welt")
print("Hallo "
      "Welt")
```

```================================= RESTART: C:\Python38-32\Beispiele\hallo.py ================================
Hallo Welt
Hallo Welt
```

Es bietet sich an, den Zeilenumbruch nach einem Komma durchzuführen, wie bei der ersten Ausgabe von `Hallo Welt`. Teiltexte müssen nicht durch Kommata voneinander getrennt werden. Sie sind allerdings jeweils mit Anführungsstrichen zu bregrenzen. Das trennende Leerzeichen zwischen "Hallo" und "Welt" müssen Sie nun von Hand setzen.

```
print("Hallo"
      "Welt")
```
Ausgabe:
```
HalloWelt
```

## 3 Programmierkurs

Der folgende Programmierkurs mit ausführlichen Erläuterungen führt Sie schrittweise in die Programmierung mit Python ein. Begleitet wird der Kursa von einem Programmierprojekt, das die vielen Teilaspekte zu einem Ganzen verknüpft.

### 3.1 Ein Spiel programmieren

Damit Sie die Programmiersprache Python auf unterhaltsame Weise kennenlernen, werden Sie im Folgenden ein Spiel programmieren. Es wird im Verlauf des Buchs kontinuierlich erweitert und verbessert. Zunächst wird der Ablauf des Spiels beschrieben.
Nach Aufruf des Programms wird dem Benutzer eine Kopfrechenaufgabe gestellt. Er gibt das von ihm ermittelte Ergebnis ein, und das Programm bewertet seine Eingabe.

Die Aufgabe: 9 + 26
Bitte eine Zahl eingeben: 
34
34 ist falsch
Bitte eine Zahl eingeben:
35
35 ist richtig
Ergebnis: 35
Anzahl Versuche: 2

Das Spiel wird in mehreren Einzelschritten erstellt. Zunächst entsteht eine ganz einfache Version. Mit zunehmenenden Programmierkenntnissen entwickeln Sie immer komplexere Versionen. Die im jeweiligen Abschnitt erlernten Programmierfähigkeiten setzen Sie unmittelbar zur Verbesserung des Spielablaufs ein.

In späteren Abschnitten des Buchs entstehen weitere Versionenen des Spiels.

Es begleitet Sie auf diese Weise durch das gesamte Buch. Unter anderem wird es um die folgende Möglichkeiten erweitert:
* Es werden mehrere Aufgaben gestellt.
* Die benötigte Zeit wird gemessen.
* Der Name des Spielersa und die benötigte Zeit werden als Highscore-Liste dauerhaft in einer Datei oder einer Datenbank gespeichert.
* Die Highscore-Liste wird mit neuen Ergebnissen aktualisiert und auf dem Bildschirm dargestellt.
* Es gibt eine Version auf einer grafischen Benutzeroberfläche.
* Es gibt eine Version, die das Spielen im Internet ermöglicht.

### 3.2 Variablen und Operatoren

Zur Speicherung von Werten werden Variablen benötigt. Operatoren dienen zur Ausführung von Berechnungen.

#### 3.2.1 Berechnung und Zuweisung
Im folgenden Programm wird eine einfache Berechnung mithilfe eines Operators durchgeführt. Das Ergebnis der Berechnung wird mit dem Gleichheitszeichen einer Variablen zugewiesen. Es erfolgt eine Ausgabe. Diese Schritte kennen Sie bereits aus Abschnitt 2.1.5.

```
# Werte 
a = 5
b = 3

# Berechnung
C = a + b

# Ausgabe
print("Die Aufgabe:", a, "+", b)
print("Das Ergebnis:", c)
```

In den beidne Variablen wird jeweils ein Wert gespeichert. Die beiden Werte werden addiert, das Ergebnis wird der Variablen c zugewiesen. Die Aufgabenstellung wird ausgegeben, anschließend das Ergebnis.

#### 3.2.2 Eingabe einer Zeichenkette
IUn diesem Abschnitt wird die Funktion input() zur Eingabe einer Zeichenkette durch den Benutzer eingeführt. Ein kleines Beispiel:

```
# Eingabe einer Zeichenkette
print("Bitte einen text eingeben")
x = input()
print("Ihre Eingabe:", x)
```

#### 3.2.3 Eingabe einer Zahl

Im weiteren Verlauf des Spiels ist es notzwendig, die Eingabe des Benutzers als Zahl weiterzuverwenden. Dazu muss die Zeichenkette, die die Funktion input() liefert, in eine Zahl umgewandelt werden.

Zur Umwandlung gbit es unter anderem die folgenden Funktionen:
* Die eingebaute Funktion int() wandelt eine Zeichenkette in eine ganze Zahl um; eventuell vorhandene Nachkommastellen werden abgeschnitten.
* Die eingebaute Funktion float() wandelt eine Zeichenkette in eine Zahl mit Nachkommastellen um.
* Falls die Zeichenkette für float() keine gültige Zahl enthält, kommt es zu einem Programmabbruch. Bei int() muss es sich sogar um eine gültige Zahl handeln. In Abschnitt 3.6 lernen Sie, wie Sie Programmabbrüche abfangen.
  
#### 3.2.5 Zufallszahlen

Natürlich wird nicht immer die gleiche Kopfrechenaufgabe gerstellt. In Python steht ein Zufallszahlengenerator zur Verfügung. Er erzeugt zufällige Zahlen, die wir zur Bildung der Aufgabenstellung nutzen.

Die funktionen des Zufallszahlengenerators befinden sich in einem zusätzlichen Modul, dass zunächst importiert werden muss. Das Programm wird wie folgt verändert:

```
# Modul random inportieren
inport random

# Zufallsgenerator initialisieren
random.seed()

# Zufallswerte und Berechnung
a = random.randint(1,10)
b = random.randint(1,10)
c = a + b
```

Zusätzliche Module können Sie mitheilfe der Anweisung `inport` in das Programm einbinden. Die Funktionen dieser Module können Sie anschließend in der Schreibweise `Modulname.Funktionsname` aufrufen.

Der Aufruf der Funktion `seed()` des Moduls `random` führt dazu, dass der Zufallszahlengenerator mit der aktuellen Systemzeit initialisiert wird. Anderenfalls könnte es passieren, dass anstelle einer zufälligen Auswahl immer wieder die gleichen Zahlen geliefert würden.

Die Funktion `randint()` des Moduls `random` liefert eine ganze Zufallszahl im angegebenen Bereich. Im vorliegenden Fall ist dies also eine zufällige Zahl von 1 bis 10.

Die Funktionen des Moduls `raondom`können für die zufälligen Werte eines Spiels genutzt werden. Falls Sie zufällige Werte zum Zwecke der Verschlüsselung oder aus Gründen der Sicherheit benötigen, sollten sie die Funktionen des Moduls `secrets`nutzen, das es seit Python 3.6 gibt.

#### 3.2.6 Typhinweise

Seit Python 3.6 können Sie angeben, welchen Datentyp eine Variable haben soll. Allerdings haben diese Typhinweise (english: type hints), auch Annotationen genannt, bisher nur provisorischen Charakter. Ihre Regeln können sich noch ändern und sind nicht binded.

Type Hints sollen u. A. die Lesbarkeit des Codes für Entwickler verbessern und bessere Hilfestellungen der Editoren innerhalb einer Entwicklungsumgebung ermöglichen. Allerdings gilt nach wie vor eine Grundregel der Entwickler von Python:
"Python wird eine dynamsich typisierte Sprache bleiben".

### 3.3 Verzweigungen

In den bisherigen Programmen werden alle Anweisungen der Reihe nach ausgeführt. Zur Steuerung des Programmablaufs werden alelrdings häufig Verzweigungen benötigt. Innerhalb des Programms wird anhand einer Bedinging entschieden, welcher Zweig des Programms ausgeführt wird.

#### 3.3.1 Vergleichsoperatoren
Bedingungen werden mitheilfe von Vergleichsoperatoren formuliert. Tabelle 3.1 listet die Vergleichsoperatoren mit ihrer Bedeutung auf.

| Operator | Bedeutung |
|---|---|
|>| größer als |
|<| kleiner als |
|>=|größer als oder gleich |
|<=|kleiner als oder gleich |
|==| gleich |
|!=| ungleich |

#### 3.3.2 Einfache Verzweigung
Im folgenden Beispiel wird untersucht, ob eine Zahl positiv ist. Ist dies der fall, wird `Diese Zahl ist positiv` ausgegeben, anderenfalls lautet die Ausgabe `Diese Zahl ist 0 oder negativ`. Es wird also nnur eine der beiden Anweisungen ausgeführt.

```
x = 12
print ("x:", x)

if x > 0:
    print("Diese Zahl ist positiv")
else:
    print("Diese Zahl ist 0 oder Negativ")
```

In der ersten Zeile erhält die Variable x den Wert 12.

In der vierten Zeile wird mitheilfe von *if* eine Verzweigung eingeleitet. Danach wird eine Bedingung formuliert, hier `x > 0`, die entweder wahr oder falsch ergibt. Anschließend kommt ein Doppelpunkt.

Es folgen eine oder mehrere Anweisungen, die nur ausgeführt werden, falls die Bedingung wahr iergibt. Die anweisungen müssen innerhalb des sogenannten if-Zweigs mithilfe der Tab Taste eingerückt werden, damit Python die Zugehörigkeit zur Verzweigung erkennen kann. Gleichzeitig macht die Einrückung das Programm übersichtlicher.

In der sechsten Zeile wird mithilfe der Anweisung `else` der alternative Teil der Verzweigung eingeleitet. Es folgt wiederum ein Doppelpunkt.

Dann folgen eine oder mehrere Anweisungen, die nur ausgeführt werden, falls die Bedingung `falsh`ergibt. Auch diese Anweisungen müssen eingerückt werden.

#### 3.3.3 Spiel - Version mit Bewertung der Eingabe

#### 3.3.4 Mehrfache Verzweigung

In vielen Anwendungsfällen gibt es mehr als zwei Möglichkeiten, zwischen denen zu entscheiden ist. Dazu wird eine mehrfache Verzweigung benötigt. Im folgenden Beispiel wird utnersucht, ob eine Zahl positiv, negativ oder gleich 0 ist. Es wird eine entsprechende Meldung ausgegeben:

```
x = -5
print("x:", x)

if x > 0:
    print("x ist positiv")
elif x < 0:
    print("x ist negativ")
else:
    print("x ist gleich null")
```

Die Verzweigung wird mithilfe von `if` eingeleitet. Falls x positiv ist, werden die nachfolgenden eingerückten Anweisungen ausgeführt.

Nach `elif` wird eine weitereBedingung formuliert. Sie wird nur untersucht, falls die erste Bedingung nach dem if nicht zutrifft. Falls x negativ ist, werden die nachfolgenden, eingerückten Anweisungen ausgeführt.

Die Anweisungen ach dem else werden nur durchgeführt, falls keine der beiden vorherigen Bedingungen zutraf ( nach dem if und nach dem elif).
In diesem Fall beduetet das, dass x gleich 0 ist, da es nicht positiv und nicht negativ ist.

**Hinweis**
Innerhalb einer Verzweigung können mehrere elif-Anweisungen vorkommen. Sie werden der Reihe nach untersucht, bis das Programm zu einer Bedingung kommt, die zutrifft. Die weiteren elif-Anweisungen oder eine else-Anweisung werden in diesem Fall nicht mehr bachtet.

#### 3.3.5 Logische Operatioren
Mithilfe der logsichen operatoren `and`, `or` und `not` können mehrere Bedingungen miteinander verknüpft werden.
* Eine Bedingung die aus einer oder mehreren Einzelbedingungen besteht, die jweils mit dem Operator `and` verkünft sind, ergibt wahr, wenn jede der Einzelbedingugnen wahr ergibt.
* Eine Bedingung die aus einer oder mehreren Einzelbedingugnen besteht, die mit dem Operator `or` verkünpft sind, ergibt wahr, wenn mindestens eine der Einzelbedingungen wahr ergibt.
* Der Operator `not` kehr den Wahrheitswert einer Bedingung um, d.h., eine falsche Bedingung wird wahr, eine wahre Bedingung wird falsch.


#### 3.3.6 Mehrere Vergleichsoperatoren
Bedingungen können auch mehrere Vergleichsoperatoren enthalten. Manche Verzweigungen sind auf diese Weise verständlicher. Ein Beispiel:

```
x = 12
y = 15
z = 20
print("x:", x)
print("y:", y)
print("z:", z)

# Bedingung 1
if x < y < z:
    print("y liegt zwischen x und z")

```
Die Bedingung `x < y <` entspricht dem Ausdruck `x < y and y < z`. In der Kurzform ist sie allerdings besser lesbar.

#### 3.3.7 Spiel, Verson mit genauer Bewertung der Eingabe

 Nun kann die Eingabe des Benutzers in dem Kopfrechenspiel auf verschiedene Art und Weise genauer bewertet werden:
 * Mithilfe einer mehrfachen Verzweigung
 * Anhand logischer OPeratoren
 * Anhand von Bedingungen mit mehreren Vergleichsoperatoren

insgesamt werden vier Möglichkeiten angeboten: über `if`, zweimal `elif` und `else`. Ist die Eingabe kleiner oder größer als 100, so ist sie ganz falsch. Dies wird mithielfe des logsichen Operators `or` gelöst.

Unterscheidet sich die eingegebene Zahl vom richtigen Ergebnis nur um den Wert 1, ist die Eingabe ganz nahe dran. Dies wird mit einer Bedingung ermittelt, die mehrere Vergleichsoperatoren enthält.

#### 3.3.8 Rangfolge der Operatoren
In vielen Ausdrücken treten mehrere Operatoren auf. Bisher sind dies Rechenoperatoren, Vergleichsoperatoren und logsiche Operatoren.

Die einzelnenn Teilschritte folgen der sogenannten Rangfolge der Operatoren. Die Teilschritte, bei denen höherrangige Operatoren beteiligt sind, werden zuerst ausgeführt.

Die nachfolgende Tabelle gibt die Rangfolge der bisher verwendeten Operatoren in Python an, beginnend mit den Operatoren

|Operator|Bedeutung |
|---|---|
| + - | positives vorzeichen einer Zahl, negatives Vorzeichen einer Zahl |
| * / % // | Multiplikation, Division, Modulo, Ganzzahldivision |
| + - | Addition, Subtraktion |
| < <= >= > == != | kleiner, kleiner gleich, größer, größergleich, gleich, ungleich |
| not | logische Verneinung|
| and | logisches Und |
| or | logisches Oder |

### 3.4 Schleifen

Neben der Verzweigung gibt es eine weiter wichtige Struktur zur Steuerung von Programmen: die Schleife. Mithilfe einer Schleife ermöglichen Sie die wiederholte Ausführung eines Programmschritts.

Es muss zwischen zwei Typen von Schleifen unterschieden werden:
der `for`-Schleife und der `while`-Schleife. Der jeweilige Anweindungsbereich der beiden Typen wird durch folgende Merkmale definiert:
* Eine `for`-Schleife wird verwendet, wenn ein Programmschritt für eine regelmäßige, zum Zeitpunkt der Anwendung bekannte Folge von Werten wiederholt ausgeführt werden soll.
* Eine `while`-Schleife wird verwendet, wenn sich erst durch Eingaben des Anwenders ergibt, ob ein Programmschritt ausgeführt werden soll und wie oft er wiederholt wird.

Eine `for`-Schleife wird auch als Zählschleife beziechnet, eine `while`-Schleife als bedingungsgesteuerte Schleife.

#### 3.4.1 for-Schleife

Die Anwendung der `for`-Schleife verdeutlicht das folgende Beispiel:

```py
for i in 2, 7.5, -22:
    print("Zahl:", i, ", Quadrat:", i*i)
```
Folgende Ausgabe wird erzeugt:

```
Zahl: 2, Quadrat: 4
Zahl: 7.5, Quadrat: 56.25
Zahl: -22, Quadrat: 484
```

Die erste Zeile ist wie folgt zu lesen: Führe die nachfolgenden eingerückten Anweisungen für jede Zahl in der Abfolge 2, 7.5 und -22 aus. Nenne diese Zahl in diesen Anweisungen i. Nach der Zahlenfolge muss, ebenso wie bei if-else, ein Doppelpunkt notiert werden. Anstelle von i können Sie auch eine andere Variable als Schleifenvariable nutzen. Die Zahlen werden zusammen mit einem kurzen INformationstext ausgegeben bzw. quadriert und ausgegeben.

**Hinweis**
Eine solche Abfolge von Objekten, die z. B. in einer For schleife udrchlaufen werden kann, nennt man auch iterierbares Objekt oder kurz iterable.
Diese Iterables werden uns in Python noch häufiger begegnen. Den Vorgang des Durchlaufens nennt man auch iterieren.



#### 3.4.2 Schleifenabbruck mit `break`

Die Anweisung `break` beitet eine weitere Möglichkeit zur Steuerung von Schleifen. Sie führt zu einem unmittelbaren Abbruch einer Schleife. Sie wird sinnvollerweise mit einer Bedingung verbunden und häufig bei Sonderfällen eingesetzt.
Ein Beispiel:

```py
for i in 12, - 4, 20, 7:
    if i*i > 200:
        break
    print("Zahl:", i,",Quadrat:", i*i)
print("Ende")
```

Diese Ausgabe wird erzeugt:
```
Zahl: 12, Quadrat: 144
Zahl: -4, Quadrat: 16
Ende
``` 

Die Schleifewird unmittelbar verlassen, wenn das Quadrat der aktuellen Zahl größer als 200 ist. Die Ausgabe innerhalb der Schleife erfolgt auch nicht mehr. Das Programm wird nach dier Schleife fortgesetzt.


#### 3.4.3 Geschachtelte Kontrollstrukturen

Wie das vorherige Programm verdeutlicht, können Kontrollstrukturen (also Verzweigungen und Schleifen) auch geschachtelt werden. Dies bedeutet, dass eine Kontrollstruktur eine weitere Kontrollstruktur enthält. Diese kann ihrerseits wiederrum eine Kontrollstruktur enthalten usw. Ein weiteres Beispiel:

```py
for x in -2, -1, 0, 1, 2:
    if x > 0:
        print (x, "positiv")
    else:
        if x < 0:
            print(x, "negativ")
        else:
            print(x, "gleich 0")
```

Es wird folgende Ausgabe erzeugt:
```
-2 negativ
-1 negativ
0 gleich 0
1 positiv
2 positiv
```

Zur Erläuterung:
* Die äuterste Kontrollstruktur ist eine `for`-Schleife. Alle einfach eingerückten Anweisungen werden - gemäß der Schleifensteuerung - mehrmals ausgeführt.
* Mit der äußeren if-Anweisung wird die erste Verzweigung eingeleitet.
* Ist x größer als 0, wird die folgende zweifache eingerückte Anweisung ausgeführt. Ist x nicht größer als 0, wird die innere if-Anweisung hitner der äußeren else-Anweisung untersucht.
* Trifft die Bedingung der inneren if-Anweisung zu, werden die folgenden dreifach eingerückten Anweisungen ausgeführt, die der inneren else-Anweisung folgen.
  
Zu beachten sind besonders die mehrfachen Einrückungen, damit die Tiefe der Kontrollstruktur von Python richtig erkannt werden kann.

Nach einem Doppelpunkt hinter dem Kopf einer Kontrollstruktur wird in der Entwicklungsumgebung IDLE automatisch mit einem Tabulatorspring eingerückt. Dieser Sprung erzeugt standardmäßig vier Leerzeichen, dadurch werden die Kontorllstrukturen für den Entwickler klar erkennbar.

Falls Sie mit einem anderen Editor arbeiten, müssen sie daruaf achten, dass um mindestens ein Leerzeichen eingerückt wird, damit Pythonm die Kontrollstruktur erkennt. Sinnvoller ist eine Einrückung um zwei oder mehr Leerzeichen, damit die Struktur auch für den Entwickler gut erkennbar ist.

#### 3.4.4 Spiel, Version mit for-Schleife und Abbruch

Die for-Schleife wird nun dazu gentuzt, die Eingabe und die Bewertung es Kopfrechenspiels insgesamt viermal zu durchlaufen. Der Benutzer hat somit vier Versuche, das richtige Ergebnis zu ermitteln. Die Anweisung break dient zum Abbruch der Schleife, sobald der Benutzer das richtige Ergebnis eingegeben hat.

Die Aufgabe wird einmal ermittelt und gestellt. Der Benutzer wird maximal viermal dazu aufgefordert, ein Ergebnis einzugeben. Jede seiner Eingaben wird bewertet. Ist bereits einer der ersten drei Versuche richtig, wird die Schleife vorzeitig abgebrochen.

#### 3.4.5 For schleife mit `range()`

Mist werden Schleifen für regelmäßige Abfolgen von Zahlen genutzt. Dabei erweist sich der Einsatz der Funktion range() als sehr nützlich. Ein Beispiel:

```py
for i in range(3,11,2):
    print("Zahl:" i, "Quardrat:" i*i)
```
Es wird ausgegeben:
```
Zahl: 3 Quadrat: 9
Zahl: 5 Quadrat: 25
Zahl: 7 Quadrat: 49
Zahl: 9 Quadrat: 81
```

Der englische Begriff `range` bedeutet `Bereich`. Innerhalb der Kalmmern hinter `range` können bis zu drei Ganze Zahlen, durch kommata getrennt eingetragen werden:
*  Die erste ganze Zahl gibt den Beginn des  Bereichs an, für den die folgenden Anweisungen ausgeführt werden.
*  Die zweite ganze Zahl kennzeichnet das Ende des Bereichs. Es ist die erste Zahl, für die die Anweisungen **nicht mehr** ausgeführt werden.
*  Die dritte ganze Zahl gibt die Schrittweite für die Schleife an. Die Zahlen, für die die Anweisugnen ausgeführt werden, stehen zueinander also jeweils im Abstand von +2.

Der Aufruf der funktion range() mit den Zahlen, 3 11 und 2 ergibt somit die Abfolge: 3, 5, 7, 9.

Wir die Funktion Range() nur mit zwei Zahlen aufgerufen, so wird eine Schrittweite von 1 angenommen.

Wird die Funktion range() sogar nur mit einer Zahl aufgerufen, so wird diese Zahl einfach als die obere Grenze angesehen. Als untere Grenze gilt 0.
Außerdem wird wiederrum eine Schrittweite von 1 angenommen.

range(3) => 0 1 2

**Hinweis**
Bei der Funktion `range()` können eine oder mehrere der drei Zahlen auch negativ sein. Achten Sie auf sinnvolle Zahlenkombinationen. Die Angabe range(3,-11, 2) ist nicht sinnvoll, 
da man von der Zahl +3 in Schritten von +2 nicht zur Zahl -11 gelangt. Python fängt solche Schleifen ab und lässt sie nicht ausführen. Dasselbe gilt für die Zahlenkonbination range (3, 11, -2).


Für den regelmäßigen Ablauf von Zahlen mit Nachkommastellen muss die Schleifenvariable passend umgerechnet werden. Ein Beispiel:

```py
# 1. Version
for x in range(18,22):
    print(x/10)
print()

# 2. Version
x = 1.8
for i in range(4):
    print(x)
    x = x + 0.1
```
Die Ausgabe lautet:

```
1.8
1.9
2.0
2.1

1.8
1.90000000000001
2.0
2.1
```

Es werden jeweils die Zahlen von 1,8 bis 2,1 in Schritten von o,1 erzeugt.
* In der ersten Version werden die ganzen Zahlen von 18 bis 21 erzeugt und anschließend durch 10 geteilt.
* In der zweiten Version wird mit dem ersten Wert begonnen und innerhalb der Schleife jeweils um 0,1 erhöht. Dabei müssen Sie vorher errechnen, wie häufig die Schleife durchlaufen werden muss.
  

#### 3.4.6 Spiel, Version mit range()
Im Kopfrechenspiel wird die Schleife zur Wiederholung der Eingabe nun mithilfe von range() gebildet. Gleichzeitig haben Sie damit einen Zähler, der die laufende Nummer des Versuchs enthält. 
Sie können ihn verwenden, um dem Benutzer die Anzahl der Versuche mitzuteilen.

Der Benutzer hat maximal neun Versuche: range(1,10). Die Variable versch dient als ZÄhler für die Versuche. 
Nach Eingabe der richtigen Lösung (oder nach vollständigem Durchlauf der Schleife) wird dem Benutzer die Anzahl der Versuche mitgeteilt.

#### 3.4.7 while-Schleife
Die `while`-Schleife dient zur Steuerung einer Wiederholung mithilfe einer Bedingung. Im folgenden Programm werden zufällige Zahlen addiert und ausgegeben. 
Solange die Summe der Zahlen kleiner als 30 ist, wird der Vorgang wiederholt. Ist die Summe gleich oder größer als 30, wird das Programm beendet.

```py
#Zufallsgenerator
import random
random.seed()

# Initialisierung
summe = 0

# while-Schleife
while summe < 30:
    zzahl = random.randint(1,8)
    summe = summe + zzahl
    print("Zahl:", zzahl, "Zwischensumme:", summe)

print("Endergebnis:", summe)
```

Zunächst wird die Variable für die Summe der Zahlen auf 0 gesetzt.

Die While eAnweisung leitet die Schleife ein. Die wörtliche Übersetzung der Zeile lautet:
solange die SUmme kleiner als 30 ist. Dies bezieht sich auf die nachfolgenden eingerückten Anweisungen

Nach dem Wort while folgt, wie bei einer If Anweisung, eine Bedingung, die mithilfe von Vergleichsoperatoren erstellt wird.

Auch hier dürfen Sie den Doppelpunkt am Ende der Zeile nicht vergessen, ähnlich wie bei uf-else und for.

Es wird eine zufällige Zahl ermittelt und zur bisherigen Summe addiert. Die neue Summe errechnet sich also aus der alten Summe plus der generierten Zahl. Die neue Summe wird ausgegeben.

Die Anweisung zur Ausgabe des Texts Ende wird erst erreicht, wenn die Summe nicht mehr kleiner als 30 ist.

#### 3.4.8 Spiel, Version mit while-Schleife und Zähler

Die while Schleife wird nun auch im Kopferechenspiel zur Wiederholung der Eingabe genutzt. Der Benutzer hat beliebig viele Versuche, die Aufgabe zu lösen. Die Variable versuch, die als Zähler für die Versuche dient, muss separat gesteuert werden.
Sie ist nicht mehr automatisch eine Schleifenvariable.

Die Ausgabe hat sich nicht geändert.

Der Benutzer hat beliebig viele Verusche.

Die While-Schleife läuft, solange die richtige LÖsung nicht ermittelt wird. Die Variable zahl wird mit einem Wert vorbesetzt, der dafür sorgt, dass die while-Schleife mindestens einmal läuft. Die Veriable versuch wird mit 0 vorbesetzt und dient als laufende Nummer. Nach Eingabe der richtigen LÖsung wird dem Benutzer die Anzahl der Versuche mitgeteilt.

#### 3.4.9 Kombinierte Zuweisungsausdrücke

Mit Python 3.8 wird der Operator := für kombinierte Zuweisungen eingeführt. Er führt auch den Spitznahmen walrus-operator, aufgrund der Ähnlichkeit mit den Augen und den Zähnen eines Walrosses.
Er ermöglicht kürzere Ausdrücke, in denen allerdings eine höhere Komplexität steckt.
Nachfolgend sehen Sie, wie Sie mithilfe des Operators das Beispiel aus Abschnitt 3.4.7 verkürzen können

```py
import random 
random.seed()
summe = 0

while (summe := summe + random.randint(1,8)) <30:
    print("Zwischensumme:", summe)
print("Ende")
```

Die Zeile, die mit dem Schlüsselwort while beginnt, beinhaltet mehrere abläufe. Zunächst wird die Summe un einen zufällig ermittelten Wert erhöht. Anschließend wird die nue Summe mit der Zahl 30 verglichen. 
Dieser Vergleich steuert die Schleife. Aufgrund des niedrigen Vorrangs des Operators := muss die Zuweisung in runden Klammern stehen.

### 3.5 Entwicklung eines Programmes

Bei der Entwicklung Ihrer eigenen Programme sollten Sie Schritt für Schritt vorgehen. Stellen Sie zuerst einige Überlegungen dazu an, wie das gesamte Programm aufgebaut sein sollte, und zwar auf Papier. Aus welchen Teilen sollte es nacheinander bestehen? Versuchen Sie anschließend nicht, das gesamte Programm mit all seinen kopmlexen Bestandteilen auf einmal zu schreiben! Dies ist der größte Fehler, den Einsteiger (und manchmal auch Fortgeschrittene) machen können.

Schreiben Sie zunächst eine einfache Version des ersten Programmteils. Anschließend testen Sie sie. Erst nach einem erfolgreichen TEst fügen Sie den folgenden Programmteil hinzu. Nach jeder Änderung testen Sie wiederum.
Sollte sich ein Fehler zeugen, wissen Sie, dass er aufgrund der letzten Änderung aufgetreten ist. Nach dem letzten Hinzufügen haben Sie eine einfache Version Ihres gesamten Programms erstellt.

Nun ändern Sie einen Teil Ihres Programmes in eine komplexere Version ab. Auf diese Weise machen Sie Ihr Programm Schritt für Schritt komplexer, bis  Sie schließlich das gesamte Programm so erstellt haben, wie es Ihren anfänglichen Überlegungen auf Papier entspricht.

Manchmal ergibt sich während der praktischen Programmierung noch die eine oder andere Änderung gegenüber Ihrem Entwurf. Das ist kein Problem, solange sich nicht der gesamte Aufbau ändert. Sollte dies allerdings der Fall sein, kehren Sie noch einmal kurz zum Papier zurück und überdenken den Aufbau. Das bedeutet nicht, dass Sie die bisherigen Programmzeilen löschen müssen, sondern möglicherweise nur ein wenig ändern und anders anordnen.

Schreiben Sie Ihre Programme übersichtlich. Falls Sie gerade überlegen, wie sie drei, vier bestimmte Schritte Ihres Programms auf einmal machen können: Machen Sie daraus einfach einzelne Anwendungen, die der Reihe nach ausgeführt werden. Dies vereinfacht eine eventuelle Fehlersuche. Wenn Sie oder eine andere person Ihr Programm später einmal ändern oder erweitern möchten, gelingt der Einstieg in den Aufbau des Programms wesentlich schneller.

Sie können die Funktion `print()` zur Kontrolle von Werten und zur Suche von logsichen Fehlern einsetzten. Zusätzlich können Sie einzelne Zeilen Ihres Programms als Kommentar kennzeichne, um festzustellen, welcher Teil des Programms fehlerfrei läuft und welcher Teil demnach fehlerbehaftet ist.

### 3.6 Fehler und Ausnahmen

Macht der Anwender nach einer Eingabeaufforderung eine falsche Eingabe (gibt er z. B. keine Zahl, sondern einen Text ein), wird das Programm mit einer Fehlermeldung beendet. Bisher gehe ich vereinfacht davon aus, dass der Anwender korrekte Eingaben vornimmt. In diesem Abschnitt beschreibe ich, wie Sie Fehler vermeiden oder abfangen können.

#### 3.6.1 Basisprogramm
Durch das Abfangen von falschen Eingaben wird die Benutzung eines Programms für den Anwender duetlich kompfortabler. Im folgenden Programm soll eine ganze Zahl eingegeben werden. Da der Benutzer diese Programm durch die Eingaber von Text oder Sonderzeichen zum Abbruch bringen kann, wird es immer weiter verbessert.

```py
# Eingabe
print("Bitte geben Sie eine Zahl ein!")
z = input()

# Umwandlung
zahl = int(z)

# Ausgabe
print("Sie haben die ganze Zahl", zahl, "richtig eingegeben")
print("Ende des Programms")
```

Gibt der Anwender eine Zahl, zB 12 ein, läuft das Programm fehlerfrei bis zum Ende und erzeugt die gewünschte Ausgabe.

Macht der Anweder jedoch eine falsche Eingabe (z.B. 3a), bricht das Programm vorzeitig ab und erzeugt die folgende Ausgabe:

```
Traceback (most recent call last):
  File "insert-path.py", line 6, in <module>
    zahl = int(z)
VauleError: invalid literal for int() with base 10: '3a'
```

Diese Information weisen auf die STelleim Programm hin, an der der Fehler bemerkt wird. Außerdem wird die Art des Fehler mitgeteilt (ValueError).

#### 3.6.2 Fehler abfangen

Zunächst soll eine Fehleingabe abgefangen werden, um einen Abbruch des Programms zu vermeiden. Zu diesem Zweck müssen Sie die STelle hausfinden, an der eine Fehleingabe auftreten kann. Hier müssen Sie das Programm verbessern.

Das Programm soll zukünftig an dieser Stelle alle Arten von Fehlern abfangen, die Python automatisch erkennen kann. Dies erreichen Sie in einem ersten Schritt durch die folgende Änderung:

```py
# Eingabe
print("Bitte geben Sie eine ganze Zahl ein")
z = input()

# Versuch der Umwandlung

try:
    zahl = int(z)
    print("Sie haben die ganze Zahl", zahl, " richtig eingegeben")

# Fehler bei Umwandlung

except:
    print("Sie haben die ganze Zahl nicht richtig eingegeben")

print("Ende des Programms")
```

Wenn der Anwender eine richtige ganze Zahl eingibt, läuft das Programm wie bisher. Bei einer falschen Eingabe erscheint nun eine entsprechende Meldung. Das Programm bricht jedoch nicht ab, sondern läuft bis zum Ende.

**try**
Die Anweisung try leitet eine Ausnahmebehandlung ein. Ähnlich wie bei der if-Anweisung gibt es verschiedene Zweige, die das Programm durchlaufen kann. Das programm versucht (try), die Anweisungen durchzuführen, die eingerückt nach try stehen.
Falls die Eingabe erfolgreich ist, wird der except Zweig nicht ausgeführt, ähnlich wie beim else Zweit der if-Anweisung.

**except**
Ist die Eingabe daggen nicht erfolgreich und handelt es such um einen Fehler, wird der Fehler oder adie Ausnahme(exception) mit der Anweisung except abgefangen. In diesem Fall werden alle eingerückten Anweisungen im except-Zweig durchgeführt. Das Programm läuft ohne Abbruch zu Ende, da der Fehler zwar auftritt, aber abgefangen wird.

Nach try und except muss jeweils ein Doppelunkt gesetzt werden, wie bei if-else, for oder while.

**Hinweis**
Nur die kritische Zeile wird in der Ausnahmebehandlung eingebettet. Sie sollten sich also Gedanken darüber machen, welche Stellen Ihres Programms fehlerträchtig sind. Eine Eingeabeaufforderung ist solch ein kritische Stelle. Andere Fehlermöglichkeiten sind z. B. die Bearbeitung einer Datei (die möglicherweise nicht exisitert) oder die Ausgabe an einen Drucker (der vielleicht nicht eingeschaltet ist).


#### 3.6.3 Eingabe wiederholen

In einem zweiten Schritt wird dafür gesorgt, dass der Anwender nach einer falschen Eingabe eine erneute Eingabe machen kann. Der gesamt Eingabevorgang mit Ausnahmebehandlung wird so lange wiederholt, bis die Eingabe erfolgreich war. Betrachten Sie das folgende Programm:

```py
# Initialisierung der while-Schleife
fehler = 1

# Schleife bei falscher Eingabe

while fehler == 1:
    # Eingabe
    print("Bitte geben Sie eine ganze Zahl ein")
    z = input()

    # Versuch der Umwandlung
    try:
        zahl = int(z)
        print("Sie haben die ganze Zahl", zahl, "eingegeben")
        fehler = 0
    
    # Fehler bei Umwandlung
    except:
        print("Sie ahben die ganze Zahl nicht richtig eingegeben")

print("Ende des Programms")
```

**Hinweis**
Beachten Sie die doppelte Einrückung: einmal nach while und nocheinmal nach try-except.

Die Variable fehler ist notwending, um die Eingabe gegebenenfalls wiederholen zu können. Sie wird zunächst auf den Wert 1 gesetzt. Es wird eine while-Schleife formuliert, in der der Eingabevorgang mit der Ausnahmebehandlung eingebettet ist. Die Schleife wird wiederholt, solange die Variable fehler den wert 1 hat.

Ist die Eingabe erfolgreich, wird die Variable fehler auf 0 gesetzt. Das führt dazu, dass die Schleife beendet wird und da Programm regulär fortfahren kann. Ist die Eingabe nicht erfolgreich, hat fehler nach wie vor den wert 1 und der Eingabevorgang wird wiederholt.

#### 3.6.4 Exkurs: Schleifenfortsetzung mit `continue`

An dieser Stelle möchte ich auf ein Thema zurückkommen, das bereists in Abschnitt 3.4 Schleifen, behandelt wurde. Sie kennen aus diesem Abschnitt die Anweisung break, die zum unmittelbaren Abbruch einer Schleife führt.

Die Anweisung `continue` dient zum unmittelbaren Abbruch des aktuellen Durchlaufs einer Schleife. Die Schleife wird anschließend mit dem nächsten Durchlauf fortgesetzt. Betrachten Sie hierzu das folgende Programm:

```py
for i in range (1,7):
    print("Zahl:", i)
    if 3 <= i <= 5:
        continue
    print("Quadrat:", i*i)
```

Die Schleife durchläuft alle Zahlen von 1 bis 6. Alle diese Zahlen werden auch ausgegeben. Liegt die aktuelle Zahl zwischen 3 und 5, wird der Rest der Schleife übergangen und unmittelbar der nächste Schleifendurchlauf begonnen. Andernfalls wird das Quadrat der Zahl ausgegeben.

#### 3.6.5 Spiel, Version mit Ausnahmebedingung

